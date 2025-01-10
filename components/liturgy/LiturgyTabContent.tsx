import { ScrollView } from 'react-native';
import { Text } from '@/components/Themed';
import { useLiturgyData } from '@/hooks/useLiturgyData';

import { YStack } from 'tamagui';

function ViewContainer({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <YStack paddingVertical='$5' paddingHorizontal='$4' gap='$3'>
        {children}
      </YStack>
    </ScrollView>
  );
}

function TitleText({ children }: { children: React.ReactNode }) {
  return (
    <Text fontWeight='bold' fontSize='$5' textAlign='justify'>
      {children}
    </Text>
  );
}

function NormalText({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize='$5' textAlign='justify'>
      {children}
    </Text>
  );
}

export function FirstRead() {
  const { firstRead } = useLiturgyData();
  return (
    <ViewContainer>
      <TitleText>{firstRead.ref}</TitleText>
      <TitleText>{firstRead.title}</TitleText>
      <NormalText>{firstRead.text}</NormalText>
    </ViewContainer>
  );
}

export function SecondRead() {
  const { secondRead } = useLiturgyData();
  return (
    <ViewContainer>
      <TitleText>{secondRead.ref}</TitleText>
      <TitleText>{secondRead.title}</TitleText>
      <NormalText>{secondRead.text}</NormalText>
    </ViewContainer>
  );
}

export function Psalm() {
  const { psalm } = useLiturgyData();
  return (
    <ViewContainer>
      <TitleText>{psalm.ref}</TitleText>
      <TitleText>{psalm.chorus}</TitleText>
      <NormalText>{psalm.text}</NormalText>
    </ViewContainer>
  );
}

export function Gospel() {
  const { gospel } = useLiturgyData();
  return (
    <ViewContainer>
      <TitleText>{gospel.ref}</TitleText>
      <TitleText>{gospel.title}</TitleText>
      <NormalText>{gospel.text}</NormalText>
    </ViewContainer>
  );
}
