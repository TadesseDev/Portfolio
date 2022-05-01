
import '../mock/initialDOM'
describe('Test initial dom content', () => {
  const section = document.querySelectorAll('section');
  test('assert all section are present inside the dom', () => {
    expect(section.length).toBe(5);
  });

  test('Assert menu element to toggle menu presents', () => {
    const menuElement = document.querySelector('#app-bar-mobile').querySelector('.menu');
    const visibleMenu = menuElement.querySelectorAll('.hide');
    expect(menuElement).toBeTruthy();
    expect(menuElement.childElementCount).toBe(2);
    expect(visibleMenu.length).toBe(1);
  });
});
