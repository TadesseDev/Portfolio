
import '../mock/initialDOM'
import data from '../scripts/modules/GLOBALS'
describe('Test initial dom content as dom loaded', () => {
  test('test one', () => {
    expect(document.querySelector('#app-bar-mobile').querySelector('.menu'))
      .toBeTruthy();
  });
});