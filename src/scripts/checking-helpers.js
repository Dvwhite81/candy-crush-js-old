import { getDownCoords, getLeftCoords, getRightCoords, getUpCoords } from './coords-helpers';
import { getCoordsFromSquare, getSquareFromCoords } from './dom-helpers';
import { colorMatches } from './move-helpers';

const checkAllDirections = (color, coords) => {
  let isMatch = false;

  if (
    checkTwoLeft(color, coords) ||
    checkTwoRight(color, coords) ||
    checkTwoUp(color, coords) ||
    checkTwoDown(color, coords) ||
    checkLeftAndRight(color, coords) ||
    checkUpAndDown(color, coords)
  ) {
    isMatch = true;
  }
  return isMatch;
};

const getMatchDirections = (color, coords) => {
  const matchDirections = [];

  if (checkTwoLeft(color, coords)) matchDirections.push('row-left');
  if (checkTwoRight(color, coords)) matchDirections.push('row-right');
  if (checkTwoUp(color, coords)) matchDirections.push('column-up');
  if (checkTwoDown(color, coords)) matchDirections.push('column-down');
  if (checkLeftAndRight(color, coords)) matchDirections.push('row-middle');
  if (checkUpAndDown(color, coords)) matchDirections.push('column-middle');

  return matchDirections.length > 0 ? matchDirections : false;
};

const checkTwoLeft = (color, coords) => {
  if (coords[1] < 2) {
    return false;
  }
  const oneLeftSquare = getSquareFromCoords(getLeftCoords(coords));
  const twoLeftSquare = getSquareFromCoords(getLeftCoords(getCoordsFromSquare(oneLeftSquare)));
  return colorMatches(color, oneLeftSquare) && colorMatches(color, twoLeftSquare);
};

const checkLeftAndRight = (color, coords) => {
  return checkLeft(color, coords) && checkRight(color, coords);
};

const checkLeft = (color, coords) => {
  if (coords[1] < 1) {
    return false;
  }
  const leftSquare = getSquareFromCoords(getLeftCoords(coords));
  return colorMatches(color, leftSquare);
};

const checkTwoRight = (color, coords) => {
  if (coords[1] > 5) {
    return false;
  }
  const oneRightSquare = getSquareFromCoords(getRightCoords(coords));
  const twoRightSquare = getSquareFromCoords(getRightCoords(getCoordsFromSquare(oneRightSquare)));
  return colorMatches(color, oneRightSquare) && colorMatches(color, twoRightSquare);
};

const checkRight = (color, coords) => {
  if (coords[1] > 6) {
    return false;
  }
  const rightSquare = getSquareFromCoords(getRightCoords(coords));
  return colorMatches(color, rightSquare);
};

const checkUp = (color, coords) => {
  if (coords[0] < 1) {
    return false;
  }
  const upSquare = getSquareFromCoords(getUpCoords(coords));
  return colorMatches(color, upSquare);
};

const checkTwoUp = (color, coords) => {
  if (coords[0] < 2) {
    return false;
  }
  const oneUpSquare = getSquareFromCoords(getUpCoords(coords));
  const twoUpSquare = getSquareFromCoords(getUpCoords(getCoordsFromSquare(oneUpSquare)));
  return colorMatches(color, oneUpSquare) && colorMatches(color, twoUpSquare);
};

const checkUpAndDown = (color, coords) => {
  return checkUp(color, coords) && checkDown(color, coords);
};

const checkDown = (color, coords) => {
  if (coords[0] > 6) {
    return false;
  }
  const downSquare = getSquareFromCoords(getDownCoords(coords));
  return colorMatches(color, downSquare);
};

const checkTwoDown = (color, coords) => {
  if (coords[0] > 5) {
    return false;
  }
  const oneDownSquare = getSquareFromCoords(getDownCoords(coords));
  const twoDownSquare = getSquareFromCoords(getDownCoords(getCoordsFromSquare(oneDownSquare)));
  return colorMatches(color, oneDownSquare) && colorMatches(color, twoDownSquare);
};

const coordsOnBoard = (coords) => coords.every((num) => inValidRange(num));

const inValidRange = (num) => num >= 0 && num <= 7;

export {
  checkAllDirections,
  checkDown,
  checkLeft,
  checkLeftAndRight,
  checkRight,
  checkTwoDown,
  checkTwoLeft,
  checkTwoRight,
  checkTwoUp,
  checkUp,
  checkUpAndDown,
  coordsOnBoard,
  getMatchDirections
};
