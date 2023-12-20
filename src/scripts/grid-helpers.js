import { getMatchDirections } from './checking-helpers';
import { markSquare } from './dom-helpers';
import { getGridMatches } from './match-helpers';
import { getPieceColor, pieces } from './piece-helpers';

const getRandomCell = () => {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
};

const getRandomGrid = () => {
  const grid = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const cell = getRandomCell();
      row.push(cell);
    }
    grid.push(row);
  }

  return isValidStartingGrid(grid) ? grid : getRandomGrid();
};

const isValidStartingGrid = (grid) => {
  const { rowMatches, columnMatches } = getGridMatches(grid);
  return rowMatches.length === 0 && columnMatches.length === 0;
};

const clearCell = (coords, grid) => {
  const [i, j] = coords;
  grid[i][j] = '';
};

const fillEmptyCell = (coords, grid) => {
  let [i, j] = coords;
  while (i > 0) {
    const cellAbove = grid[i - 1][j];
    if (cellAbove === '') {
      const { nextFilled } = getEmptyColumnCells(grid, i, j);
      if (nextFilled) {
        grid[i][j] = nextFilled;
      }
    } else {
      grid[i][j] = grid[i - 1][j];
    }
    checkForNewMatch(i, j, grid);
    i--;
  }
  const newCandy = getRandomCell();
  grid[i][j] = newCandy;
};

const getEmptyColumnCells = (grid, i, j) => {
  const emptyCells = [];
  let nextFilled;

  let k = i - 1;
  while (grid[k][j] === '') {
    emptyCells.push([k, j]);
    k--;
    if (k < 0) {
      nextFilled = false;
    }
  }
  nextFilled = grid[k][j];
  return { nextFilled, emptyCells };
};

const checkForNewMatch = (i, j, grid) => {
  const gridCell = grid[i][j];
  const color = getPieceColor(gridCell);
  const coords = [i, j];

  const matchDirections = getMatchDirections(color, coords);
  console.log('checkForNewMatch matchDirections:', matchDirections);
  if (matchDirections) {
    markSquare(coords, matchDirections);
  }
};

export { clearCell, fillEmptyCell, getRandomCell, getRandomGrid };
