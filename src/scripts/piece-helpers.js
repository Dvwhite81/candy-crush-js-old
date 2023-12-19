import Blue from '../assets/images/blue.png';
import BlueH from '../assets/images/blue-h.png';
import BlueV from '../assets/images/blue-v.png';
import BlueW from '../assets/images/blue-w.png';
import Bomb from '../assets/images/bomb.png';
import Green from '../assets/images/green.png';
import GreenH from '../assets/images/green-h.png';
import GreenV from '../assets/images/green-v.png';
import GreenW from '../assets/images/green-w.png';
import Orange from '../assets/images/orange.png';
import OrangeH from '../assets/images/orange-h.png';
import OrangeV from '../assets/images/orange-v.png';
import OrangeW from '../assets/images/orange-w.png';
import Purple from '../assets/images/purple.png';
import PurpleH from '../assets/images/purple-h.png';
import PurpleV from '../assets/images/purple-v.png';
import PurpleW from '../assets/images/purple-w.png';
import Red from '../assets/images/red.png';
import RedH from '../assets/images/red-h.png';
import RedV from '../assets/images/red-v.png';
import RedW from '../assets/images/red-w.png';
import Yellow from '../assets/images/yellow.png';
import YellowH from '../assets/images/yellow-h.png';
import YellowV from '../assets/images/yellow-v.png';
import YellowW from '../assets/images/yellow-w.png';
import { buildElement } from './dom-setup';

const pieces = ['B', 'G', 'O', 'P', 'R', 'Y'];

const createCandyPiece = (cell) => {
  let color;
  let src;
  switch (cell) {
    case 'B': {
      color = 'blue';
      src = Blue;
      break;
    }
    case 'G': {
      color = 'green';
      src = Green;
      break;
    }
    case 'O': {
      color = 'orange';
      src = Orange;
      break;
    }
    case 'P': {
      color = 'purple';
      src = Purple;
      break;
    }
    case 'R': {
      color = 'red';
      src = Red;
      break;
    }
    case 'Y': {
      color = 'yellow';
      src = Yellow;
      break;
    }
    default: {
      break;
    }
  }

  return buildElement('img', { className: `candy candy-${color}`, src: src, alt: `candy-${color}` });
};

const createSpecialCandyPiece = (candyType) => {
  let color;
  let src;

  switch (candyType) {
    case 'blue-h': {
      color = 'blue';
      src = BlueH;
      break;
    }
    case 'blue-v': {
      color = 'blue';
      src = BlueV;
      break;
    }
    case 'blue-w': {
      color = 'blue';
      src = BlueW;
      break;
    }
    case 'green-h': {
      color = 'green';
      src = GreenH;
      break;
    }
    case 'green-v': {
      color = 'green';
      src = GreenV;
      break;
    }
    case 'green-w': {
      color = 'green';
      src = GreenW;
      break;
    }
    case 'orange-h': {
      color = 'orange';
      src = OrangeH;
      break;
    }
    case 'orange-v': {
      color = 'orange';
      src = OrangeV;
      break;
    }
    case 'orange-w': {
      color = 'orange';
      src = OrangeW;
      break;
    }
    case 'purple-h': {
      color = 'purple';
      src = PurpleH;
      break;
    }
    case 'purple-v': {
      color = 'purple';
      src = PurpleV;
      break;
    }
    case 'purple-w': {
      color = 'purple';
      src = PurpleW;
      break;
    }
    case 'red-h': {
      color = 'red';
      src = RedH;
      break;
    }
    case 'red-v': {
      color = 'red';
      src = RedV;
      break;
    }
    case 'red-w': {
      color = 'red';
      src = RedW;
      break;
    }
    case 'yellow-h': {
      color = 'yellow';
      src = YellowH;
      break;
    }
    case 'yellow-v': {
      color = 'yellow';
      src = YellowV;
      break;
    }
    case 'yellow-w': {
      color = 'yellow';
      src = YellowW;
      break;
    }
    case 'bomb': {
      color = 'bomb';
      src = Bomb;
      break;
    }
    default: {
      break;
    }
  }

  return buildElement('img', { className: `candy candy-${color}`, src: src, alt: `candy-${color}` });
};

export { createCandyPiece, createSpecialCandyPiece, pieces };
