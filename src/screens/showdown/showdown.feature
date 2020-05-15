Feature: Showdown

  Scenario: Data is loaded
    Given data is "loaded"
    When I am at "Showdown Screen"
    Then I should see "Showdown Text"
