import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Button, YStack } from 'tamagui';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from '../Themed';

const IMAGE_URL = 'https://cdn.oantagonista.com/uploads/2024/03/Sao-Jose.jpg';

// TODO - Implement Saints List Service
export default function SaintsList() {
  return (
    <YStack gap='$3' justifyContent='space-between' paddingBottom='$2'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: IMAGE_URL,
          }}
          style={{ width: '100%', height: 250, borderRadius: 10 }}
        />

        {/* TODO - Implement Share Feature */}
        <Button
          marginTop='$3'
          marginBottom='$3'
          fontSize='$5'
          icon={<FontAwesome size={16} name='share' />}
        >
          Share
        </Button>

        <Text fontSize='$6' fontWeight='bold' marginVertical='$2'>
          O Dia de São José é celebrado em 19 de março
        </Text>

        <Text fontSize='$5' marginBottom='$2'>
          São José é o esposo da Virgem Maria e o pai adotivo de Jesus Cristo. É
          também o patrono universal da Igreja e padroeiro das famílias e dos
          trabalhadores. Lembramos de São José como o chefe de família, e um pai
          cuidadoso, zeloso e fiel. A vida de São José deve ser um exemplo para
          todos nós, e todos os pais devem se inspirar em São José, sendo bons
          maridos em casa e bons chefes de famílias. Os pais hoje devem
          conquistar os seus filhos, ser companheiros de seus filhos, e
          educá-los na fé e no amor. Não existe família perfeita, mas as
          famílias devem fazer de tudo para viver bem. Façamos o esforço de
          participar da missa em louvor a São José com a família reunida,
          pedindo a intercessão de São José para que a nossa família seja o
          exemplo da Sagrada Família de Nazaré.
        </Text>
        <Text fontSize='$5' marginBottom='$2'>
          São José, rogai por nós.
        </Text>
      </ScrollView>
    </YStack>
  );
}
