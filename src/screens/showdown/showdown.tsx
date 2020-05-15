import React from 'react';
import {ScrollView} from 'react-native';
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
            testID={`CARD_IMAGE.${data?.selected?.cardId}`}
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
        <ActiveCards>
          <Cards
            data={data?.actives}
            onPress={actions?.onSelectActive}
            selected={data?.selected}
            deckId="actives"
          />
        </ActiveCards>
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

const ActiveCards = styled.View`
  margin-left: 16px;
`;
