import {shuffle} from '@utils';
import R from 'ramda';
import {useState} from 'react';

interface Dice {
  icon: string;
}

const useDices = () => {
  const [data, setData] = useState<Dice[]>([]);

  const onRollTen = () => {
    setData(getResults(DICE_TEN_FACES, data));
  };

  const onRollHit = () => {
    setData(getResults(DICE_HIT_FACES, data));
  };

  const onRollSix = () => {
    setData(getResults(DICE_SIX_FACES, data));
  };

  const actions = {
    onRollTen,
    onRollHit,
    onRollSix,
  };

  return {data, actions};
};

export default useDices;

const getResults = (faces: Dice[], results: Dice[]) => {
  const result: any = R.head(shuffle(faces));

  return R.slice(0, 5)([result, ...results]);
};

const DICE_SIX_FACES = [
  {icon: 'numeric-1-circle'},
  {icon: 'numeric-2-circle'},
  {icon: 'numeric-3-circle'},
  {icon: 'numeric-4-circle'},
  {icon: 'numeric-5-circle'},
  {icon: 'numeric-6-circle'},
];

const DICE_TEN_FACES = [
  {icon: 'numeric-1-box-outline'},
  {icon: 'numeric-2-box-outline'},
  {icon: 'numeric-3-box-outline'},
  {icon: 'numeric-4-box-outline'},
  {icon: 'numeric-5-box-outline'},
  {icon: 'numeric-6-box-outline'},
  {icon: 'numeric-7-box-outline'},
  {icon: 'numeric-8-box-outline'},
  {icon: 'numeric-9-box-outline'},
  {icon: 'dice-d10'},
];

const DICE_HIT_FACES = [
  {icon: 'hand'},
  {icon: 'google-street-view'},
  {icon: 'google-street-view'},
  {icon: 'face'},
  {icon: 'shoe-print'},
  {icon: 'file-word-box'},
];
