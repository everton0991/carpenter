import { Text } from '../Themed';

import React from 'react';
import { YStack } from 'tamagui';

function ViewContainer({ children }: { children: React.ReactNode }) {
  return (
    <YStack paddingVertical='$5' paddingHorizontal='$4' gap='$3'>
      {children}
    </YStack>
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

export function FirstReading() {
  return (
    <ViewContainer>
      <TitleText>Apocalypse 14:14-19 </TitleText>
      <TitleText>The harvest and the vintage of the earth are ripe</TitleText>
      <NormalText>
        In my vision I, John, saw a white cloud and, sitting on it, one like a
        son of man with a gold crown on his head and a sharp sickle in his hand.
        Then another angel came out of the sanctuary, and shouted aloud to the
        one sitting on the cloud, ‘Put your sickle in and reap: harvest time has
        come and the harvest of the earth is ripe.’ Then the one sitting on the
        cloud set his sickle to work on the earth, and the earth’s harvest was
        reaped. Another angel, who also carried a sharp sickle, came out of the
        temple in heaven, and the angel in charge of the fire left the altar and
        shouted aloud to the one with the sharp sickle, ‘Put your sickle in and
        cut all the bunches off the vine of the earth; all its grapes are ripe.’
        So the angel set his sickle to work on the earth and harvested the whole
        vintage of the earth and put it into a huge winepress, the winepress of
        God’s anger.
      </NormalText>
    </ViewContainer>
  );
}

export function Psalm() {
  return (
    <ViewContainer>
      <TitleText>Psalm 95(96):10-13</TitleText>
      <TitleText>The Lord comes to rule the earth.</TitleText>
      <NormalText>
        Proclaim to the nations: ‘God is king.’ The world he made firm in its
        place; he will judge the peoples in fairness.
      </NormalText>
      <TitleText>The Lord comes to rule the earth.</TitleText>
      <NormalText>
        Let the heavens rejoice and earth be glad, let the sea and all within it
        thunder praise, let the land and all it bears rejoice, all the trees of
        the wood shout for joy at the presence of the Lord for he comes, he
        comes to rule the earth.
      </NormalText>
      <TitleText>The Lord comes to rule the earth.</TitleText>
      <NormalText>
        With justice he will rule the world, he will judge the peoples with his
        truth.
      </NormalText>
      <TitleText>The Lord comes to rule the earth.</TitleText>
    </ViewContainer>
  );
}

export function Gospel() {
  return (
    <ViewContainer>
      <TitleText>Gospel Acclamation - Luke 21:28</TitleText>
      <NormalText>
        Alleluia, alleluia! Stand erect, hold your heads high, because your
        liberation is near at hand. Alleluia!
      </NormalText>
      <TitleText>Gospel - Luke 21:5-11</TitleText>
      <NormalText>
        When some were talking about the Temple, remarking how it was adorned
        with fine stonework and votive offerings, Jesus said, ‘All these things
        you are staring at now – the time will come when not a single stone will
        be left on another: everything will be destroyed.’ And they put to him
        this question: ‘Master,’ they said ‘when will this happen, then, and
        what sign will there be that this is about to take place?’ ‘Take care
        not to be deceived,’ he said ‘because many will come using my name and
        saying, “I am he” and, “The time is near at hand.” Refuse to join them.
        And when you hear of wars and revolutions, do not be frightened, for
        this is something that must happen but the end is not so soon.’ Then he
        said to them, ‘Nation will fight against nation, and kingdom against
        kingdom. There will be great earthquakes and plagues and famines here
        and there; there will be fearful sights and great signs from heaven.’
      </NormalText>
    </ViewContainer>
  );
}
