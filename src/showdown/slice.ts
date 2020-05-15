import {createSlice} from '@reduxjs/toolkit';
import {ShowdownState} from './types';

const INITIAL_STATE = {};
const showdownSlice = createSlice({
  name: 'Showdown',
  initialState: INITIAL_STATE,
  reducers: {
    load: (state: ShowdownState, action: any) => ({
      ...state,
      encounterId: action.payload,
    }),
    loadSuccess: (state: ShowdownState, action: any) => ({
      ...state,
      monsterName: action.payload.monsterName,
      encounterName: action.payload.encounterName,
    }),
  },
});

export default showdownSlice;
