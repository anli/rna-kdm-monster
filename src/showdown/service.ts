import {shuffle} from '@utils';
import R from 'ramda';
import FastImage from 'react-native-fast-image';
import {Card, Encounter} from './types';

const getData = (encounterId: string) => {
  const encounter = ENCOUNTER[encounterId];

  const cards = [
    ...encounter.basicActives,
    ...encounter.aiCards,
    ...encounter.hitCards,
  ];
  FastImage.preload(getImageUris(cards));

  return {
    ...encounter,
    aiDraws: shuffle(encounter.aiCards),
    aiDiscards: [],
    aiWounds: [],
    aiActives: [],
    cards,
    hitDraws: shuffle(encounter.hitCards),
    hitDiscards: [],
    hitActives: [],
  };
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
  WHITE_LION_AI_ALERT: {
    id: 'WHITE_LION_AI_ALERT',
    imageUrl: 'https://imgur.com/PDhAtjC.png',
    name: 'Alert',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
  },
  WHITE_LION_AI_BAT_AROUND: {
    id: 'WHITE_LION_AI_BAT_AROUND',
    imageUrl: 'https://imgur.com/QDbad03.png',
    name: 'Alert',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_BLOODTHIRSTY: {
    id: 'WHITE_LION_AI_BLOODTHIRSTY',
    imageUrl: 'https://imgur.com/GzSjzAx.png',
    name: 'Bloodthirsty',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
    token: 0,
  },
  WHITE_LION_AI_BLOODY_CLAW: {
    id: 'WHITE_LION_AI_BLOODY_CLAW',
    imageUrl: 'https://imgur.com/jPoBWtW.png',
    name: 'Bloody Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_COMBO_CLAW: {
    id: 'WHITE_LION_AI_COMBO_CLAW',
    imageUrl: 'https://imgur.com/7DHzhW0.png',
    name: 'Combo Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CUNNING: {
    id: 'WHITE_LION_AI_CUNNING',
    imageUrl: 'https://imgur.com/4GTZeks.png',
    name: 'Cunning',
    type: 'AI',
    subType: 'TRAIT',
    level: 'S',
  },
  WHITE_LION_AI_GOLDEN_EYES: {
    id: 'WHITE_LION_AI_GOLDEN_EYES',
    imageUrl: 'https://imgur.com/jpCj3NV.png',
    name: 'Golden Eyes',
    type: 'AI',
    subType: 'TRAIT',
    level: 'L',
  },
  WHITE_LION_AI_GROUND_FIGHTING: {
    id: 'WHITE_LION_AI_GROUND_FIGHTING',
    imageUrl: 'https://imgur.com/vYcWBcO.png',
    name: 'Ground Fighting',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
  },
  WHITE_LION_AI_LICK_WOUNDS: {
    id: 'WHITE_LION_AI_LICK_WOUNDS',
    imageUrl: 'https://imgur.com/pnHnKno.png',
    name: 'Lick Wounds',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
    heal: 1,
  },
  WHITE_LION_AI_MERCILESS: {
    id: 'WHITE_LION_AI_MERCILESS',
    imageUrl: 'https://imgur.com/HH6M4Gp.png',
    name: 'Merciless',
    type: 'AI',
    subType: 'TRAIT',
    level: 'S',
  },
  WHITE_LION_AI_REVENGE: {
    id: 'WHITE_LION_AI_REVENGE',
    imageUrl: 'https://imgur.com/NvuhLRG.png',
    name: 'Revenge',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_SMART_CAT: {
    id: 'WHITE_LION_AI_SMART_CAT',
    imageUrl: 'https://imgur.com/nc46gHt.png',
    name: 'Smart Cat',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_VANISH: {
    id: 'WHITE_LION_AI_VANISH',
    imageUrl: 'https://imgur.com/qirQbPV.png',
    name: 'Vanish',
    type: 'AI',
    subType: 'DURATION',
    level: 'L',
  },
  WHITE_LION_AI_VICIOUS_CLAW: {
    id: 'WHITE_LION_AI_VICIOUS_CLAW',
    imageUrl: 'https://imgur.com/SVv2nno.png',
    name: 'Vicious Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CLAW: {
    id: 'WHITE_LION_AI_CLAW',
    imageUrl: 'https://imgur.com/zhw8GCD.png',
    name: 'Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CLAW_2: {
    id: 'WHITE_LION_AI_CLAW_2',
    imageUrl: 'https://imgur.com/zhw8GCD.png',
    name: 'Claw',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_CHOMP: {
    id: 'WHITE_LION_AI_CHOMP',
    imageUrl: 'https://imgur.com/A8cdPN5.png',
    name: 'Chomp',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_SIZE_UP: {
    id: 'WHITE_LION_AI_SIZE_UP',
    imageUrl: 'https://imgur.com/DeJRPOT.png',
    name: 'Size Up',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_SIZE_UP_2: {
    id: 'WHITE_LION_AI_SIZE_UP_2',
    imageUrl: 'https://imgur.com/DeJRPOT.png',
    name: 'Size Up',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_POWER_SWAT: {
    id: 'WHITE_LION_AI_POWER_SWAT',
    imageUrl: 'https://imgur.com/Ja9cqIk.png',
    name: 'Power Swat',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_GRASP: {
    id: 'WHITE_LION_AI_GRASP',
    imageUrl: 'https://imgur.com/veQqQyw.png',
    name: 'Grasp',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_GRASP_2: {
    id: 'WHITE_LION_AI_GRASP_2',
    imageUrl: 'https://imgur.com/veQqQyw.png',
    name: 'Grasp',
    type: 'AI',
    subType: 'NONE',
    level: 'B',
  },
  WHITE_LION_AI_MAUL: {
    id: 'WHITE_LION_AI_MAUL',
    imageUrl: 'https://imgur.com/yT0RvDA.png',
    name: 'Maul',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_TERRIFYING_ROAR: {
    id: 'WHITE_LION_AI_TERRIFYING_ROAR',
    imageUrl: 'https://imgur.com/r8S2NPr.png',
    name: 'Terrifying roar',
    type: 'AI',
    subType: 'NONE',
    level: 'A',
  },
  WHITE_LION_AI_ENRAGED: {
    id: 'WHITE_LION_AI_ENRAGED',
    imageUrl: 'https://imgur.com/xEsTvK3.png',
    name: 'Enraged',
    type: 'AI',
    subType: 'MOOD',
    level: 'A',
  },
};

const WHITE_LION_HIT_CARD = {
  WHITE_LION_HIT_BEASTS_BACK: {
    id: 'WHITE_LION_HIT_BEASTS_BACK',
    imageUrl: 'https://imgur.com/RbI8u22.png',
    name: "Beast's Back",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_BROW: {
    id: 'WHITE_LION_HIT_BEASTS_BROW',
    imageUrl: 'https://imgur.com/46nfOfU.png',
    name: "Beast's Brow",
    type: 'hit',
  },
  WHITE_LION_HIT_BEASTS_CHEST: {
    id: 'WHITE_LION_HIT_BEASTS_CHEST',
    imageUrl: 'https://imgur.com/8zEY8bX.png',
    name: "Beast's Chest",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_EAR: {
    id: 'WHITE_LION_HIT_BEASTS_EAR',
    imageUrl: 'https://imgur.com/I7q8zYO.png',
    name: "Beast's Ear",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_ELBOW: {
    id: 'WHITE_LION_HIT_BEASTS_ELBOW',
    imageUrl: 'https://imgur.com/XGgO5ou.png',
    name: "Beast's Elbow",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_FEMUR: {
    id: 'WHITE_LION_HIT_BEASTS_FEMUR',
    imageUrl: 'https://imgur.com/mrFUiZb.png',
    name: "Beast's Femur",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_FLANK: {
    id: 'WHITE_LION_HIT_BEASTS_FLANK',
    imageUrl: 'https://imgur.com/mIYz0Uu.png',
    name: "Beast's Flank",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_HEEL: {
    id: 'WHITE_LION_HIT_BEASTS_HEEL',
    imageUrl: 'https://imgur.com/X3iKGNj.png',
    name: "Beast's Heel",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_KNEE: {
    id: 'WHITE_LION_HIT_BEASTS_KNEE',
    imageUrl: 'https://imgur.com/FiMAc8T.png',
    name: "Beast's Knee",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_MAW: {
    id: 'WHITE_LION_HIT_BEASTS_MAW',
    imageUrl: 'https://imgur.com/sRYM8gH.png',
    name: "Beast's Maw",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_PAW: {
    id: 'WHITE_LION_HIT_BEASTS_PAW',
    imageUrl: 'https://imgur.com/iZd2lS4.png',
    name: "Beast's Paw",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_RIBS: {
    id: 'WHITE_LION_HIT_BEASTS_RIBS',
    imageUrl: 'https://imgur.com/U1dDe6m.png',
    name: "Beast's Ribs",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_SCAPULAR_DELTOID: {
    id: 'WHITE_LION_HIT_BEASTS_SCAPULAR_DELTOID',
    imageUrl: 'https://imgur.com/XEfQNzE.png',
    name: "Beast's Scapular Deltoid",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_TAIL: {
    id: 'WHITE_LION_HIT_BEASTS_TAIL',
    imageUrl: 'https://imgur.com/6Wzgg1I.png',
    name: "Beast's Tail",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_TEMPLE: {
    id: 'WHITE_LION_HIT_BEASTS_TEMPLE',
    imageUrl: 'https://imgur.com/YBmk1eQ.png',
    name: "Beast's Temple",
    type: 'HIT',
  },
  WHITE_LION_HIT_BEASTS_TRICEP: {
    id: 'WHITE_LION_HIT_BEASTS_TRICEP',
    imageUrl: 'https://imgur.com/lO7l34P.png',
    name: "Beast's Tricep",
    type: 'HIT',
  },
  WHITE_LION_HIT_CLEVER_PLOY: {
    id: 'WHITE_LION_HIT_CLEVER_PLOY',
    imageUrl: 'https://imgur.com/Bt7EyiK.png',
    name: 'Clever Ploy',
    type: 'HIT',
  },
  WHITE_LION_HIT_FLESHY_GUT: {
    id: 'WHITE_LION_HIT_FLESHY_GUT',
    imageUrl: 'https://imgur.com/qBIVAqi.png',
    name: 'Fleshy Gut',
    type: 'HIT',
  },
  WHITE_LION_HIT_FUZZY_GROIN: {
    id: 'WHITE_LION_HIT_FUZZY_GROIN',
    imageUrl: 'https://imgur.com/Guf8y30.png',
    name: 'Fuzzy Groin',
    type: 'HIT',
  },
  WHITE_LION_HIT_GLORIOUS_MANE: {
    id: 'WHITE_LION_HIT_GLORIOUS_MANE',
    imageUrl: 'https://imgur.com/pt1Tn7M.png',
    name: 'Glorious Mane',
    type: 'HIT',
  },
  WHITE_LION_HIT_SOFT_BELLY: {
    id: 'WHITE_LION_HIT_SOFT_BELLY',
    imageUrl: 'https://imgur.com/zn1Yyzl.png',
    name: 'Soft Belly',
    type: 'HIT',
  },
  WHITE_LION_HIT_STRAINING_NECK: {
    id: 'WHITE_LION_HIT_STRAINING_NECK',
    imageUrl: 'https://imgur.com/v5Pz0Vd.png',
    name: 'Straining Neck',
    type: 'HIT',
  },
  WHITE_LION_HIT_STRANGE_HAND: {
    id: 'WHITE_LION_HIT_STRANGE_HAND',
    imageUrl: 'https://imgur.com/3zbe2YU.png',
    name: 'Strange Hand',
    type: 'HIT',
  },
};

const CARD: {[key: string]: Card} = {
  ...WHITE_LION_MONSTER_CARD,
  ...WHITE_LION_AI_CARD,
  ...WHITE_LION_HIT_CARD,
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

const getRandomCardsByLevel = (level: string, count: number, cards: any[]) => {
  const levelCards: any[] = R.filter(R.propEq('level', level), cards);
  return R.slice(0, count)(shuffle(levelCards));
};

const getWhiteLionAiLevel1Cards = () => {
  const cards = R.values(CARD);

  return [
    ...getRandomCardsByLevel('B', 7, cards),
    ...getRandomCardsByLevel('A', 3, cards),
  ];
};

const getWhiteLionAiLevel2Cards = () => {
  const cards = R.values(CARD);

  return [
    ...getRandomCardsByLevel('B', 10, cards),
    ...getRandomCardsByLevel('A', 5, cards),
  ];
};

const getWhiteLionAiLevel3Cards = () => {
  const cards = R.values(CARD);

  return [
    ...getRandomCardsByLevel('B', 10, cards),
    ...getRandomCardsByLevel('A', 9, cards),
    ...getRandomCardsByLevel('L', 2, cards),
  ];
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
      {name: 'LCK', value: 0, hasPrefix: true},
    ],
    basicActives: [CARD.WHITE_LION_MONSTER, CARD.WHITE_LION_BASIC_ACTION],
    aiCards: getWhiteLionAiCards(),
    hitCards: shuffle(R.values(WHITE_LION_HIT_CARD)),
  },
  WHITE_LION_LEVEL_1: {
    id: 'WHITE_LION_LEVEL_1',
    monsterName: 'White Lion',
    encounterName: 'Level 1',
    stats: [
      {name: 'MOV', value: 6},
      {name: 'TGH', value: 8},
      {name: 'SPD', value: 0, hasPrefix: true},
      {name: 'DMG', value: 0, hasPrefix: true},
      {name: 'ACC', value: 0, hasPrefix: true},
      {name: 'LCK', value: 0, hasPrefix: true},
    ],
    basicActives: [CARD.WHITE_LION_MONSTER, CARD.WHITE_LION_BASIC_ACTION],
    aiCards: getWhiteLionAiLevel1Cards(),
    hitCards: shuffle(R.values(WHITE_LION_HIT_CARD)),
  },
  WHITE_LION_LEVEL_2: {
    id: 'WHITE_LION_LEVEL_2',
    monsterName: 'White Lion',
    encounterName: 'Level 2',
    stats: [
      {name: 'MOV', value: 7},
      {name: 'TGH', value: 10},
      {name: 'SPD', value: 1, hasPrefix: true},
      {name: 'DMG', value: 1, hasPrefix: true},
      {name: 'ACC', value: 0, hasPrefix: true},
      {name: 'LCK', value: 1, hasPrefix: true},
    ],
    basicActives: [
      CARD.WHITE_LION_AI_CUNNING,
      CARD.WHITE_LION_MONSTER,
      CARD.WHITE_LION_BASIC_ACTION,
    ],
    aiCards: getWhiteLionAiLevel2Cards(),
    hitCards: shuffle(R.values(WHITE_LION_HIT_CARD)),
  },
  WHITE_LION_LEVEL_3: {
    id: 'WHITE_LION_LEVEL_3',
    monsterName: 'White Lion',
    encounterName: 'Level 3',
    stats: [
      {name: 'MOV', value: 8},
      {name: 'TGH', value: 14},
      {name: 'SPD', value: 2, hasPrefix: true},
      {name: 'DMG', value: 2, hasPrefix: true},
      {name: 'ACC', value: 2, hasPrefix: true},
      {name: 'LCK', value: 1, hasPrefix: true},
    ],
    basicActives: [
      CARD.WHITE_LION_AI_MERCILESS,
      CARD.WHITE_LION_AI_CUNNING,
      CARD.WHITE_LION_MONSTER,
      CARD.WHITE_LION_BASIC_ACTION,
    ],
    aiCards: getWhiteLionAiLevel3Cards(),
    hitCards: shuffle(R.values(WHITE_LION_HIT_CARD)),
  },
};

const getImageUris = R.map(({imageUrl}: {imageUrl: string}) => ({
  uri: imageUrl,
}));

export default class ShowdownService {
  static getData = getData;
  static CARD = CARD;
  static ENCOUNTER = ENCOUNTER;
}
