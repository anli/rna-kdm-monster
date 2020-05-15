Feature: First Story

  Scenario: Data is loaded
    Given data is "First Story"
    When I am at "Showdown Screen"
    Then I should see "White Lion Text"
    Then I should see "First Story Text"

    Then I should see "MOV 6 Stat"
    Then I should see "TGH 6 Stat"
    Then I should see "SPD - Stat"
    Then I should see "DMG - Stat"
    Then I should see "ACC - Stat"

    When I press "ACC Stat Button"
    Then I should see "ACC +1 Stat"

    When I longPress "ACC Stat Button"
    When I longPress "ACC Stat Button"
    Then I should see "ACC -1 Stat"

