import {createSlice} from '@reduxjs/toolkit';
import {shuffle} from '@utils';
import R from 'ramda';
import {ShowdownState, Stat} from './types';

const INITIAL_STATE = {
  stats: [],
  basicActives: [],
  aiDraws: [],
  aiDiscards: [],
  cards: [],
  aiCards: [],
  aiWounds: [],
  aiActives: [],
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
    activeSelected: (state: ShowdownState) => {
      const card: any = R.find(R.propEq('id', state.selectedCardId))(
        state.aiDiscards,
      );
      state.aiDiscards = R.reject(R.propEq('id', state.selectedCardId))(
        state.aiDiscards,
      );
      state.aiActives = R.concat([card], state.aiActives);
      state.selectedDeckId = 'actives';
    },
    discardSelected: (state: ShowdownState) => {
      const card: any = R.find(R.propEq('id', state.selectedCardId))(
        state.aiActives,
      );
      state.aiActives = R.reject(R.propEq('id', state.selectedCardId))(
        state.aiActives,
      );
      state.aiDiscards = R.concat([card], state.aiDiscards);
      state.selectedDeckId = 'ais';
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
