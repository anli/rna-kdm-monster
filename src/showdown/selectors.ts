import R from 'ramda';
import {Card, ShowdownState} from './types';

type State = {showdown: ShowdownState};

const monsterName = (state: State) => state.showdown.monsterName;

const encounterName = (state: State) => state.showdown.encounterName;

const stats = (state: State) => state.showdown.stats;

const actives = (state: State) => {
  return [...state.showdown.basicActives];
};

const selected = (state: State) => {
  const cardId = state.showdown.selectedCardId;
  const imageUrl = cardId
    ? R.find<Card>(R.propEq('id', cardId))(state.showdown.cards)?.imageUrl
    : undefined;
  return {
    cardId: state.showdown.selectedCardId,
    deckId: state.showdown.selectedDeckId,
    imageUrl,
  };
};

const ai = (state: State) => {
  return {
    draws: state.showdown.aiDraws,
    discards: state.showdown.aiDiscards,
  };
};

export default class {
  static monsterName = monsterName;
  static encounterName = encounterName;
  static stats = stats;
  static actives = actives;
  static selected = selected;
  static ai = ai;
}
