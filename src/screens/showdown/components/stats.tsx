import React from 'react';
import {Chip as UnstyledChip} from 'react-native-paper';
import styled from 'styled-components/native';

interface Stat {
  name: string;
  value: number;
  hasPrefix?: boolean;
}

interface StatsProps {
  data?: Stat[];
  onPress: (name: string) => any;
  onLongPress: (name: string) => any;
}

const Stats = ({
  data,
  onPress: _onPress,
  onLongPress: _onLongPress,
}: StatsProps) => (
  <Container>
    {data?.map(stat => {
      const onPress = () => _onPress(stat.name);
      const onLongPress = () => _onLongPress(stat.name);

      return (
        <Chip
          testID={`Stat.${stat.name}`}
          key={stat.name}
          mode="outlined"
          icon={STATS_ICON[stat.name]}
          onPress={onPress}
          onLongPress={onLongPress}>
          {getStatValue(stat.value, stat?.hasPrefix)}
        </Chip>
      );
    })}
  </Container>
);

export default Stats;

const STATS_ICON: {[key: string]: string} = {
  MOV: 'shoe-print',
  TGH: 'shield',
  SPD: 'clock-fast',
  DMG: 'sword',
  ACC: 'target',
  LCK: 'clover',
};

const getStatValue = (value: number, hasPrefix = false) => {
  if (hasPrefix) {
    if (value === 0) {
      return '-';
    }

    return (value > 0 ? '+' : '') + value;
  }
  return value;
};

const Container = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;

const Chip = styled(UnstyledChip)`
  margin-top: 4px;
  margin-bottom: 4px;
`;
