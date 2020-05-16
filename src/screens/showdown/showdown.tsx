import {useScreenDimensions} from '@utils';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Badge, IconButton, List} from 'react-native-paper';
import styled from 'styled-components/native';
import {
  CardImage,
  Cards,
  Header,
  Screen as UnstyledScreen,
  SelectedButtons,
  Stats,
} from './components';
import useShowdown from './hooks';

const ShowdownScreenComponent = () => {
  const {data, actions} = useShowdown();
  const {isLandscape} = useScreenDimensions();

  return (
    <Screen isLandscape={isLandscape} testID="ShowdownScreen">
      <Top isLandscape={isLandscape}>
        <ScrollView>
          <CardImage
            testID={`CardImage.${data?.selected?.cardId}`}
            imageUrl={data?.selected?.imageUrl}
          />
        </ScrollView>
        <StatsContainer>
          <Stats
            data={data?.stats}
            onPress={actions?.onIncreaseStat}
            onLongPress={actions?.onDecreaseStat}
          />
        </StatsContainer>
        <SelectedButtonsContainer>
          <SelectedButtons data={data?.selected?.buttons} actions={actions} />
        </SelectedButtonsContainer>
        <DiceResults>
          {data?.diceResults.map((dice, index) => (
            <DiceResult
              testID={`DiceResult.${index}`}
              key={index}
              icon={dice.icon}
              size={32}
            />
          ))}
        </DiceResults>
      </Top>
      <Bottom isLandscape={isLandscape}>
        <Header title={data?.monsterName} description={data?.encounterName} />
        <CardsContainer>
          <Cards
            testID="ActiveCards"
            data={data?.actives}
            onPress={actions?.onSelectActive}
            selected={data?.selected}
            deckId="actives"
          />
        </CardsContainer>

        <List.Item
          title={`AI (${data?.ai.draws.length})`}
          right={props => (
            <>
              <View>
                <IconButton
                  {...props}
                  disabled={!(data?.ai.draws.length > 0)}
                  icon="heart-broken"
                  testID="Button.AiWound"
                  onPress={actions?.onWoundAi}
                  onLongPress={actions?.onUnwoundAi}
                />
                <ButtonBadge size={16} testID="AiWoundCounter">
                  {data?.ai.wounds.length}
                </ButtonBadge>
              </View>
              <IconButton
                {...props}
                testID="Button.AiDiscardsShuffle"
                icon="cards"
                onPress={actions?.onShuffleAiDiscards}
              />
              <IconButton
                testID="Button.AiDraw"
                disabled={!(data?.ai.draws.length > 0)}
                {...props}
                icon="hand-okay"
                onPress={actions?.onDrawAi}
              />
            </>
          )}
        />
        <CardsContainer>
          <Cards
            testID="AiCards"
            data={data?.ai.discards}
            onPress={actions?.onSelectAi}
            selected={data?.selected}
            deckId="ais"
          />
        </CardsContainer>

        <List.Item
          title={`Hit Location (${data?.hit.draws.length})`}
          right={props => (
            <>
              <IconButton
                {...props}
                testID="Button.HitDiscardsShuffle"
                icon="cards"
                onPress={actions?.onShuffleHitDiscards}
              />
              <IconButton
                testID="Button.HitDraw"
                disabled={!(data?.hit.draws.length > 0)}
                {...props}
                icon="hand-okay"
                onPress={actions?.onDrawHit}
              />
            </>
          )}
        />
        <CardsContainer>
          <Cards
            testID="HitCards"
            data={data?.hit.discards}
            onPress={actions?.onSelectHit}
            selected={data?.selected}
            deckId="hits"
          />
        </CardsContainer>
      </Bottom>
    </Screen>
  );
};

const ShowdownScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = ShowdownScreenComponent;
  static Options = ShowdownScreenOptions;
}

const StatsContainer = styled.View`
  position: absolute;
  margin-left: 8px;
  margin-bottom: 8px;
  bottom: 0;
`;

/* istanbul ignore next */
const Top = styled.View`
  background-color: grey;
  flex: 1;
  /* max-height: 100%; */
  max-height: ${props => (props.isLandscape ? '100%' : '400px')};
`;

/* istanbul ignore next */
const Bottom = styled.View`
  flex: ${props => (props.isLandscape ? '1' : '0 1 auto')};
`;

const CardsContainer = styled.View`
  margin-left: 16px;
`;

const ButtonBadge = styled(Badge)`
  position: absolute;
  bottom: 0;
`;

const SelectedButtonsContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 12px 8px 12px 8px;
`;

const DiceResults = styled.View`
  position: absolute;
  bottom: 8px;
  right: 0;
  left: 0;
  flex-direction: row;
  justify-content: center;
`;

const DiceResult = styled(Avatar.Icon)`
  margin-left: 8px;
`;

/* istanbul ignore next */
const Screen = styled(UnstyledScreen)`
  flex-direction: ${props => (props.isLandscape ? 'row' : 'column')};
`;
