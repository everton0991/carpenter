import React from 'react';
import { StyleSheet } from 'react-native';

import { MonoText } from './Styled';
import { Text, View } from './Themed';
import { useTranslation } from 'react-i18next';

// TODO - Delete this component
export default function EditScreenInfo({ path }: { path: string }) {
  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor='rgba(0,0,0,0.8)'
          darkColor='rgba(255,255,255,0.8)'
        >
          {t('Open up the code for this screen:')}
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor='rgba(255,255,255,0.05)'
          lightColor='rgba(0,0,0,0.05)'
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor='rgba(0,0,0,0.8)'
          darkColor='rgba(255,255,255,0.8)'
        >
          {t(
            'Change any of the text, save the file, and your app will automatically update.'
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
