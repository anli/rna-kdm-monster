Feature: First Story

  Scenario: Data is loaded
    Given data is "loaded"
    When I am at "Showdown Screen"
    Then I should see "White Lion Text"
    Then I should see "First Story Text"
