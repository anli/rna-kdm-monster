import React from 'react';
import {ScrollView} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import styled from 'styled-components/native';
import {CardImage, Cards, Header, Screen, Stats} from './components';
import useShowdown from './hooks';

const ShowdownScreenComponent = () => {
  const {data, actions} = useShowdown();

  return (
    <Screen testID="ShowdownScreen">
      <Top>
        <ScrollView>
          <CardImage
            testID={`CardImage.${data?.selected?.cardId}`}
            imageUrl={data?.selected?.imageUrl}
          />
        </ScrollView>
        <StatsContainer>
          <Stats
            data={data?.stats}
            onPress={actions?.onIncreaseStat}
            onLongPress={actions?.onDecreaseStat}
          />
        </StatsContainer>
      </Top>
      <Bottom>
        <Header title={data?.monsterName} description={data?.encounterName} />
        <CardsContainer>
          <Cards
            testID="Cards"
            data={data?.actives}
            onPress={actions?.onSelectActive}
            selected={data?.selected}
            deckId="actives"
          />
        </CardsContainer>

        <List.Item
          title={`AI (${data?.ai.draws.length})`}
          right={props => (
            <>
              <IconButton
                {...props}
                testID="Button.AiDiscardsShuffle"
                icon="cards"
                onPress={actions?.onShuffleAiDiscards}
              />
              <IconButton
                testID="Button.AiDraw"
                disabled={!(data?.ai.draws.length > 0)}
                {...props}
                icon="hand-okay"
                onPress={actions?.onDrawAi}
              />
            </>
          )}
        />
        <CardsContainer>
          <Cards
            testID="Cards"
            data={data?.ai.discards}
            onPress={actions?.onSelectAi}
            selected={data?.selected}
            deckId="ais"
          />
        </CardsContainer>
      </Bottom>
    </Screen>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = ShowdownScreenComponent;
  static Options = ShowdownScreenOptions;
}

const StatsContainer = styled.View`
  position: absolute;
  margin-left: 8px;
  margin-bottom: 8px;
  bottom: 0;
`;

const Top = styled.View`
  background-color: grey;
  flex: 1;
  max-height: 400px;
`;

const Bottom = styled.View``;

const CardsContainer = styled.View`
  margin-left: 16px;
`;
