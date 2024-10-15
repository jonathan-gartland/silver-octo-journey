import { Tabs } from 'expo-router';
import React from 'react';

import {
  Home as HomeIcon,
  MpnLookupi,
  Settings as SettingsIcon,
  //Style as StyleIcon,
} from '@/ui/icons';
export default function MpnLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarTestID: 'feed-tab',
        }}
      />

      <Tabs.Screen
        name="quantitray"
        options={{
          title: 'QT',
          headerShown: false,
          tabBarIcon: ({ color }) => <MpnLookupi color={color} />,
          tabBarTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="quantitray2000"
        options={{
          title: 'QT2K',
          headerShown: false,
          tabBarIcon: ({ color }) => <MpnLookupi color={color} />,
          tabBarTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="legiolert"
        options={{
          title: 'Legio',
          headerShown: false,
          tabBarIcon: ({ color }) => <MpnLookupi color={color} />,
          tabBarTestID: 'style-tab',
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarTestID: 'about-tab',
        }}
      />
    </Tabs>
  );
}
