import React from 'react';
import {FAB as UnstyledFAB} from 'react-native-paper';
import styled from 'styled-components/native';

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
  ROLL_TEN: 'dice-d10',
  ROLL_SIX: 'numeric-6-circle',
  ROLL_HIT: 'heart-broken',
  ADD_TOKEN: 'plus',
  REMOVE_TOKEN: 'minus',
  HEAL: 'hospital',
  AI_TOP: 'format-align-bottom',
  AI_BOTTOM: 'format-align-top',
};

const ACTIONS: {[key: string]: string} = {
  DISCARD: 'onDiscardSelected',
  ACTIVE: 'onActiveSelected',
  ROLL_TEN: 'onRollTen',
  ROLL_SIX: 'onRollSix',
  ROLL_HIT: 'onRollHit',
  ADD_TOKEN: 'onAddTokenSelected',
  REMOVE_TOKEN: 'onRemoveTokenSelected',
  HEAL: 'onHeal',
  AI_TOP: 'onAiTopSelected',
  AI_BOTTOM: 'onAiBottomSelected',
};

export default SelectedButtons;

const FAB = styled(UnstyledFAB)`
  margin-top: 8px;
`;
