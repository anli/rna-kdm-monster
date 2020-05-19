import {EncounterSelectScreen} from '@screens';
import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import * as redux from 'react-redux';

const feature = loadFeature('./encounter-select.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
  });

  const iAmAtScreen = (step: DefineStepFunction) => {
    step('I am at "Encounter Select Screen"', () => {
      component = render(<EncounterSelectScreen.Component />);
    });
  };

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Text"$/, (text: string) => {
      expect(component.getByText(text)).toBeDefined();
    });
  };

  const iPressButton = (step: DefineStepFunction) => {
    step(/^I press "(.*) Button"$/, (id: string) => {
      fireEvent.press(component.getByTestId(id));
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "loaded"', () => {});

    iAmAtScreen(when);

    iShouldSeeText(then);
    iShouldSeeText(then);
  });

  test('Encounter is selected', ({given, when, then}) => {
    given('data is "loaded"', () => {});

    iAmAtScreen(when);

    iPressButton(when);

    then('I should see "White Lion Level 1 Data Loaded"', () => {
      expect(mockDispatch).toBeCalledWith({
        payload: 'WHITE_LION_LEVEL_1',
        type: 'Showdown/load',
      });
      mockDispatch.mockClear();
    });
  });
});
