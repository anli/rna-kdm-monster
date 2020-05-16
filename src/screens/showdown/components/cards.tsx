import React from 'react';
import {Chip as UnstyledChip} from 'react-native-paper';
import styled from 'styled-components/native';

interface Card {
  id: string;
  name: string;
}

interface Props {
  data?: Card[];
  onPress: (id: string) => any;
  selected: {cardId?: string; deckId?: string};
  deckId: string;
  testID: string;
}

const Cards = ({data, onPress: _onPress, selected, deckId, testID}: Props) => (
  <Container horizontal showsHorizontalScrollIndicator={false}>
    {data?.map(card => {
      const isSelected = getSelected(
        card.id,
        deckId,
        selected.cardId,
        selected.deckId,
      );

      const onPress = () => _onPress(card.id);
      return (
        <Chip
          testID={`${testID}.${card.id}`}
          key={card.id}
          mode="outlined"
          onPress={onPress}
          selected={isSelected}>
          {card.name}
        </Chip>
      );
    })}
  </Container>
);

export default Cards;

const Container = styled.ScrollView``;

const Chip = styled(UnstyledChip)`
  margin-right: 8px;
  max-height: 32px;
  min-height: 32px;
`;

const getSelected = (
  cardId: string,
  deckId: string,
  selectedCardId: string = '',
  selectedDeckId: string = '',
) => cardId === selectedCardId && deckId === selectedDeckId;
