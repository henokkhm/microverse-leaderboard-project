import './styles/reset.css';
import './styles/main.css';
import renderScores from './modules/render-scores.js';

const refreshButton = document.querySelector('#scores__refresh-btn');
// Get fresh scores data when 'Refresh' button is clicked
refreshButton.addEventListener('click', () => renderScores());
// Get fresh scores data when the page is loaded
window.addEventListener('load', () => renderScores());
