  Feature: GUI test: fill time sheet

  Scenario: Log in ATR
  Given I am logged in at "ATR url"
		| USERNAME | PASSWORD |
		| username | password |
  And the time sheet is active
		| SERVICE | HOSTNAME | ELEMENT   |
		| whoIs   | webName  | chsckWsdl |
  When I enter week hours
		| WEEKNR | ACTIVITYCODE | MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY |
		| 12     | activity-1   | 8      | 8       | 8         | 8        | 0      |
		| 12     | activity-2   | 0      | 0       | 0         | 0        | 8      |
  Then the timesheet is filled