import {createSlice} from '@reduxjs/toolkit';
import R from 'ramda';
import {ShowdownState, Stat} from './types';

const INITIAL_STATE = {
  stats: [],
  basicActives: [],
  aiDraws: [],
  aiDiscards: [],
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
      const [draw, ...remaindingDraws] = state.aiDraws;
      state.aiDraws = remaindingDraws;
      state.aiDiscards = [draw, ...state.aiDiscards];
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
