Feature: Computer Management
  In order to mange computer
  As a admin
  I want to be able to add/edit/delete computers

  Scenario: Add Computer
    Given I am on Computer Management page
    When I Add computer with valid information
    Then I can view computer is added successfully

  Scenario Outline: Add Computers
    Given I am on Computer Management page
    When I Add computer with valid "<computerName>" and "<introducedDate>" and "<discontinuedDate>"
    Then I can view computer is added successfully with the correct computer name "<computerName>"

    Examples:
      | computerName      | introducedDate | discontinuedDate |
      | testComputerFeature1 | 2019-01-01     | 2020-01-01       |
      | testComputerFeature2 | 2019-01-05     | 2020-01-05       |

