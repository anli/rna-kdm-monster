import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {EncounterSelectScreen, ShowdownScreen} from '@screens';
import {store} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as StoreProvider} from 'react-redux';

const Stack = createStackNavigator();
const ShowdownTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ShowdownScreen"
      component={ShowdownScreen.Component}
      options={ShowdownScreen.Options}
    />
    <Stack.Screen
      name="EncounterSelectScreen"
      component={EncounterSelectScreen.Component}
      options={EncounterSelectScreen.Options}
    />
  </Stack.Navigator>
);
const WHITE_BACKGROUND_STYLE = {backgroundColor: '#fff'};
const Tab = createMaterialBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShowdownTab"
      labeled={false}
      activeColor="#000"
      barStyle={WHITE_BACKGROUND_STYLE}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon name="bug" color={color} size={24} />,
        }}
        name="ShowdownTab"
        component={ShowdownTab}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};
export default App;
