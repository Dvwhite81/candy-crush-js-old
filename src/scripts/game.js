import { convertGridToBoard, updateScore } from './dom-helpers';
import { getRandomGrid } from './grid-helpers';
import { getGridMatches, removeColumnMatches, removeRowMatches } from './match-helpers';

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
  handleMatches();
};

const handleMatches = () => {
  const { rowMatches, columnMatches } = getGridMatches(grid);

  if (/*rowMatches.length === 0 && */ columnMatches.length === 0) {
    console.log('NO MATCHES');
    startMove();
  } else {
    /*
    if (rowMatches.length > 0) {
      removeRowMatches(rowMatches, grid);
    }
    */

    if (columnMatches.length > 0) {
      removeColumnMatches(columnMatches, grid);
    }

    console.log('grid after removing matches:', grid);
    setTimeout(() => {
      convertGridToBoard(grid);
      handleMatches();
    }, 2000);
  }
};

const startMove = () => {
  console.log('START MOVE');
};

export { gameSetup };
