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

    when('I press active card "Basic Action"', () => {
      fireEvent(component.getByTestId('WHITE_LION_BASIC_ACTION'), 'press');
    });

    then('I should see selected card "Basic Action"', () => {
      expect(
        component.queryByTestId('WHITE_LION_BASIC_ACTION')?.props.selected,
      ).toBe(true);
    });

    then('I should see selected image "Basic Action"', () => {
      expect(
        component.getByTestId('CARD_IMAGE.WHITE_LION_BASIC_ACTION'),
      ).toBeDefined();
    });
  });
});
