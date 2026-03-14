// Generated from: tests\UI_test\feature\login.feature
import { test } from "../../../../tests/UI_test/fixture/fixture.ts";

test.describe('Playwright Home Page', () => {

  test('Check title', async ({ Given, When, Then, BasePage, LoginImpl }) => { 
    await Given('I am on Playwright home page "https://www.google.com/"', null, { LoginImpl }); 
    await When('I click link "Get started"', null, { BasePage }); 
    await Then('I see in title "Installation"', null, { BasePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_test\\feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on Playwright home page \"https://www.google.com/\"","stepMatchArguments":[{"group":{"start":29,"value":"\"https://www.google.com/\"","children":[{"start":30,"value":"https://www.google.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click link \"Get started\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Get started\"","children":[{"start":14,"value":"Get started","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see in title \"Installation\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Installation\"","children":[{"start":16,"value":"Installation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end