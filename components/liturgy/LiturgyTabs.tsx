import { useState } from 'react';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import Colors from '@/constants/Colors';
import { FirstReading, Gospel, Psalm } from './LiturgyTabContent';

const renderScene = SceneMap({
  'first-reading': FirstReading,
  psalm: Psalm,
  gospel: Gospel,
});

export default function LiturgyTabs() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  const routes = [
    { key: 'first-reading', title: t('FIRST READING') },
    { key: 'psalm', title: t('PSALM') },
    { key: 'gospel', title: t('GOSPEL') },
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
