import React from 'react';
import {FAB} from 'react-native-paper';

interface SelectedButtonsProps {
  data: string[];
  actions: any;
}

const SelectedButtons = ({data, actions}: SelectedButtonsProps) => {
  return (
    <>
      {data.map(button => (
        <FAB
          testID={`Button.Selected${button}`}
          key={button}
          small
          icon={ICON[button]}
          onPress={() => actions[ACTIONS[button]]()}
        />
      ))}
    </>
  );
};

const ICON: {[key: string]: string} = {
  DISCARD: 'cards',
  ACTIVE: 'bug',
};

const ACTIONS: {[key: string]: string} = {
  DISCARD: 'onDiscardSelected',
  ACTIVE: 'onActiveSelected',
};

export default SelectedButtons;
