import {ShowdownState} from './types';

type State = {showdown: ShowdownState};

const monsterName = (state: State) => state.showdown.monsterName;

const encounterName = (state: State) => state.showdown.encounterName;

export default class {
  static monsterName = monsterName;
  static encounterName = encounterName;
}
