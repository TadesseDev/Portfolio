
import '../mock/initialDOM'
describe('Test initial dom content as dom loaded', () => {
  test('test one', () => {
    expect(document.querySelector('#app-bar-mobile').querySelector('.menu'))
      .not.toBeNull();
  });
});