import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  // Link,
  Tabs,
} from 'expo-router';
// import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useTranslation } from 'react-i18next';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -6 }} {...props} />;
}

export default function TabLayout() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  // TODO - Choose better icons
  // TODO - This is a constant value should be outside render - Investigate translation state outside rendering
  const menu = [
    {
      name: 'index',
      title: t('Liturgia do Dia'),
      icon: ({ color }: { color: string }) => (
        <TabBarIcon name='calendar' color={color} />
      ),
      // TODO - Uncomment when modal is needed
      // headerInfo: () => (
      //   <Link href='/modal' asChild>
      //     <Pressable>
      //       {({ pressed }) => (
      //         <FontAwesome
      //           name='info-circle'
      //           size={25}
      //           color={Colors[colorScheme ?? 'light'].text}
      //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
      //         />
      //       )}
      //     </Pressable>
      //   </Link>
      // ),
    },
    {
      name: 'bible',
      title: t('Biblia de Jerusalem'),
      icon: ({ color }: { color: string }) => (
        <TabBarIcon name='book' color={color} />
      ),
    },
    {
      name: 'saint',
      title: t('Santo do Dia'),
      icon: ({ color }: { color: string }) => (
        <TabBarIcon name='user-o' color={color} />
      ),
    },
    {
      name: 'settings',
      title: t('Settings'),
      icon: ({ color }: { color: string }) => (
        <TabBarIcon name='gear' color={color} />
      ),
    },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      {menu?.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          options={{
            title: item.title,
            tabBarLabel: '',
            tabBarIcon: item.icon,
            // headerRight: item.headerInfo,
          }}
        />
      ))}
    </Tabs>
  );
}
