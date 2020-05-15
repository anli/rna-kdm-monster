import React from 'react';
import {Header, Screen} from './components';
import useShowdown from './hooks';

const ShowdownScreenComponent = () => {
  const {data} = useShowdown();

  return (
    <Screen testID="ShowdownScreen">
      <Header title={data?.monsterName} description={data?.encounterName} />
    </Screen>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = ShowdownScreenComponent;
  static Options = ShowdownScreenOptions;
}
