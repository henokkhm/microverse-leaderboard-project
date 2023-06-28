const ENDPOINT = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const GAME_ID = 'n4yY4NtqgXrTC1oTBtkJ';

export const fetchScores = async () => {
  const url = `${ENDPOINT}/games/${GAME_ID}/scores`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error fetching data: Status code ${response.status} returned`,
      );
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error('Unknown Error fetching data');
  }
};

export const postSingleScore = async ({ user, score }) => {
  const url = `${ENDPOINT}/games/${GAME_ID}/scores`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
    if (!response.ok) {
      throw new Error(
        `Error posting data: Status code ${response.status} returned`,
      );
    }
    const data = await response.json();
    return { success: data.result === 'Leaderboard score created correctly.' };
  } catch (error) {
    throw new Error('Unknown Error fetching data');
  }
};
