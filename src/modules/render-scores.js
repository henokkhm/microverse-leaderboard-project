import { fetchScores } from './api-requests.js';

const renderScores = async () => {
  const scoresTable = document.querySelector('#scores__table');
  scoresTable.innerHTML = '';
  const latestScores = await fetchScores();

  latestScores.forEach((score) => {
    // 1. Create row div
    const row = document.createElement('div');
    row.classList.add('scores__table__row');
    // 2. Create name span
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('scores__table__row__name');
    nameSpan.innerText = score.user;
    row.appendChild(nameSpan);
    // 3. Create score span
    const scoreSpan = document.createElement('span');
    scoreSpan.classList.add('scores__table__row__score');
    scoreSpan.innerText = score.score;
    // 4. Add name and score to row
    row.appendChild(scoreSpan);
    // 5. Add row to table
    scoresTable.appendChild(row);
  });
};

export default renderScores;
