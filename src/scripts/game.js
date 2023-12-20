import { convertGridToBoard, updateScore } from './dom-helpers';
import { getRandomGrid } from './grid-helpers';
// import { getGridMatches, removeMatches } from './match-helpers';

let score;
let grid;
// let currentPiece;
// let count;

const gameSetup = () => {
  // count = { special: 0, normal: 0 };
  score = 0;
  grid = getRandomGrid();
  updateScore(score);
  convertGridToBoard(grid);
  startMove();
};

/*
const handleMatches = () => {
  const time = 2000;
  const { rowMatches, columnMatches } = getGridMatches(grid);

  if (rowMatches.length === 0 && columnMatches.length === 0) {
    console.log('NO MATCHES');
    startMove();
  } else {
    removeMatches(rowMatches, grid, true, time);
    removeMatches(columnMatches, grid, false, time);

    setTimeout(() => {
      convertGridToBoard(grid);
      handleMatches();
    }, time);
  }
};
*/

const startMove = () => {
  console.log('START MOVE');
};

export { gameSetup };
