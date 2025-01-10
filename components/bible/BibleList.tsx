import { useTranslation } from 'react-i18next';
import genesisBook from '@/bible_json/genesis.json';
import { Text } from '../Themed';
import { YStack } from 'tamagui';
import { FlatList } from 'react-native';

export default function BibleList() {
  const { t } = useTranslation();
  const { chapters } = genesisBook;
  const [firstChapter] = chapters;

  return (
    <YStack>
      <Text fontSize='$6' fontWeight='bold' paddingBottom='$3'>
        {genesisBook.title}
      </Text>

      {firstChapter.title ? (
        <Text fontSize='$5' fontWeight='700' paddingBottom='$3'>
          {firstChapter.title}
        </Text>
      ) : null}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={firstChapter.verses}
        renderItem={({ item }) => (
          <Text fontSize='$5' paddingBottom='$2'>
            {item}
          </Text>
        )}
      />
    </YStack>
  );
}
