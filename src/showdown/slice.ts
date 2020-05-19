import {createSlice} from '@reduxjs/toolkit';
import {shuffle} from '@utils';
import R from 'ramda';
import {Card, ShowdownState, Stat} from './types';

const INITIAL_STATE = {
  encounterId: 'WHITE_LION_FIRST_STORY',
  stats: [],
  basicActives: [],
  aiDraws: [],
  aiDiscards: [],
  cards: [],
  aiCards: [],
  aiWounds: [],
  aiActives: [],
  hitCards: [],
  hitDraws: [],
  hitDiscards: [],
  hitActives: [],
};
const showdownSlice = createSlice({
  name: 'Showdown',
  initialState: INITIAL_STATE,
  reducers: {
    load: (state: ShowdownState, action: any) => {
      state.encounterId = action.payload;
    },
    loadSuccess: (state: ShowdownState, action: any) => ({
      ...state,
      ...action.payload,
    }),
    increaseStat: (state: ShowdownState, action: any) => {
      state.stats = getAdjustedStats(action.payload, true, state.stats);
    },
    decreaseStat: (state: ShowdownState, action: any) => {
      state.stats = getAdjustedStats(action.payload, false, state.stats);
    },
    select: (state: ShowdownState, action: any) => {
      state.selectedCardId = action.payload.id;
      state.selectedDeckId = action.payload.deck;
    },
    drawAi: (state: ShowdownState) => {
      const [card, ...remainding] = state.aiDraws;
      state.aiDraws = remainding;
      state.aiDiscards = [card, ...state.aiDiscards];
      state.selectedCardId = card.id;
      state.selectedDeckId = 'ais';
    },
    shuffleAiDiscards: (state: ShowdownState) => {
      state.aiDraws = shuffle([...state.aiDraws, ...state.aiDiscards]);
      state.aiDiscards = [];
    },
    woundAi: (state: ShowdownState) => {
      const [card, ...remainding] = state.aiDraws;
      state.aiDraws = remainding;
      state.aiWounds = [card, ...state.aiWounds];
    },
    unwoundAi: (state: ShowdownState) => {
      if (state.aiWounds.length > 0) {
        const [card, ...remainding] = state.aiWounds;
        state.aiWounds = remainding;
        state.aiDraws = [card, ...state.aiDraws];
      }
    },
    activeSelected: (state: any) => {
      const card: any = R.find(R.propEq('id', state.selectedCardId))(
        state.cards,
      );
      const key = card.type.toLowerCase();
      state[`${key}Discards`] = R.reject(R.propEq('id', state.selectedCardId))(
        state[`${key}Discards`],
      );
      state[`${key}Actives`] = R.concat([card], state[`${key}Actives`]);
      state.selectedDeckId = 'actives';
    },
    discardSelected: (state: any) => {
      const card: any = R.find(R.propEq('id', state.selectedCardId))(
        state.cards,
      );
      const key = card.type.toLowerCase();
      state[`${key}Actives`] = R.reject(R.propEq('id', state.selectedCardId))(
        state[`${key}Actives`],
      );
      state[`${key}Discards`] = R.concat([card], state[`${key}Discards`]);
      state.selectedDeckId = `${key}s`;
    },
    drawHit: (state: ShowdownState) => {
      const [card, ...remainding] = state.hitDraws;
      state.hitDraws = remainding;
      state.hitDiscards = [card, ...state.hitDiscards];
      state.selectedCardId = card.id;
      state.selectedDeckId = 'hits';
    },
    shuffleHitDiscards: (state: ShowdownState) => {
      state.hitDraws = shuffle([...state.hitDraws, ...state.hitDiscards]);
      state.hitDiscards = [];
    },
    addTokenSelected: (state: ShowdownState) => {
      const index = R.findIndex(R.propEq('id', state.selectedCardId))(
        state.aiActives,
      );
      state.aiActives = R.adjust<Card>(index, n => ({
        ...n,
        token: (n.token || 0) + 1,
      }))(state.aiActives);
    },
    removeTokenSelected: (state: ShowdownState) => {
      const index = R.findIndex(R.propEq('id', state.selectedCardId))(
        state.aiActives,
      );
      state.aiActives = R.adjust<Card>(index, n => ({
        ...n,
        token: (n.token || 0) - 1,
      }))(state.aiActives);
    },
  },
});

export default showdownSlice;

const getAdjustedStats = (
  statName: string,
  isIncrease: boolean,
  stats: Stat[],
) => {
  return R.adjust<Stat>(
    R.findIndex(R.propEq('name', statName))(stats),
    stat => ({...stat, value: getValue(isIncrease, stat.value)}),
  )(stats);
};

const getValue = (isIncrease: boolean, value: number) =>
  isIncrease ? value + 1 : value - 1;
