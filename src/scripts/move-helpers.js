import { getAdjCoords } from './coords-helpers';
import { getCoordsFromSquare, getSquareFromCoords } from './dom-helpers';
import { makesAMatch } from './match-helpers';

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

const coordsOnBoard = (coords) => coords.every((num) => inValidRange(num));

const inValidRange = (num) => num >= 0 && num <= 7;

export { getCoordsFromE, getValidMoves };
