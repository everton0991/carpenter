import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { YStack, Label, Switch } from 'tamagui';
import { Appearance, useColorScheme } from 'react-native';

const SettingsMenu = () => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    setTimeout(() => {
      Appearance.setColorScheme(isDarkTheme ? 'light' : 'dark');
    }, 300);
  };

  return (
    <YStack gap='$1'>
      <Label paddingRight='$0' minWidth={90} justifyContent='flex-end'>
        {t('Tema Dark')}
      </Label>

      <Switch
        size='$2'
        onCheckedChange={handleThemeChange}
        checked={isDarkTheme}
      >
        <Switch.Thumb animation='bouncy' />
      </Switch>
    </YStack>
  );
};

export default SettingsMenu;
