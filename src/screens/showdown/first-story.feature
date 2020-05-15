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

    Then I should see "Monster Text"
    Then I should see "Basic Action Text"

  Scenario: Stat is press
    Given data is "First Story"
    When I am at "Showdown Screen"
    When I press "ACC Stat Button"
    Then I should see "ACC +1 Stat"

  Scenario: Stat is long press
    Given data is "First Story"
    When I am at "Showdown Screen"
    When I longPress "ACC Stat Button"
    Then I should see "ACC -1 Stat"

