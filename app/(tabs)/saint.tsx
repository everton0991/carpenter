import { YStack } from 'tamagui';
import { ContainerXStack } from '@/components/Styled';
import SaintsList from '@/components/saints/SaintsList';

export default function SaintScreen() {
  return (
    <ContainerXStack padding='$0'>
      <YStack padding='$4' marginBottom='$4'>
        <SaintsList />
      </YStack>
    </ContainerXStack>
  );
}
