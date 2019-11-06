Feature: Computer Management
  In order to mange computer
  As a admin
  I want to be able to add/edit/delete computers

  Scenario: Add Computer
    Given I am on Computer Management page
    When I Add computer with valid information
    Then I can view computer is added successfully
