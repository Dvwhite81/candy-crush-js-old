import { createCandyPiece } from './piece-helpers';

const updateScore = (score) => (document.querySelector('#score-display').textContent = score);

const convertGridToBoard = (grid) => {
  console.log('convertGridToBoard');
  clearBoard();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const gridCell = grid[i][j];
      const coords = [i, j];
      const boardCell = document.querySelector(`[coords="${coords}"]`);
      const candyImg = createCandyPiece(gridCell);
      boardCell.append(candyImg);
    }
  }
};

const clearBoard = () => {
  console.log('clearBoard');
  const cells = document.querySelectorAll('.cell');
  for (const cell of cells) {
    emptyBoardCell(cell);
  }
};

const emptyBoardCell = (cell) => {
  const { children } = cell;
  for (const child of children) {
    child.remove();
  }
};

const addMatchClass = (coords) => {
  console.log('addMatchClass coords:', coords);
  const square = getSquareFromCoords(coords);
  square.classList.add('match');
};

const removeMatchClass = (coords) => {
  console.log('removeMatchClass coords:', coords);
  const square = getSquareFromCoords(coords);
  square.classList.remove('match');
};

const getCandyColor = (target) => {
  return target.classList[1].split('-')[1];
};

const getCandyFromSquare = (square) => {
  return square.children[0];
};

const getCoordsFromSquare = (square) => {
  const i = Number.parseInt(square.id.split('-')[1], 10);
  const j = Number.parseInt(square.id.split('-')[2], 10);
  return [i, j];
};

const getSquareFromCoords = (coords) => {
  const [i, j] = coords;
  return document.querySelector(`#cell-${i}-${j}`);
};

export {
  addMatchClass,
  convertGridToBoard,
  getCandyColor,
  getCandyFromSquare,
  getCoordsFromSquare,
  getSquareFromCoords,
  removeMatchClass,
  updateScore
};
