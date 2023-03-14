const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/o1xTTMw7TrSHfyqjWNz7/scores/';

const getScores = async () => {
  const dataStream = await fetch(`${url}`);
  const dataResponse = await dataStream.json();
  return dataResponse;
};

export default getScores;