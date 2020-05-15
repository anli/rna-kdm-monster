import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {RenderAPI} from 'react-native-testing-library';
import ShowdownScreen from './showdown';

const feature = loadFeature('./first-story.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;

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

  test('Data is loaded', ({given, when, then}) => {
    given('data is "First Story"', () => {});

    iAmAtScreen(when);

    iShouldSeeText(then);
    iShouldSeeText(then);
  });
});
