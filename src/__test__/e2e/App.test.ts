import { Selector } from 'testcafe';

// The following line fixes testcafe + jest type collision
declare const test: TestFn;

fixture`Cats Game App`.page`http://localhost:3000`;
/* 
I will like to clarify something here, I will prefer to use mocked data instead of live data for mocks, because
if something happens on the live data this test will fail, it's better to ahve controlled data for this
but since this is a quick test I understand that we cannot do such thing, but just wanted to clarify that
 */

test('Should find players using the searchbar', async (t) => {
  const inputSearchBar = Selector('input').withAttribute('placeholder', 'Search By Name');
  const loadingMessage = Selector('h1').withText('Loading...');
  await t
    .expect(loadingMessage.exists)
    .ok()
    .expect(inputSearchBar.exists)
    .ok()
    // Wait until Loading message disapears
    .expect(loadingMessage.exists)
    .notOk()
    // Search for Alivia on the search bar
    .typeText(inputSearchBar, 'Alivia')
    .expect(loadingMessage.exists)
    .ok()
    // Wait until Loading message disapears
    .expect(loadingMessage.exists)
    .notOk()
    //Verify that the response is ok (only one element) and verify player Alivia info is correct
    .expect(Selector('div').withAttribute('data-testid', 'playersCardContainer').exists)
    .ok('Query was ok')
    .expect(Selector('div').withAttribute('data-testid', 'playersCardContainer').child(0).count)
    .eql(1)
    .expect(Selector('h5').withText('Alivia Gaines').exists)
    .ok()
    .expect(Selector('span').withText('Last Activity: 2020-10-20').exists)
    .ok()
    .expect(Selector('span').withText('Unique Opponents: 5').exists)
    .ok()
    .expect(Selector('div').withText('0.6').exists)
    .ok()
    .expect(Selector('h5').withText('Mahir Ortiz').exists)
    .notOk();
});

test('Should render No data message when no palyers where found with that criteria', async (t) => {
  const inputSearchBar = Selector('input').withAttribute('placeholder', 'Search By Name');
  const searchCriteria = 'xr1sr4456';
  const loadingMessage = Selector('h1').withText('Loading...');

  await t
    .expect(loadingMessage.exists)
    .ok()
    .expect(inputSearchBar.exists)
    .ok()
    .expect(loadingMessage.exists)
    .notOk()
    .expect(inputSearchBar.exists)
    .ok()
    // Search for a criteria that will not return any data
    .typeText(inputSearchBar, searchCriteria)
    .expect(Selector('div').withAttribute('data-testid', 'playersCardContainer').exists)
    .ok('Query was ok')
    // verify that no players were rendered and the fallback message is rendered
    .expect(Selector('div').withAttribute('data-testid', 'playersCardContainer').child(0).count)
    .eql(1)
    .expect(Selector('h5').withText('Alivia Gaines').exists)
    .notOk()
    .expect(Selector('h5').withText('Mahir Ortiz').exists)
    .notOk()
    .expect(Selector('h3').withText(`No players found with "${searchCriteria}" criteria 😭`).exists)
    .ok();
});
test('Should change theme when toggle button is clicked', async (t) => {
  const togleMessage = Selector('h5').withText(/Placing Toogle at the end just for demo purposes/i);
  const toggleButton = togleMessage.nextSibling();
  const bodyElement = Selector('body');

  // For the colors assertions I should use the imported values from theme, (darkTheme/lightTheme).text
  // but somehow I'm getting rgb() instead of the string, it's the same color just on rgb format and I dont have time to debug :(
  // Leaving this as a temporal working function but in real life this should'nt go until I find out and use the correct approach
  await t
    .expect(togleMessage.exists)
    .ok()
    .expect(toggleButton.exists)
    .ok()
    // Verify that body have lightTheme.text color
    .expect(bodyElement.getStyleProperty('color'))
    .eql('rgb(0, 0, 0)')
    .expect(Selector('p').withText('🌝').exists)
    .ok()
    .click(toggleButton)
    // verify that theme is changed with the new emoji
    .expect(Selector('p').withText('🌚').exists)
    .ok()
    // Verify that body have darkTheme.text color
    .expect(bodyElement.getStyleProperty('color'))
    .eql('rgb(250, 250, 250)');
});
