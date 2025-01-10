import { useState } from 'react';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import Colors from '@/constants/Colors';
import { FirstRead, SecondRead, Gospel, Psalm } from './LiturgyTabContent';
import { useLiturgyData } from '@/hooks/useLiturgyData';

const renderScene = SceneMap({
  'first-read': FirstRead,
  'second-read': SecondRead,
  psalm: Psalm,
  gospel: Gospel,
});

export default function LiturgyTabs() {
  const { t } = useTranslation();
  const { secondRead } = useLiturgyData();
  const colorScheme = useColorScheme();

  const routes = [
    { key: 'first-read', title: t('1° Leitura') },
    ...(secondRead.title
      ? [{ key: 'second-read', title: t('2° Leitura') }]
      : []),
    { key: 'psalm', title: t('Salmo') },
    { key: 'gospel', title: t('Evangelho') },
  ];

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      renderTabBar={(props) => (
        <TabBar
          indicatorStyle={{
            backgroundColor: Colors[colorScheme ?? 'light'].tint,
          }}
          activeColor={Colors[colorScheme ?? 'light'].tint}
          inactiveColor={Colors[colorScheme ?? 'light'].text}
          style={{ backgroundColor: 'transparent' }}
          {...props}
        />
      )}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, height: 30 }}
    />
  );
}
