import React from 'react';
import {Chip as UnstyledChip} from 'react-native-paper';
import styled from 'styled-components/native';

interface Card {
  id: string;
  name: string;
}

interface Props {
  data?: Card[];
}

const Cards = ({data}: Props) => (
  <Container horizontal showsHorizontalScrollIndicator={false}>
    {data?.map(card => {
      return (
        <Chip key={card.id} mode="outlined">
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
