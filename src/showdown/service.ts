import {shuffle} from '@utils';
import R from 'ramda';
import FastImage from 'react-native-fast-image';
import {Card, Encounter} from './types';

const getData = (encounterId: string) => {
  const encounter = ENCOUNTER[encounterId];

  const cards = R.concat(encounter.basicActives)(encounter.aiCards);
  FastImage.preload(getImageUris(cards));

  return {...encounter, aiDraws: encounter.aiCards, cards};
};

const WHITE_LION_MONSTER_CARD = {
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

const WHITE_LION_AI_CARD = {
  WHITE_LION_AI_CLAW: {
    id: 'WHITE_LION_AI_CLAW',
    imageUrl: 'https://imgur.com/zhw8GCD.png',
    name: 'Claw',
    type: 'AI',
  },
  WHITE_LION_AI_CHOMP: {
    id: 'WHITE_LION_AI_CHOMP',
    imageUrl: 'https://imgur.com/A8cdPN5.png',
    name: 'Chomp',
    type: 'AI',
  },
  WHITE_LION_AI_SIZE_UP: {
    id: 'WHITE_LION_AI_SIZE_UP',
    imageUrl: 'https://imgur.com/DeJRPOT.png',
    name: 'Size Up',
    type: 'AI',
  },
  WHITE_LION_AI_POWER_SWAT: {
    id: 'WHITE_LION_AI_POWER_SWAT',
    imageUrl: 'https://imgur.com/Ja9cqIk.png',
    name: 'Power Swat',
    type: 'AI',
  },
  WHITE_LION_AI_GRASP: {
    id: 'WHITE_LION_AI_GRASP',
    imageUrl: 'https://imgur.com/veQqQyw.png',
    name: 'Grasp',
    type: 'AI',
  },
  WHITE_LION_AI_MAUL: {
    id: 'WHITE_LION_AI_MAUL',
    imageUrl: 'https://imgur.com/yT0RvDA.png',
    name: 'Maul',
    type: 'AI',
  },
  WHITE_LION_AI_TERRIFYING_ROAR: {
    id: 'WHITE_LION_AI_TERRIFYING_ROAR',
    imageUrl: 'https://imgur.com/r8S2NPr.png',
    name: 'Terrifying roar',
    type: 'AI',
  },
  WHITE_LION_AI_ENRAGED: {
    id: 'WHITE_LION_AI_ENRAGED',
    imageUrl: 'https://imgur.com/xEsTvK3.png',
    name: 'Enraged',
    type: 'AI',
  },
};

const CARD: {[key: string]: Card} = {
  ...WHITE_LION_MONSTER_CARD,
  ...WHITE_LION_AI_CARD,
};

const getWhiteLionAiCards = () => {
  const remaindingCards = shuffle([
    CARD.WHITE_LION_AI_CHOMP,
    CARD.WHITE_LION_AI_SIZE_UP,
    CARD.WHITE_LION_AI_POWER_SWAT,
    CARD.WHITE_LION_AI_GRASP,
    CARD.WHITE_LION_AI_MAUL,
    CARD.WHITE_LION_AI_TERRIFYING_ROAR,
    CARD.WHITE_LION_AI_ENRAGED,
  ]);
  return [CARD.WHITE_LION_AI_CLAW, ...remaindingCards];
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
    aiCards: getWhiteLionAiCards(),
  },
};

const getImageUris = R.map(({imageUrl}: {imageUrl: string}) => ({
  uri: imageUrl,
}));

export default class ShowdownService {
  static getData = getData;
  static CARD = CARD;
}
