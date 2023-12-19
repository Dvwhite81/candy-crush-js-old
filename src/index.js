import './styles/global.scss';

// Allow dist on git for vercel
import { domSetup } from './scripts/dom-setup';
import { gameSetup } from './scripts/game';

domSetup();
gameSetup();
