import React, { useRef } from 'react';
import { Text } from '../Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button, XStack } from 'tamagui';
import { FlatList } from 'react-native';
import { useState } from 'react';

const Icon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color?: string;
}) => {
  return <FontAwesome size={28} {...props} />;
};

export default function BookChapter({
  title,
  currentBook,
  setShowBooksList,
}: {
  title: string;
  currentBook: any;
  setShowBooksList: (showBooks: boolean) => void;
}) {
  const initialIndex = currentBook.length > 1 ? 1 : 0;
  const [bookIndex, setBookIndex] = useState(initialIndex);
  const [firstBlock] = currentBook;
  const { title: bookTitle } = firstBlock;
  const currentChapter = currentBook[bookIndex];
  const flatListRef = useRef<FlatList>(null);

  const handlePrev = () => {
    setBookIndex((index) => (index > 1 ? index - 1 : index));
    flatListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
  };

  const handleNext = () => {
    setBookIndex((index) =>
      index < currentBook.length - 1 ? index + 1 : index
    );
    flatListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
  };

  return (
    <>
      <XStack justifyContent='space-between' paddingBottom='$1'>
        <Text fontSize='$8' fontWeight='bold' width='80%'>
          {bookTitle}
        </Text>

        <Button
          marginBottom='$1'
          fontSize='$5'
          onPress={() => setShowBooksList(true)}
          icon={<Icon name='list' />}
        />
      </XStack>

      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={[...currentChapter.verses]}
        ListHeaderComponent={
          <Text fontSize='$6' fontWeight='bold' width='90%' paddingBottom='$3'>
            {currentChapter.title ? currentChapter.title : null}
          </Text>
        }
        renderItem={({ item }) => (
          <Text fontSize='$5' paddingBottom='$4'>
            {item}
          </Text>
        )}
      />

      <XStack justifyContent='space-between' alignItems='center'>
        <Button
          marginBottom='$1'
          fontSize='$5'
          disabled={bookIndex === 1}
          disabledStyle={{ opacity: 0.6 }}
          onPress={handlePrev}
          icon={<Icon name='chevron-left' />}
        />

        <Text fontSize='$6' fontWeight='bold'>
          {`${title} ${bookIndex || 1}/${currentBook.length - 1}`}
        </Text>

        <Button
          marginBottom='$1'
          fontSize='$5'
          disabled={bookIndex === currentBook.length - 1}
          disabledStyle={{ opacity: 0.6 }}
          onPress={handleNext}
          icon={<Icon name='chevron-right' />}
        />
      </XStack>
    </>
  );
}
