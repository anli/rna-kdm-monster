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

    Then I should see "Monster Text"
    Then I should see "Basic Action Text"

    Then I should see "AI (8) Text"
    When I press "AiDraw Button"
    Then I should see "Claw Text"

    When I press "SelectedACTIVE Button"
    Then I should see "Claw ActiveCards"
    When I press "SelectedDISCARD Button"
    Then I should see "Claw AiCards"

    When I press "AiDiscardsShuffle Button"
    Then I should not see "Claw Text"

    When I press "AiWound Button"
    Then I should see "1 AI Wound"
    When I longPress "AiWound Button"
    Then I should see "0 AI Wound"

    Then I should see "Hit Location (23) Text"
    When I press "HitDraw Button"
    Then I should see "Hit Location (22) Text"
    When I press "HitDiscardsShuffle Button"
    Then I should see "Hit Location (23) Text"

    When I press "SelectedROLL_TEN Button"

    When I press "SelectEncounter Button"
    Then I should see "Select Encounter Text"
    Then I should see "White Lion First Story Text"
    Then I should see "White Lion Level 1 Text"
    When I press "WHITE_LION_LEVEL_1 Button"
    Then I should see "AI (10) Text"
