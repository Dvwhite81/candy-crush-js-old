import { getCandyColor } from './dom-helpers';
import { getCoordsFromE, getValidMoves } from './move-helpers';

const addMoveListeners = () => {
  const allPieces = document.querySelectorAll('.candy');
  for (const piece of allPieces) {
    piece.draggable = true;
    piece.addEventListener('dragstart', handlePieceDrag);
    // piece.addEventListener('click', startMove);
  }
};

const handlePieceDrag = (e) => {
  const piece = e.target;
  const color = getCandyColor(piece);
  const startCoords = getCoordsFromE(e);
  const validMoves = getValidMoves(color, startCoords);
  for (const squareObj of validMoves) {
    const { square } = squareObj;
    addSquareListeners(square);
  }
};

const addSquareListeners = (square) => {
  square.addEventListener('click', movePiece);
  addDragListeners(square);
};

const removeSquareListeners = () => {
  const squares = document.querySelectorAll('.cell');
  for (const square of squares) {
    square.removeEventListener('click', movePiece);
    removeDragListeners(square);
  }
};

const addDragListeners = (square) => {
  square.addEventListener('dragenter', handleDragEnter);
  square.addEventListener('dragover', handleDragOver);
};

const removeDragListeners = (square) => {
  square.removeEventListener('dragenter', handleDragEnter);
  square.removeEventListener('dragleave', handleDragLeave);
  square.removeEventListener('drop', handleDrop);
};

const handleDragEnter = (e) => {
  e.preventDefault();
  e.target.addEventListener('dragleave', handleDragLeave);
  e.target.addEventListener('drop', handleDrop);
};

const handleDragLeave = (e) => {
  e.target.removeEventListener('drop', handleDrop);
  e.target.addEventListener('dragenter', handleDragEnter);
};

const handleDragOver = (e) => {
  e.preventDefault();
  return false;
};

const handleDrop = (e) => {
  e.preventDefault();
  removeSquareListeners();
  movePiece(e);
};

const movePiece = () => {};

const switchCandies = (square, newCandy) => {
  emptySquare(square);
  square.append(newCandy);
};

const emptySquare = (square) => {
  const { children } = square;
  for (const child of children) {
    child.remove();
  }
};

const getTargetFromE = (e) => {
  let target;
  if (e.target.nodeName === 'IMG') {
    target = e.target.parentElement;
  }
  return target;
};

export { addMoveListeners, getTargetFromE, switchCandies };
