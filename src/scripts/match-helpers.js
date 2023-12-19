const getGridMatches = (grid) => {
  const allMatches = [];

  let i = 0;
  while (i < grid.length) {
    const row = grid[i];
    // Might need i, j, isRow, count
    const rowMatches = getArrMatches(row);
    if (rowMatches.length > 0) {
      // Might need an object with i, j, matches array
      allMatches.push(rowMatches);
    }
    i++;
  }

  let j = 0;
  while (j < grid[0].length) {
    const column = getColumn(grid, j);
    // Might need i, j, isRow, count
    const columnMatches = getArrMatches(column);
    if (columnMatches.length > 0) {
      // Might need an object with i, j, matches array
      allMatches.push(columnMatches);
    }
    j++;
  }
  return allMatches;
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
      // Might need an object with i, j, matches array
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

export { getGridMatches };
