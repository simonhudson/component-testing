Feature: Site logo
	As a user
	I want the page to have a site logo
	So that I know I am on an Experian site

	Scenario: Logo exists
		Given I am a user
		When I navigate to the "Home" page
		Then there is a ".qa-site-logo" element
