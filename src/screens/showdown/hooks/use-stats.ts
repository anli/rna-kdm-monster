import {ShowdownSelectors, showdownSlice} from '@showdown';
import {State} from '@store';
import {useDispatch, useSelector} from 'react-redux';

const useStats = () => {
  const state = useSelector<State, State>(res => res);
  const dispatch = useDispatch();

  const data = ShowdownSelectors.stats(state);
  const actions = {
    onIncreaseStat: (name: string) =>
      dispatch(showdownSlice.actions.increaseStat(name)),
    onDecreaseStat: (name: string) =>
      dispatch(showdownSlice.actions.decreaseStat(name)),
  };

  return {data, actions};
};

export default useStats;
