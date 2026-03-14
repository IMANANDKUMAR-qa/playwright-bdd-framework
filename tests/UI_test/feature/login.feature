Feature: Playwright Home Page

    Scenario: Check title
        Given I am on Playwright home page "https://www.google.com/"
        When I click link "Get started"
        Then I see in title "Installation"
