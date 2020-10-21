Feature: Check the search page + results

  Scenario: search existing character
    Given The app is open on "localhost"
    When radiobutton people is selected
    And search + click is performed with "R2-D2"
    Then the character result is:
      | Gender:     | n/a         |
      | Birth year: | 33BBY       |
      | Eye color:  | red         |
      | Skin color: | white, blue |

  Scenario: search non-existing character
    Given The app is open on "localhost"
    When search + click is performed with "John"
    Then the result is "Not found."

  Scenario: partial match people several results
    Given The app is open on "localhost"
    When radiobutton people is selected
    And search + enter is performed with "b"
    Then the character result is more then one "true"

  Scenario: enter search existing planet
    Given The app is open on "localhost"
    When radiobutton planets is selected
    And search + enter is performed with "Hoth"
    Then the planet result is:
      | Population: | unknown      |
      | Climate:    | frozen       |
      | Gravity:    | 1.1 standard |

  Scenario: search existing planet
    Given The app is open on "localhost"
    When radiobutton planets is selected
    And search + click is performed with "Hoth"
    Then the planet result is:
      | Population: | unknown      |
      | Climate:    | frozen       |
      | Gravity:    | 1.1 standard |

  Scenario: search non-existing planet
    Given The app is open on "localhost"
    When radiobutton planets is selected
    And search + click is performed with "Pink Planet"
    Then the result is "Not found."

  Scenario: search people after existing planet
    Given The app is open on "localhost"
    When radiobutton planets is selected
    And search + enter is performed with "Hoth"
    And radiobutton people is selected
    And search button is clicked
    Then the result is "Not found."

  Scenario: partial match planets several results
    Given The app is open on "localhost"
    When radiobutton planets is selected
    And search + enter is performed with "b"
    Then the planets result is more then one "true"

#    TODO discuss fix
  Scenario: partial match people several results + clean search
    Given The app is open on "localhost"
    When radiobutton people is selected
    And search + enter is performed with "b"
    And search box is cleared
    And search button is clicked
#    Then the result is "Not found."
