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

export { getRandomCell, getRandomGrid };
