import { Text } from '@/components/Themed';
import { useTranslation } from 'react-i18next';
import LiturgyTabs from '@/components/liturgy/LiturgyTabs';
import { ContainerXStack } from '@/components/Styled';
import { XStack, YStack } from 'tamagui';
import { useLiturgyData } from '@/hooks/useLiturgyData';

export default function TabOneScreen() {
  const { t } = useTranslation();
  const { title, color, date } = useLiturgyData();

  // TODO - Check network connection and show a user friendly UI
  // TODO - Move Date Header to its own component to be reused
  // TODO - Ideally move everything with styling to Themed.tsx
  return (
    <ContainerXStack padding='$0'>
      <YStack padding='$4' marginBottom='$4'>
        <XStack alignItems='center' gap='$4'>
          <YStack alignItems='center'>
            <Text fontSize='$10' fontWeight='bold'>
              {date.day}
            </Text>

            <Text fontSize='$6' fontWeight='bold'>
              {`${date.month} - ${date.year}`}
            </Text>
          </YStack>

          <YStack gap='$2'>
            <Text fontWeight='bold' width='80%' fontSize='$5'>
              {title}
            </Text>
            <Text fontWeight='bold' fontSize='$5'>
              {t('Cor Litúrgica: {{color}}', { color })}
            </Text>
            <Text fontWeight='bold' fontSize='$5'>
              {date.weekDay}
            </Text>
          </YStack>
        </XStack>
      </YStack>

      <LiturgyTabs />
    </ContainerXStack>
  );
}
