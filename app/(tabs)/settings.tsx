import { ContainerXStack } from '@/components/Styled';
import { YStack } from 'tamagui';
import SettingsMenu from '@/components/settings/SettingsMenu';

export default function SettingsScreen() {
  return (
    <ContainerXStack padding='$0'>
      <YStack padding='$4' marginBottom='$4'>
        <SettingsMenu />
      </YStack>
    </ContainerXStack>
  );
}
