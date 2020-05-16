import {by, device, element, expect} from 'detox';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./first-story.feature', {
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

  const iShouldSeeStat = (step: DefineStepFunction) => {
    step(
      /^I should see "(.*) (.*) Stat"$/,
      async (name: string, value: string) => {
        await expect(
          element(by.text(value).withAncestor(by.id(`Stat.${name}`))),
        ).toBeVisible();
      },
    );
  };

  const iPressStatButton = (step: DefineStepFunction) => {
    step(/^I press "(.*) Stat Button"$/, async (name: string) => {
      await element(by.id(`Stat.${name}`)).tap();
    });
  };

  const iLongPressStatButton = (step: DefineStepFunction) => {
    step(/^I longPress "(.*) Stat Button"$/, async (name: string) => {
      await element(by.id(`Stat.${name}`)).longPress();
    });
  };

  const iPressButton = (step: DefineStepFunction) => {
    step(/^I press "(.*) Button"$/, async (name: string) => {
      await element(by.id(`Button.${name}`)).tap();
    });
  };

  const iShouldNotSeeText = (step: DefineStepFunction) => {
    step(/^I should not see "(.*) Text"$/, async (text: string) => {
      await expect(element(by.text(text))).toBeNotVisible();
    });
  };

  const iShouldSeeAiWound = (step: DefineStepFunction) => {
    step(/^I should see "(.*) AI Wound"$/, async (value: string) => {
      await expect(element(by.text(value))).toBeVisible();
    });
  };

  const iLongPressButton = (step: DefineStepFunction) => {
    step(/^I longPress "(.*) Button"$/, async (name: string) => {
      await element(by.id(`Button.${name}`)).longPress();
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "First Story"', () => {});

    when('I am at "Showdown Screen"', () => {});

    iShouldSeeText(then);
    iShouldSeeText(then);

    iShouldSeeStat(then);
    iShouldSeeStat(then);
    iShouldSeeStat(then);
    iShouldSeeStat(then);
    iShouldSeeStat(then);

    iPressStatButton(when);
    iShouldSeeStat(then);

    iLongPressStatButton(when);
    iLongPressStatButton(when);
    iShouldSeeStat(then);

    iShouldSeeText(then);
    iShouldSeeText(then);

    iShouldSeeText(then);

    iPressButton(when);
    iShouldSeeText(then);

    iPressButton(when);
    iShouldNotSeeText(then);

    iPressButton(when);
    iShouldSeeAiWound(then);

    iLongPressButton(when);
    iShouldSeeAiWound(then);
  });
});
