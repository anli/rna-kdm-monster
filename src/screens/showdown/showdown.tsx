import React from 'react';
import styled from 'styled-components/native';
import {Header, Screen, Stats} from './components';
import useShowdown from './hooks';

const ShowdownScreenComponent = () => {
  const {data, actions} = useShowdown();

  return (
    <Screen testID="ShowdownScreen">
      <Header title={data?.monsterName} description={data?.encounterName} />
      <StatsContainer>
        <Stats
          data={data?.stats}
          onPress={actions?.onIncreaseStat}
          onLongPress={actions?.onDecreaseStat}
        />
      </StatsContainer>
    </Screen>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = ShowdownScreenComponent;
  static Options = ShowdownScreenOptions;
}

const StatsContainer = styled.View`
  margin-left: 8px;
`;
