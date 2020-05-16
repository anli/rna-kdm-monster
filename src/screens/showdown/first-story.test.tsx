import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import FastImage from 'react-native-fast-image';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import ShowdownScreen from './showdown';

const feature = loadFeature('./first-story.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;
  jest.spyOn(FastImage, 'preload').mockImplementation(() => {});

  beforeEach(() => {});

  const iAmAtScreen = (step: DefineStepFunction) => {
    step('I am at "Showdown Screen"', () => {
      component = render(<ShowdownScreen.Component />);
    });
  };

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Text"$/, (text: string) => {
      expect(component.getByText(text)).toBeDefined();
    });
  };

  const iShouldSeeStat = (step: DefineStepFunction) => {
    step(/^I should see "(.*) (.*) Stat"$/, (name: string, value: string) => {
      expect(
        String(component.queryByTestId(`Stat.${name}`)?.props.children),
      ).toEqual(value);
    });
  };

  const iEventStatButton = (step: DefineStepFunction) => {
    step(/^I (.*) "(.*) Stat Button"$/, (event: string, name: string) => {
      fireEvent(component.getByTestId(`Stat.${name}`), event);
    });
  };

  const iEventButton = (step: DefineStepFunction) => {
    step(/^I (.*) "(.*) Button"$/, (event: string, name: string) => {
      fireEvent(component.getByTestId(`Button.${name}`), event);
    });
  };

  const iPressCard = (step: DefineStepFunction) => {
    step(/^I press "(.*) (.*)"$/, (name: string, deck: string) => {
      fireEvent(component.getByTestId(`${deck}.${name}`), 'press');
    });
  };

  const iShouldSeeCardSelected = (step: DefineStepFunction) => {
    step(
      /^I should see "(.*) (.*) Selected"$/,
      (name: string, deck: string) => {
        expect(component.queryByTestId(`${deck}.${name}`)?.props.selected).toBe(
          true,
        );
      },
    );
  };

  const iShouldSeeCardImage = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Card Image"$/, (name: string) => {
      expect(component.getByTestId(`CardImage.${name}`)).toBeDefined();
    });
  };

  const iShouldNotSeeText = (step: DefineStepFunction) => {
    step(/^I should not see "(.*) Text"$/, (text: string) => {
      expect(component.queryByText(text)).toBeNull();
    });
  };

  const iShouldSeeAiWound = (step: DefineStepFunction) => {
    step(/^I should see "(.*) AI Wound"$/, (value: string) => {
      expect(
        String(component.queryByTestId('AiWoundCounter')?.props.children),
      ).toEqual(value);
    });
  };

  const iShouldSeeCard = (step: DefineStepFunction, expected) => {
    step(/^I should see "(.*) (.*)"$/, (value: string, name: string) => {
      expect(
        String(component.queryByTestId(`${name}`)?.props.data[0].name),
      ).toEqual(expected);
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "First Story"', () => {});

    iAmAtScreen(when);

    iShouldSeeText(then);
    iShouldSeeText(then);

    iShouldSeeStat(then);
    iShouldSeeStat(then);
    iShouldSeeStat(then);
    iShouldSeeStat(then);
    iShouldSeeStat(then);

    iShouldSeeText(then);
    iShouldSeeText(then);

    iShouldSeeText(then);

    iShouldSeeText(then);
  });

  test('Stat is press', ({given, when, then}) => {
    given('data is "First Story"', () => {});
    iAmAtScreen(when);
    iEventStatButton(when);
    iShouldSeeStat(then);
  });

  test('Stat is long press', ({given, when, then}) => {
    given('data is "First Story"', () => {});
    iAmAtScreen(when);
    iEventStatButton(when);
    iShouldSeeStat(then);
  });

  test('Basic active card is press', ({given, when, then}) => {
    given('data is "First Story"', () => {});
    iAmAtScreen(when);

    iPressCard(when);
    iShouldSeeCardSelected(then);
    iShouldSeeCardImage(then);
  });

  test('Draw AI card', ({given, when, then}) => {
    given('data is "First Story"', () => {});
    iAmAtScreen(when);

    iEventButton(when);
    iShouldSeeText(then);

    iPressCard(when);
    iShouldSeeCardSelected(then);
    iShouldSeeCardImage(then);

    iEventButton(when);
    iShouldSeeCard(then, 'Claw');
    iEventButton(when);
    iShouldSeeCard(then, 'Claw');

    iEventButton(when);
    iShouldNotSeeText(then);
  });

  test('Ai Wound is press', ({given, when, then}) => {
    given('data is "First Story"', () => {});
    iAmAtScreen(when);
    iEventButton(when);
    iShouldSeeAiWound(then);

    iEventButton(when);
    iShouldSeeAiWound(then);

    iEventButton(when);
    iShouldSeeAiWound(then);
  });

  test('Draw Hit card', ({given, when, then}) => {
    given('data is "First Story"', () => {});
    iAmAtScreen(when);
    iEventButton(when);
    iShouldSeeText(then);

    iPressCard(when);
    iShouldSeeCardSelected(then);

    iPressCard(when);
    iShouldSeeCardSelected(then);
    iPressCard(when);
    iShouldSeeCardSelected(then);

    iEventButton(when);
    iShouldSeeText(then);
  });

  test('Roll Dice', ({given, when, then}) => {
    given('data is "First Story"', () => {});
    iAmAtScreen(when);
    iEventButton(when);
    iEventButton(when);
    iEventButton(when);
    then('I should see "Dice Result"', () => {
      expect(component.getByTestId('DiceResult.0')).toBeDefined();
      expect(component.getByTestId('DiceResult.1')).toBeDefined();
      expect(component.getByTestId('DiceResult.2')).toBeDefined();
    });
  });
});
