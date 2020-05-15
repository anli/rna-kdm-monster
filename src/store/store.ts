import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {showdownEpics, showdownSlice} from '@showdown';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const epics: any[] = [...showdownEpics];

const rootEpic = (action$: any) => combineEpics(...epics)(action$).pipe();

const getStore = () => {
  const store = configureStore({
    reducer: {showdown: showdownSlice.reducer},
    middleware: [...getDefaultMiddleware(), epicMiddleware],
  });

  epicMiddleware.run(rootEpic);
  return store;
};

const store = getStore();

export type RootState = ReturnType<typeof store.getState>;

export default store;
