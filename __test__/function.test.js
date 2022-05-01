
import '../mock/initialDOM'
import data from '../scripts/modules/GLOBALS'
import { renderProjectToTheDom } from '../scripts/modules/Functions'
renderProjectToTheDom();
const projectContainerNod = document.querySelector('#recent-work').querySelector('.card-flow');
describe('Assert project list loading', () => {
  test('Assert all projects arr rendered to the dom', () => {
    expect(projectContainerNod.childElementCount).toBe(data.Projects.length)
  });
});
describe('Assert hide and show modal (project detail)', () => {
  const projectCard = projectContainerNod.querySelectorAll('.card');
  projectCard.forEach(card => {
    const button = card.querySelector('button');
    const closeButton = data.recentWorkModal.querySelector('#close-modal-desktop');
    expect(String(data.recentWorkModal.classList)).toBe('hide');
    button.click();
    expect(String(data.recentWorkModal.classList)).toBe('');
    closeButton.click();
    expect(String(data.recentWorkModal.classList)).toBe('hide');
  })
  // console.log(projectButtons.length)
});
