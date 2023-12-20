/* eslint-disable sonarjs/no-duplicated-branches */
import {
  checkAllDirections,
  checkLeftAndRight,
  checkTwoDown,
  checkTwoLeft,
  checkTwoRight,
  checkTwoUp,
  checkUpAndDown
} from './checking-helpers';
import { getAdjCoords } from './coords-helpers';
import { getCandyColor, getCandyFromSquare, getCoordsFromSquare, getSquareFromCoords } from './dom-helpers';

const getCoordsFromE = (e) => {
  const square = e.target.parentElement;
  return getCoordsFromSquare(square);
};

const getValidMoves = (color, coords) => {
  const validMoves = [];
  const adjSquares = getAdjSquares(coords);
  for (const squareObj of adjSquares) {
    if (makesAMatch(color, squareObj, coords)) {
      validMoves.push(squareObj);
    }
  }
  return validMoves;
};

const getAdjSquares = (coords) => {
  const squares = [];
  const adjCoords = getAdjCoords(coords);

  for (const coordObj of adjCoords) {
    const square = getSquareFromCoords(coordObj.coords);
    const squareObj = { direction: coordObj.direction, square: square };

    if (coordsOnBoard(coordObj.coords)) {
      squares.push(squareObj);
    }
  }
  return squares;
};

const colorMatches = (color, square) => {
  const candy = getCandyFromSquare(square);
  const candyColor = getCandyColor(candy);
  return color === candyColor;
};

const makesAMatch = (color, squareObj, coords) => {
  const { direction, square } = squareObj;
  const squareCoords = getCoordsFromSquare(square);
  const squareCandy = getCandyFromSquare(square);

  return checkAdjForMatches(color, squareCoords, direction) || checkForOppositeMatches(squareCandy, coords);
};

const checkAdjForMatches = (color, coords, direction) => {
  let isMatch = false;
  // const squareToLeft = getSquareFromCoords(getLeftCoords());
  // const squareToRight = getSquareFromCoords(getRightCoords());
  // const squareAbove = getSquareFromCoords(getUpCoords());
  // const squareBelow = getSquareFromCoords(getDownCoords());

  if (
    direction === 'left' &&
    (checkTwoLeft(color, coords) ||
      checkTwoUp(color, coords) ||
      checkTwoDown(color, coords) ||
      checkUpAndDown(color, coords))
  ) {
    isMatch = true;
  } else if (
    direction === 'right' &&
    (checkTwoRight(color, coords) ||
      checkTwoUp(color, coords) ||
      checkTwoDown(color, coords) ||
      checkUpAndDown(color, coords))
  ) {
    isMatch = true;
  } else if (
    direction === 'up' &&
    (checkTwoLeft(color, coords) ||
      checkTwoRight(color, coords) ||
      checkLeftAndRight(color, coords) ||
      checkTwoUp(color, coords))
  ) {
    isMatch = true;
  } else if (
    direction === 'down' &&
    (checkTwoLeft(color, coords) ||
      checkTwoRight(color, coords) ||
      checkLeftAndRight(color, coords) ||
      checkTwoDown(color, coords))
  ) {
    isMatch = true;
  }
  return isMatch;
};

// If the moving piece doesn't make a match,
// but the piece that will switch does make a match
const checkForOppositeMatches = (squareCandy, originalCoords) => {
  const color = getCandyColor(squareCandy);
  return checkAllDirections(color, originalCoords);
};

const coordsOnBoard = (coords) => coords.every((num) => inValidRange(num));

const inValidRange = (num) => num >= 0 && num <= 7;

export { colorMatches, getCoordsFromE, getValidMoves };
