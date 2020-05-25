import R from 'ramda';
import ShowdownService from './service';
import {Card, ShowdownState} from './types';

type State = {showdown: ShowdownState};

const monsterName = (state: State) => state.showdown.monsterName;

const encounterName = (state: State) => state.showdown.encounterName;

const stats = (state: State) => state.showdown.stats;

const actives = (state: State) => {
  return [
    ...state.showdown.hitActives,
    ...state.showdown.aiActives,
    ...state.showdown.basicActives,
  ];
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

/* istanbul ignore next */
const getButtons = (card?: Card, deckId?: string) => {
  let buttons = [];

  if (card?.type === 'AI') {
    deckId === 'actives' && buttons.push('DISCARD');
    deckId === 'ais' &&
      buttons.push('ACTIVE') &&
      buttons.push('AI_TOP') &&
      buttons.push('AI_BOTTOM');
  }

  if (card?.type === 'HIT') {
    deckId === 'actives' && buttons.push('DISCARD');
    deckId === 'hits' && buttons.push('ACTIVE');
  }

  if (!R.isNil(card?.token)) {
    deckId === 'actives' &&
      buttons.push('ADD_TOKEN') &&
      buttons.push('REMOVE_TOKEN');
  }

  if (!R.isNil(card?.heal)) {
    deckId === 'ais' && buttons.push('HEAL');
  }

  buttons.push('ROLL_SIX');
  buttons.push('ROLL_HIT');
  buttons.push('ROLL_TEN');

  return buttons;
};

const hit = (state: State) => {
  return {
    draws: state.showdown.hitDraws,
    discards: state.showdown.hitDiscards,
  };
};

const encounters = () => {
  return R.values(ShowdownService.ENCOUNTER);
};

const encounterId = (state: State) => state.showdown.encounterId;

export default class {
  static encounterId = encounterId;
  static monsterName = monsterName;
  static encounterName = encounterName;
  static stats = stats;
  static actives = actives;
  static selected = selected;
  static ai = ai;
  static hit = hit;
  static encounters = encounters;
}
