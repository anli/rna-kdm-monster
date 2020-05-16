import R from 'ramda';
import {Card, ShowdownState} from './types';

type State = {showdown: ShowdownState};

const monsterName = (state: State) => state.showdown.monsterName;

const encounterName = (state: State) => state.showdown.encounterName;

const stats = (state: State) => state.showdown.stats;

const actives = (state: State) => {
  return [...state.showdown.aiActives, ...state.showdown.basicActives];
};

const selected = (state: State) => {
  const cardId = state.showdown.selectedCardId;
  const card = R.find<Card>(R.propEq('id', cardId))(state.showdown.cards);
  const imageUrl = cardId ? card?.imageUrl : undefined;
  return {
    cardId: state.showdown.selectedCardId,
    deckId: state.showdown.selectedDeckId,
    imageUrl,
    buttons: getButtons(card, state.showdown.selectedDeckId),
  };
};

const ai = (state: State) => {
  return {
    draws: state.showdown.aiDraws,
    discards: state.showdown.aiDiscards,
    wounds: state.showdown.aiWounds,
  };
};

const getButtons = (card?: Card, deckId?: string) => {
  let buttons = [];

  if (card?.type === 'AI') {
    deckId === 'actives' && buttons.push('DISCARD');
    deckId === 'ais' && buttons.push('ACTIVE');
  }

  return buttons;
};

export default class {
  static monsterName = monsterName;
  static encounterName = encounterName;
  static stats = stats;
  static actives = actives;
  static selected = selected;
  static ai = ai;
}
