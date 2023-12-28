import { GameField } from './GameField.js';
import { Snake } from './Snake.js';
import { Apple } from './Apple.js';

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('app');
  const mainTitle = document.createElement('h1');
  const infoBlock = document.createElement('div');
  const recordTitle = document.createElement('h2');
  const scoreTitle = document.createElement('h2');
  const boardElement = document.createElement('div');
  const restart = document.createElement('button');

  mainTitle.classList.add('main__title', 'title');
  infoBlock.classList.add('flex');
  recordTitle.classList.add('record', 'title');
  scoreTitle.classList.add('score', 'title');
  boardElement.classList.add('board', 'out-game');
  restart.classList.add('btn', 'btn-primary', 'hidden');

  mainTitle.innerText = 'Змейка';
  recordTitle.innerText = 'Рекорд: 0';
  scoreTitle.innerText = 'Набранные очки: 0'
  restart.innerText = 'Начать заново';

  container.insertAdjacentElement('afterbegin', infoBlock);
  infoBlock.insertAdjacentElement('afterbegin', scoreTitle);
  infoBlock.insertAdjacentElement('afterbegin', recordTitle);
  container.insertAdjacentElement('afterbegin', mainTitle);
  container.appendChild(boardElement);
  infoBlock.insertAdjacentElement('afterend', restart);

  let width = 10;
  let height = width;

  const board = new GameField(width, height, boardElement, restart, scoreTitle, recordTitle);
  const snake = new Snake(board);
  const apple = new Apple(snake, board);

  board.apple = apple;
  board.snake = snake;

  const record = localStorage.getItem('record')
  if (record !== null) {
    recordTitle.textContent = `Рекорд: ${record}`
  }

});

