// const ENDPOINT = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
// const GAME_ID = 'n4yY4NtqgXrTC1oTBtkJ';

const mockData = {
  result: [
    {
      user: 'John Doe',
      score: 42,
    },
    {
      user: 'Peter Parker',
      score: 35,
    },
    {
      user: 'Wonder Woman',
      score: 50,
    },
  ],
};

export const fetchScores = () => mockData.result;

export const postSingleScore = (score) => mockData.push(score);
