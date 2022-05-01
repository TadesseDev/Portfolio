// import projectData from '../scripts/modules/GLOBALS'
import { domEvent } from '../scripts/main';
// import { disposeMobileMenu } from '../scripts/modules/Functions';
document.body.innerHTML = '../index.html';
describe('Test initial dom content as dom loaded', () => {
  test('test one', () => {
    expect(domEvent()).toBe('abc');
  });
});