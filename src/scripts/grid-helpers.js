import { pieces } from './piece-helpers';

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

  return grid;
};

const clearCell = (coords, grid) => {
  console.log('clearCell coords:', coords);
  const [i, j] = coords;
  console.log('clearCell grid[i][j] before:', grid[i][j]);
  grid[i][j] = '';
  console.log('clearCell grid[i][j] after:', grid[i][j]);
};

const fillEmptyCell = (coords, grid) => {
  console.log('fillEmptyCell coords:', coords);
  let [i, j] = coords;
  while (i > 0) {
    console.log('fillEmptyCell [i, j]:', [i, j]);
    console.log('fillEmptyCell grid[i][j]:', grid[i][j]);
    const cellAbove = grid[i - 1][j];
    console.log('fillEmptyCell grid[i - 1][j]:', grid[i - 1][j]);
    console.log('fillEmptyCell cellAbove:', cellAbove);
    if (cellAbove === '') {
      console.log('above is empty');
      const { nextFilled, emptyCells } = getEmptyColumnCells(grid, i, j);
      console.log('next:', nextFilled);
      console.log('emptyCells:', emptyCells);
      if (nextFilled) {
        grid[i][j] = nextFilled;
      }
    } else {
      grid[i][j] = grid[i - 1][j];
    }
    i--;
  }
  const newCandy = getRandomCell();
  console.log('newCandy:', newCandy);
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

  console.log('getEmpty nextFilled:', nextFilled);
  console.log('getEmpty emptyCells:', emptyCells);
  return { nextFilled, emptyCells };
};

export { clearCell, fillEmptyCell, getRandomCell, getRandomGrid };
