import { convertGridToBoard, updateScore } from './dom-helpers';
import { getRandomGrid } from './grid-helpers';
import { getGridMatches } from './match-helpers';

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
  const matches = getGridMatches(grid);
  if (matches.length > 0) {
    // deal with matches
    console.log('Has Matches');
  }
};

export { gameSetup };
