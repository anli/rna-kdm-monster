Feature: Home

  Scenario: Data is loaded
    Given data is "loaded"
    When I am at "Home Screen"
    Then I should see "Home Text"
