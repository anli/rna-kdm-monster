import R from 'ramda';
import FastImage from 'react-native-fast-image';
import {Card, Encounter} from './types';

const getData = (encounterId: string) => {
  const encounter = ENCOUNTER[encounterId];
  const cards = [...encounter.basicActives];
  FastImage.preload(getImageUris(cards));

  return encounter;
};

export default class ShowdownService {
  static getData = getData;
}

export const CARD: {[key: string]: Card} = {
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

const getImageUris = R.map(({imageUrl}: {imageUrl: string}) => ({
  uri: imageUrl,
}));
