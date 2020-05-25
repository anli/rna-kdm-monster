Feature: Encounter Select Screen

  Scenario: Data is loaded
    Given data is "loaded"
    When I am at "Encounter Select Screen"
    Then I should see "White Lion First Story Text"
    Then I should see "White Lion Level 1 Text"

  Scenario: Encounter is selected
    Given data is "loaded"
    When I am at "Encounter Select Screen"
    When I press "Button.WHITE_LION_LEVEL_1 Button"
    Then I should see "White Lion Level 1 Data Loaded"
