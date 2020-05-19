import {useNavigation} from '@react-navigation/native';
import {ShowdownSelectors, showdownSlice} from '@showdown';
import {useDispatch} from 'react-redux';

const useEncounterSelect = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const data = {
    encounters: ShowdownSelectors.encounters(),
  };

  const actions = {
    onSelect: (id: string) => {
      dispatch(showdownSlice.actions.load(id));
      goBack();
    },
  };
  return {data, actions};
};

export default useEncounterSelect;
