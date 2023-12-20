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

const getPieceColor = (cell) => {
  switch (cell) {
    case 'B' || 'blue-h' || 'blue-v' || 'blue-w': {
      return 'blue';
    }
    case 'G' || 'green-h' || 'green-v' || 'green-w': {
      return 'green';
    }
    case 'O' || 'orange-h' || 'orange-v' || 'orange-w': {
      return 'orange';
    }
    case 'P' || 'purple-h' || 'purple-v' || 'purple-w': {
      return 'purple';
    }
    case 'R' || 'red-h' || 'red-v' || 'red-w': {
      return 'red';
    }
    case 'Y' || 'yellow-h' || 'yellow-v' || 'yellow-w': {
      return 'yellow';
    }
    default: {
      return;
    }
  }
};

const getPieceSrc = (cell) => {
  switch (cell) {
    case 'B': {
      return Blue;
    }
    case 'G': {
      return Green;
    }
    case 'O': {
      return Orange;
    }
    case 'P': {
      return Purple;
    }
    case 'R': {
      return Red;
    }
    case 'Y': {
      return Yellow;
    }
    case 'blue-h': {
      return BlueH;
    }
    case 'blue-v': {
      return BlueV;
    }
    case 'blue-w': {
      return BlueW;
    }
    case 'green-h': {
      return GreenH;
    }
    case 'green-v': {
      return GreenV;
    }
    case 'green-w': {
      return GreenW;
    }
    case 'orange-h': {
      return OrangeH;
    }
    case 'orange-v': {
      return OrangeV;
    }
    case 'orange-w': {
      return OrangeW;
    }
    case 'purple-h': {
      return PurpleH;
    }
    case 'purple-v': {
      return PurpleV;
    }
    case 'purple-w': {
      return PurpleW;
    }
    case 'red-h': {
      return RedH;
    }
    case 'red-v': {
      return RedV;
    }
    case 'red-w': {
      return RedW;
    }
    case 'yellow-h': {
      return YellowH;
    }
    case 'yellow-v': {
      return YellowV;
    }
    case 'yellow-w': {
      return YellowW;
    }
    case 'bomb': {
      return Bomb;
    }
    default: {
      return;
    }
  }
};

const createCandyPiece = (cell) => {
  const color = getPieceColor(cell);
  const src = getPieceSrc(cell);
  return buildElement('img', { className: `candy candy-${color}`, src: src, alt: `candy-${color}` });
};

export { createCandyPiece, getPieceColor, getPieceSrc, pieces };
