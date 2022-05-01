import '../mock/initialDOM.js';
import data from '../scripts/modules/GLOBALS.js';
import { DOMReadyActions } from '../scripts/modules/Functions.js';

DOMReadyActions();
describe('Assert toggling menu options', () => {
  test('assert hamburger show the menubar', () => {
    expect(String(data.listOfMenus.classList)).toBe('hide');
    data.humBurger.click();
    expect(String(data.listOfMenus.classList)).toBe('show');
  });
  test('Assert close icon hide the menubar', () => {
    expect(String(data.listOfMenus.classList)).toBe('show');
    data.closeMobileMenu.click();
    expect(String(data.listOfMenus.classList)).toBe('hide');
  });
  test('Assert returnHome icon hide the menubar', () => {
    data.humBurger.click();
    expect(String(data.listOfMenus.classList)).toBe('show');
    data.returnHome.click();
    expect(String(data.listOfMenus.classList)).toBe('hide');
  });
  test('Assert every list  item inside menu hide the menubar', () => {
    data.listOfMenus.querySelectorAll('li').forEach((element) => {
      data.humBurger.click();
      expect(String(data.listOfMenus.classList)).toBe('show');
      element.click();
      expect(String(data.listOfMenus.classList)).toBe('hide');
    });
  });
});