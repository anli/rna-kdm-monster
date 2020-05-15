import {ShowdownState} from './types';

type State = {showdown: ShowdownState};

const monsterName = (state: State) => state.showdown.monsterName;

const encounterName = (state: State) => state.showdown.encounterName;

const stats = (state: State) => state.showdown.stats;

const actives = (state: State) => {
  return [...state.showdown.basicActives];
};

const selected = (state: State) => {
  return {
    cardId: state.showdown.selectedCardId,
    deckId: state.showdown.selectedDeckId,
  };
};

export default class {
  static monsterName = monsterName;
  static encounterName = encounterName;
  static stats = stats;
  static actives = actives;
  static selected = selected;
}
