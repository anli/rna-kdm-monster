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
    step(/^I press "(.*) Card"$/, (name: string) => {
      fireEvent(component.getByTestId(`Cards.${name}`), 'press');
    });
  };

  const iShouldSeeCardSelected = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Card Selected"$/, (name: string) => {
      expect(component.queryByTestId(`Cards.${name}`)?.props.selected).toBe(
        true,
      );
    });
  };

  const iShouldSeeCardImage = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Card Image"$/, (name: string) => {
      expect(component.getByTestId(`CardImage.${name}`)).toBeDefined();
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
  });
});
