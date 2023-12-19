const getAdjCoords = (coords) => {
  const left = getLeftCoords(coords);
  const right = getRightCoords(coords);
  const up = getUpCoords(coords);
  const down = getDownCoords(coords);
  return [
    { direction: 'left', coords: left },
    { direction: 'right', coords: right },
    { direction: 'up', coords: up },
    { direction: 'down', coords: down }
  ];
};

const getLeftCoords = ([i, j]) => {
  return [i, j - 1];
};

const getRightCoords = ([i, j]) => {
  return [i, j + 1];
};

const getUpCoords = ([i, j]) => {
  return [i - 1, j];
};

const getDownCoords = ([i, j]) => {
  return [i + 1, j];
};

export { getAdjCoords, getDownCoords, getLeftCoords, getRightCoords, getUpCoords };
