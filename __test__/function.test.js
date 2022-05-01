
import '../mock/initialDOM'
import data from '../scripts/modules/GLOBALS'
import { renderProjectToTheDom } from '../scripts/modules/Functions'
describe('Assert dom content after initial script executes', () => {
  test('Assert all projects arr rendered to the dom', () => {
    renderProjectToTheDom();
    const projectContainerNod = document.querySelector('#recent-work').querySelector('.card-flow');
    expect(projectContainerNod.childElementCount).toBe(data.Projects.length)
  });
});