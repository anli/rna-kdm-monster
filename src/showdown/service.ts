import {Encounter} from './types';

const getData = (encounterId: string) => {
  return ENCOUNTER[encounterId];
};

export default class ShowdownService {
  static getData = getData;
}

const CARD = {
  WHITE_LION_MONSTER: {
    id: 'WHITE_LION_MONSTER',
    imageUrl: 'https://imgur.com/6voXSGA.png',
    name: 'Monster',
    type: 'BASIC',
  },
  WHITE_LION_BASIC_ACTION: {
    id: 'WHITE_LION_BASIC_ACTION',
    imageUrl: 'https://imgur.com/rmgHnYU.png',
    name: 'Basic Action',
    type: 'BASIC',
  },
};

const ENCOUNTER: {[key: string]: Encounter} = {
  WHITE_LION_FIRST_STORY: {
    id: 'WHITE_LION_FIRST_STORY',
    monsterName: 'White Lion',
    encounterName: 'First Story',
    stats: [
      {name: 'MOV', value: 6},
      {name: 'TGH', value: 6},
      {name: 'SPD', value: 0, hasPrefix: true},
      {name: 'DMG', value: 0, hasPrefix: true},
      {name: 'ACC', value: 0, hasPrefix: true},
    ],
    basicActives: [CARD.WHITE_LION_MONSTER, CARD.WHITE_LION_BASIC_ACTION],
  },
};
