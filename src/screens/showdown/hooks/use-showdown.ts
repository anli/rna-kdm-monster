import {ShowdownSelectors, showdownSlice} from '@showdown';
import {State} from '@store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useStats from './use-stats';

const useShowdown = () => {
  const state = useSelector<State, State>(res => res);
  const dispatch = useDispatch();
  const {data: stats, actions: statsActions} = useStats();

  useEffect(() => {
    dispatch(showdownSlice.actions.load('WHITE_LION_FIRST_STORY'));
  }, [dispatch]);

  const data = {
    monsterName: ShowdownSelectors.monsterName(state),
    encounterName: ShowdownSelectors.encounterName(state),
    stats,
    actives: ShowdownSelectors.actives(state),
    selected: ShowdownSelectors.selected(state),
    ai: ShowdownSelectors.ai(state),
    hit: ShowdownSelectors.hit(state),
  };

  const actions = {
    ...statsActions,
    onSelectActive: (id: string) =>
      dispatch(showdownSlice.actions.select({id, deck: 'actives'})),
    onSelectAi: (id: string) =>
      dispatch(showdownSlice.actions.select({id, deck: 'ais'})),
    onDrawAi: () => dispatch(showdownSlice.actions.drawAi()),
    onShuffleAiDiscards: () =>
      dispatch(showdownSlice.actions.shuffleAiDiscards()),
    onWoundAi: () => dispatch(showdownSlice.actions.woundAi()),
    onUnwoundAi: () => dispatch(showdownSlice.actions.unwoundAi()),
    onActiveSelected: () => dispatch(showdownSlice.actions.activeSelected()),
    onDiscardSelected: () => dispatch(showdownSlice.actions.discardSelected()),
    onDrawHit: () => dispatch(showdownSlice.actions.drawHit()),
    onSelectHit: (id: string) =>
      dispatch(showdownSlice.actions.select({id, deck: 'hits'})),
    onShuffleHitDiscards: () =>
      dispatch(showdownSlice.actions.shuffleHitDiscards()),
  };

  return {data, actions};
};

export default useShowdown;
