import {ShowdownState} from './types';

type State = {showdown: ShowdownState};

const monsterName = (state: State) => state.showdown.monsterName;

const encounterName = (state: State) => state.showdown.encounterName;

const stats = (state: State) => state.showdown.stats;

export default class {
  static monsterName = monsterName;
  static encounterName = encounterName;
  static stats = stats;
}
