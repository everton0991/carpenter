import BibleList from '@/components/bible/BibleList';
import { ContainerXStack } from '@/components/Styled';

import { YStack } from 'tamagui';

export default function BibleScreen() {
  return (
    <ContainerXStack padding='$0'>
      <YStack padding='$4' marginBottom='$4'>
        <BibleList />
      </YStack>
    </ContainerXStack>
  );
}
