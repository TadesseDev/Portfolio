
import '../mock/initialDOM'
import data from '../scripts/modules/GLOBALS'
describe('Test initial dom content', () => {
  const section = document.querySelectorAll('section');
  test('assert all section are present inside the dom', () => {
    expect(section.length).toBe(5);
  });
  test('Assert menu element to toggle menu presents', () => {
    expect(document.querySelector('#app-bar-mobile').querySelector('.menu'))
      .toBeTruthy();
  });
});