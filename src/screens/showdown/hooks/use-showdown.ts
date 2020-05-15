import {ShowdownSelectors, showdownSlice} from '@showdown';
import {State} from '@store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useShowdown = () => {
  const state = useSelector<State, State>(res => res);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showdownSlice.actions.load('WHITE_LION_FIRST_STORY'));
  }, [dispatch]);

  const data = {
    monsterName: ShowdownSelectors.monsterName(state),
    encounterName: ShowdownSelectors.encounterName(state),
  };
  return {data};
};

export default useShowdown;
