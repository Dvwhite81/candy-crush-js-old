import { createCandyPiece } from './piece-helpers';

const updateScore = (score) => (document.querySelector('#score-display').textContent = score);

const convertGridToBoard = (grid) => {
  console.log('convertGridToBoard');
  clearBoard();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const gridCell = grid[i][j];
      const coords = [i, j];
      const boardSquare = document.querySelector(`[coords="${coords}"]`);
      const candyImg = createCandyPiece(gridCell);
      boardSquare.append(candyImg);
    }
  }
};

const clearBoard = () => {
  const squares = document.querySelectorAll('.square');
  for (const square of squares) {
    emptyBoardSquare(square);
  }
};

const emptyBoardSquare = (square) => {
  const { children } = square;
  for (const child of children) {
    child.remove();
  }
};

const addMatchClass = (coords) => {
  const square = getSquareFromCoords(coords);
  square.classList.add('match');
};

const removeMatchClass = (coords) => {
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
  return document.querySelector(`#square-${i}-${j}`);
};

const checkForMarkedSquare = (coords) => {
  console.log('checkForMarkedSquare coords:', coords);
  const square = getSquareFromCoords(coords);
  if (square.classList.contains('special')) {
    return { coords, square };
  }
  return false;
};

const markSquare = (coords, matchDirections) => {
  const square = getSquareFromCoords(coords);
  square.classList.add('special');
  square.classList.add(matchDirections);
};

export {
  addMatchClass,
  checkForMarkedSquare,
  convertGridToBoard,
  getCandyColor,
  getCandyFromSquare,
  getCoordsFromSquare,
  getSquareFromCoords,
  markSquare,
  removeMatchClass,
  updateScore
};
