import { addMatchClass, removeMatchClass } from './dom-helpers';
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

const removeRowMatches = (matches, grid) => {
  console.log('REMOVE ROW MATCHES:', matches);
  for (const match of matches) {
    const { row, columns } = match;
    console.log('row:', row);
    console.log('columns:', columns);
    for (const column of columns[0]) {
      console.log('column of columns:', column);
      const coords = [row, column];
      addMatchClass(coords);
      setTimeout(() => {
        clearCell(coords, grid);
        fillEmptyCell(coords, grid);
        removeMatchClass(coords);
      }, 2000);
    }
  }
};

const removeColumnMatches = (matches, grid) => {
  console.log('REMOVE COLUMN MATCHES:', matches);
  for (const match of matches) {
    const { column, rows } = match;
    console.log('column:', column);
    console.log('rows:', rows);
    for (const row of rows[0]) {
      console.log('row of rows:', row);
      const coords = [row, column];
      addMatchClass(coords);
      setTimeout(() => {
        clearCell(coords, grid);
        if (isLastRow(row, rows[0])) {
          fillEmptyCell(coords, grid);
        }
        removeMatchClass(coords);
      }, 2000);
    }
  }
};

const isLastRow = (row, rows) => {
  return rows.indexOf(row) === rows.length - 1;
};

export { getGridMatches, removeColumnMatches, removeRowMatches };
