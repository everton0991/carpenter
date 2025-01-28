import React from 'react';
import { Button, XStack, YStack } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useState } from 'react';
import {
  CATHOLIC_BIBLE_BOOKS,
  CATHOLIC_BIBLE_BOOKS_CONTENT,
} from '@/constants/BibleBooks';
import BookChapter from './BookChapter';

type Testament = 'oldTestament' | 'newTestament';

const TestamentSelection = ({
  testament,
  setSelectedBook,
  setSelectedTestament,
}: {
  testament: Testament;
  setSelectedBook: (book: string) => void;
  setSelectedTestament: (testament: Testament) => void;
}) => {
  const { t } = useTranslation();

  return (
    <XStack gap='$1' justifyContent='space-between' paddingBottom='$2'>
      <Button
        size='$4.5'
        onPress={() => {
          setSelectedBook('');
          setSelectedTestament('oldTestament');
        }}
        fontSize='$5'
        color={testament === 'oldTestament' ? 'violet' : ''}
      >
        {t('Antigo Testamento')}
      </Button>
      <Button
        size='$4.5'
        onPress={() => {
          setSelectedBook('');
          setSelectedTestament('newTestament');
        }}
        fontSize='$5'
        color={testament === 'newTestament' ? 'violet' : ''}
      >
        {t('Novo Testamento')}
      </Button>
    </XStack>
  );
};

const BooksList = ({
  testament,
  setSelectedBook,
}: {
  testament: string;
  setSelectedBook: (key: string) => void;
}) =>
  testament ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Object.entries(CATHOLIC_BIBLE_BOOKS[testament])}
      renderItem={({ item }) => {
        const [key, value] = item;
        return (
          <Button
            marginBottom='$3'
            fontSize='$5'
            onPress={() => setSelectedBook(key)}
          >
            {value}
          </Button>
        );
      }}
    />
  ) : null;

export default function BibleList() {
  const [showBooksList, setShowBooksList] = useState<boolean>(true);
  const [testament, setSelectedTestament] = useState<Testament>('oldTestament');
  const [selectedBook, setSelectedBook] = useState<string>();
  const currentBook = selectedBook
    ? CATHOLIC_BIBLE_BOOKS_CONTENT[selectedBook]
    : null;

  const handleBookSelection = (key: string) => {
    setSelectedBook(key);
    setShowBooksList(false);
  };

  return (
    <YStack height='100%' gap='$2'>
      {showBooksList ? (
        <>
          <TestamentSelection
            testament={testament}
            setSelectedBook={setSelectedBook}
            setSelectedTestament={setSelectedTestament}
          />

          {testament ? (
            <BooksList
              testament={testament}
              setSelectedBook={handleBookSelection}
            />
          ) : null}
        </>
      ) : null}

      {!showBooksList && selectedBook ? (
        <BookChapter
          title={CATHOLIC_BIBLE_BOOKS[testament][selectedBook]}
          currentBook={currentBook}
          setShowBooksList={setShowBooksList}
        />
      ) : null}
    </YStack>
  );
}
