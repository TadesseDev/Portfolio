import '../mock/initialDOM'
import data from '../scripts/modules/GLOBALS'
import { DOMReadyActions } from '../scripts/main'
DOMReadyActions();
describe('Assert hamburger anc closeIcon are capable toggling menu options', () => {
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
});