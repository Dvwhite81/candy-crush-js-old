import { addMatchClass, checkForMarkedSquare, removeMatchClass } from './dom-helpers';
import { clearCell, fillEmptyCell } from './grid-helpers';

const getGridMatches = (grid) => {
  const rowMatches = [];
  const columnMatches = [];

  let i = 0;
  while (i < grid.length) {
    const matches = checkRows(grid, i);
    if (matches.length > 0) {
      rowMatches.push({ row: i, columns: matches });
    }
    i++;
  }

  let j = 0;
  while (j < grid[0].length) {
    const matches = checkColumns(grid, j);
    if (matches.length > 0) {
      columnMatches.push({ column: j, rows: matches });
    }
    j++;
  }

  return { rowMatches, columnMatches };
};

const checkRows = (grid, i) => {
  const row = grid[i];
  const matches = getArrMatches(row);
  return matches.length > 0 ? matches : [];
};

const checkColumns = (grid, j) => {
  const column = getColumn(grid, j);
  const matches = getArrMatches(column);
  return matches.length > 0 ? matches : [];
};

const getArrMatches = (arr) => {
  const arrMatches = [];

  const { length } = arr;
  let j = 0;
  // Might need < length instead of <= length
  while (j + 2 <= length) {
    const [a, b, c] = [j, j + 1, j + 2];
    const [one, two, three] = [arr[a], arr[b], arr[c]];
    if (isAMatch(one, two, three)) {
      const currentMatch = [a, b, c];
      let next = j + 3;
      while (next < length && arr[next] === one) {
        currentMatch.push(next);
        next++;
      }
      arrMatches.push(currentMatch);
      j = next;
    }
    j++;
  }
  return arrMatches;
};

const isAMatch = (first, second, third) => {
  return first === second && second === third;
};

const getColumn = (grid, j) => {
  var result = Array.from({ length: grid.length });
  for (const [i, element] of grid.entries()) {
    result[i] = element[j];
  }
  return result;
};

const removeMatches = (matches, grid, isRow, time) => {
  if (matches.length === 0) {
    return;
  }
  if (isRow) {
    removeRowMatches(matches, grid, isRow, time);
  } else {
    removeColumnMatches(matches, grid, isRow, time);
  }
};

const removeRowMatches = (matches, grid, isRow, time) => {
  for (const match of matches) {
    const { row, columns } = match;
    const { length } = columns[0];

    for (const column of columns[0]) {
      const coords = [row, column];
      replaceMatchedCells(match, length, coords, grid, isRow, time);
    }
  }
};

const removeColumnMatches = (matches, grid, isRow, time) => {
  for (const match of matches) {
    const { column, rows } = match;
    const { length } = rows[0];

    for (const row of rows[0]) {
      const coords = [row, column];
      replaceMatchedCells(match, length, coords, grid, isRow, time);
    }
  }
};

const replaceMatchedCells = (match, length, coords, grid, isRow, time) => {
  addMatchClass(coords);

  checkForSpecials(match, coords, length, isRow);

  setTimeout(() => {
    clearCell(coords, grid);
    fillEmptyCell(coords, grid);
    removeMatchClass(coords);
  }, time);
};

const checkForSpecials = (match, coords, length, isRow) => {
  // If length is 5 and in a row or column - BOMB
  // 5 in T or L - WRAPPED
  // 4 in row - VERTICAL STRIPE
  // 4 in col - HORIZONTAL STRIPE
  if (!checkForMarkedSquare(coords)) {
    handleMarkingSquares(match, coords, length, isRow);
  }
};

const handleMarkingSquares = (match, coords, length, isRow) => {
  console.log('handleMarkingSquares match:', match);
  console.log('handleMarkingSquares coords:', coords);
  console.log('handleMarkingSquares length:', length);
  console.log('handleMarkingSquares isRow:', isRow);
};

export { getGridMatches, removeMatches };
