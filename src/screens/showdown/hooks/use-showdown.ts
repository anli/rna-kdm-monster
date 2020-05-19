import {useNavigation} from '@react-navigation/native';
import {ShowdownSelectors, showdownSlice} from '@showdown';
import {State} from '@store';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useDices from './use-dices';
import useStats from './use-stats';

const useShowdown = () => {
  const state = useSelector<State, State>(res => res);
  const dispatch = useDispatch();
  const {data: stats, actions: statsActions} = useStats();
  const {data: diceResults, actions: diceActions} = useDices();
  const {navigate} = useNavigation();
  const encounterId = ShowdownSelectors.encounterId(state);

  useEffect(() => {
    dispatch(showdownSlice.actions.load(encounterId));
  }, [dispatch, encounterId]);

  const data = {
    monsterName: ShowdownSelectors.monsterName(state),
    encounterName: ShowdownSelectors.encounterName(state),
    stats,
    actives: ShowdownSelectors.actives(state),
    selected: ShowdownSelectors.selected(state),
    ai: ShowdownSelectors.ai(state),
    hit: ShowdownSelectors.hit(state),
    diceResults,
  };

  const actions = {
    ...statsActions,
    ...diceActions,
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
    onSelectEncounter: () => navigate('EncounterSelectScreen'),
  };

  return {data, actions};
};

export default useShowdown;
