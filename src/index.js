import './styles/reset.css';
import './styles/main.css';
import renderScores from './modules/render-scores.js';
import { postSingleScore } from './modules/api-requests.js';

const refreshButton = document.querySelector('#scores__refresh-btn');
// Get fresh scores data when 'Refresh' button is clicked
refreshButton.addEventListener('click', () => renderScores());
// Get fresh scores data when the page is loaded
window.addEventListener('load', () => renderScores());

// Event handler for Add Score form submission
const addScoreForm = document.querySelector('#add-score__form');
addScoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(addScoreForm);
  const user = data.get('user');
  const scoreString = data.get('score');
  const score = parseInt(scoreString, 10);

  try {
    const { success } = await postSingleScore({ user, score });
    if (success) {
      // TODO: Tell user that the score was saved successfully
      addScoreForm.reset();
      renderScores();
    }
  } catch (e) {
    // TODO: Tell user that the score was NOT saved successfully, try again later
  }
});
