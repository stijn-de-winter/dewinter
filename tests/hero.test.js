import { Selector } from 'testcafe';

// A fixture must be created for each group of tests.
fixture(`Index page`)
    // Load the URL your development server runs on.
    .page('http://localhost:8080');

// Create a new test(description, function(testController): <Promise>)
test('Hero body contains the title "Hero title"', async testController => {
    // Select the paragraph element under the body.
    // Must use promises (async / await  here) for communication with the browser.
    const paragraphSelector = await new Selector('.hero-body .title');

    // Assert that the inner text of the paragraph is "Hello World!"
    await testController.expect(paragraphSelector.innerText).eql('Hero title');
});