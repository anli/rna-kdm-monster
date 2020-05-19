import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';
import useEncounterSelect from './hooks/use-encounter-select';

const EncounterSelectScreenComponent = () => {
  const {data, actions} = useEncounterSelect();

  return (
    <View testID="EncounterSelectScreen">
      <FlatList
        data={data.encounters}
        renderItem={({item}) => (
          <List.Item
            testID={`Button.${item.id}`}
            title={`${item.monsterName} ${item.encounterName}`}
            onPress={() => actions?.onSelect(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const EncounterSelectScreenOptions = {
  headerShown: true,
  title: 'Select Encounter',
};

export default class {
  static Component = EncounterSelectScreenComponent;
  static Options = EncounterSelectScreenOptions;
}
