import { Text } from '@/components/Themed';
import { useTranslation } from 'react-i18next';
import LiturgyTabs from '@/components/liturgy/LiturgyTabs';
import { ContainerXStack } from '@/components/Styled';
import { XStack, YStack } from 'tamagui';

export default function TabOneScreen() {
  const { t } = useTranslation();

  // TODO - Move Date Header to its own component to be reused
  // TODO - Ideally move everything with styling to Themed.tsx
  return (
    <ContainerXStack padding='$0'>
      <YStack padding='$4' marginBottom='$4'>
        <XStack alignItems='center' gap='$4'>
          <YStack alignItems='center'>
            <Text fontSize='$10' fontWeight='bold'>
              {t('26')}
            </Text>

            <Text fontSize='$6' fontWeight='bold'>
              {t('Nov - 2024')}
            </Text>
          </YStack>

          <YStack gap='$2'>
            <Text fontWeight='bold' fontSize='$5'>
              {t('34th Week of Ordinary Time')}
            </Text>
            <Text fontWeight='bold' fontSize='$5'>
              {t('Liturgical Color: {{color}}', { color: 'Green' })}
            </Text>
            <Text fontWeight='bold' fontSize='$5'>
              {t('Tuesday')}
            </Text>
          </YStack>
        </XStack>
      </YStack>

      <LiturgyTabs />
    </ContainerXStack>
  );
}
