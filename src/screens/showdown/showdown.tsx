import React from 'react';
import styled from 'styled-components/native';
import {Cards, Header, Screen, Stats} from './components';
import useShowdown from './hooks';

const ShowdownScreenComponent = () => {
  const {data, actions} = useShowdown();

  return (
    <Screen testID="ShowdownScreen">
      <Top>
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
          <Cards data={data?.actives} />
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
