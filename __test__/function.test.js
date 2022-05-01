
import '../mock/initialDOM'
import data from '../scripts/modules/GLOBALS'
import { renderProjectToTheDom, DOMReadyActions } from '../scripts/modules/Functions'
DOMReadyActions();
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
});

describe('Assert navigation buttons are capable of changing section', () => {
  test('Assert initial links for the navigation buttons', () => {
    expect(data.goUp.href.split("#")[1]).toBe(data.sections[0].getAttribute('id'));
    expect(data.godown.href.split("#")[1]).toBe(data.sections[1].getAttribute('id'));
  });
  // data.godown
})
