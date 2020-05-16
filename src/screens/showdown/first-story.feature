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

    Then I should see "AI (8) Text"

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

  Scenario: Basic active card is press
    Given data is "First Story"
    When I am at "Showdown Screen"
    When I press "WHITE_LION_BASIC_ACTION Card"
    Then I should see "WHITE_LION_BASIC_ACTION Card Selected"
    Then I should see "WHITE_LION_BASIC_ACTION Card Image"

  Scenario: Draw AI card
    Given data is "First Story"
    When I am at "Showdown Screen"
    When I press "AiDraw Button"
    Then I should see "Claw Text"
    When I press "WHITE_LION_AI_CLAW Card"
    Then I should see "WHITE_LION_AI_CLAW Card Selected"
    Then I should see "WHITE_LION_AI_CLAW Card Image"

    When I press "AiDiscardsShuffle Button"
    Then I should not see "Claw Text"
