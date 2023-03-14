import './style.css';
import getScores from './modules/getScores.js';
import submitScore from './modules/submitScores.js';
// interface.js
class UserInterface {
    listScores = document.querySelector('#board');

    nameInput = document.getElementById('name');

    scoreInput = document.getElementById('score');

  clearInputs = () => {
    this.nameInput.value = '';
    this.scoreInput.value = '';
  };

  renderScores = (array) => {
    this.listScores.innerHTML = '';
    array.forEach((element) => {
      const scoreElement = document.createElement('li');
      scoreElement.textContent = `${element.user}: ${element.score}`;
      this.listScores.appendChild(scoreElement);
    });
  };
}

// index.js
const submitButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

let ui = '';

window.onload = async () => {
  ui = new UserInterface();
  const scores = await getScores();
  ui.renderScores(await scores.result);
};

refreshButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const scores = await getScores();
  ui.renderScores(await scores.result);
});

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  if (nameInput.value === '' || scoreInput.value === '') {
    return;
  }
  await submitScore(nameInput.value, scoreInput.value);
  ui.clearInputs();
});
