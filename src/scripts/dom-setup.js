import Logo1 from '../assets/images/logo-1.png';
// import Logo2 from '../assets/images/logo-2.png';

const domSetup = () => {
  const container = document.querySelector('#container');
  const header = buildHeader();
  const board = buildBoard();
  container.append(header, board);
};

const buildElement = (type, args) => {
  const element = document.createElement(type);

  for (const att in args) {
    element[att] = args[att];
  }
  return element;
};

const buildHeader = () => {
  const headerContainer = buildElement('div', { id: 'header-container' });

  const scoreContainer = buildElement('div', { id: 'score-container' });
  const scoreTitle = buildElement('p', { id: 'score-title', textContent: 'SCORE' });
  const scoreDisplay = buildElement('p', { id: 'score-display' });
  scoreContainer.append(scoreTitle, scoreDisplay);

  const logo1 = buildElement('img', { id: 'logo-1', src: Logo1, className: 'logo', alt: 'logo-1' });
  // const logo2 = buildElement('img', { id: 'logo-2', src: Logo2, className: 'logo', alt: 'logo-2' });

  headerContainer.append(logo1, scoreContainer);

  return headerContainer;
};

const buildBoard = () => {
  const board = buildElement('div', { id: 'board' });
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const coords = [i, j];
      const id = `square-${i}-${j}`;
      const square = buildElement('div', { id: id, className: 'square' });
      square.setAttribute('coords', coords);
      board.append(square);
    }
  }
  return board;
};

export { buildElement, domSetup };
