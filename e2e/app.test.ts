import {by, device, element, expect} from 'detox';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./app.feature', {
  loadRelativePath: true,
});

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Text"$/, async (text: string) => {
      await expect(element(by.text(text))).toBeVisible();
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "loaded"', () => {});

    when('I am at "Home Screen"', () => {});

    iShouldSeeText(then);
  });
});
