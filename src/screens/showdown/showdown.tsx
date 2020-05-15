import React from 'react';
import {Text, View} from 'react-native';

const ShowdownScreenComponent = () => {
  return (
    <>
      <View>
        <Text>Showdown</Text>
      </View>
    </>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = ShowdownScreenComponent;
  static Options = ShowdownScreenOptions;
}
