import { fetchScores } from './api-requests.js';

const renderScores = async () => {
  // Fetch scores from API
  const latestScores = await fetchScores();

  // The scores returned by the API are not in sorted order, so we sort them
  // before appending them to the DOM
  const sortedScores = latestScores
    .map(({ user, score }) => ({
      user,
      score: parseInt(score, 10),
    }))
    .sort((a, b) => b.score - a.score);

  // Render top three scores to "Top Scores" section
  const topThreeScores = sortedScores.slice(0, 3);
  const topScoresTarget = document.querySelector('#top-scores-container');
  topScoresTarget.innerHTML = '';

  topThreeScores.forEach((scoreData, index) => {
    // 1. Create vertical bar div
    const bar = document.createElement('div');
    bar.classList.add('top-score');
    // 2. Set class depending on score rank
    if (index === 0) {
      bar.classList.add('top-score__first');
    }
    if (index === 1) {
      bar.classList.add('top-score__second');
    }
    if (index === 2) {
      bar.classList.add('top-score__third');
    }
    // 3. Create rank span
    const rank = document.createElement('span');
    rank.classList.add('top-score__rank');
    rank.innerText = index + 1;
    bar.appendChild(rank);
    // 4. Create name span
    const user = document.createElement('span');
    user.classList.add('top-score__user');
    user.innerText = scoreData.user;
    bar.appendChild(user);
    // 5. Create score span
    const score = document.createElement('span');
    score.classList.add('top-score__score');
    score.innerText = scoreData.score;
    bar.appendChild(score);
    // 4. Add bar to container
    topScoresTarget.appendChild(bar);
  });

  // Render all scrores to "Recent Scores" section
  const scoresTable = document.querySelector('#scores__table');
  scoresTable.innerHTML = '';

  sortedScores.forEach((scoreData, index) => {
    // 1. Create row div
    const row = document.createElement('div');
    row.classList.add('scores__table__row');
    // 2. Create rank span
    const rank = document.createElement('span');
    rank.classList.add('scores__table__row__rank');
    rank.innerText = index + 1;
    row.appendChild(rank);
    // 3. Create name span
    const name = document.createElement('span');
    name.classList.add('scores__table__row__name');
    name.innerText = scoreData.user;
    // 4. Create score span
    const score = document.createElement('span');
    score.classList.add('scores__table__row__score');
    score.innerText = scoreData.score;
    // 5. Create points span
    const points = document.createElement('span');
    points.classList.add('scores__table__row__points-label');
    points.innerText = 'Points';
    // 6. Add name and score to row
    row.appendChild(name);
    row.appendChild(score);
    row.appendChild(points);
    // 7. Add row to table
    scoresTable.appendChild(row);
    // 8. Add staggered animation
    row.style.animationDelay = `${20 * index}ms`;
  });
};

export default renderScores;
