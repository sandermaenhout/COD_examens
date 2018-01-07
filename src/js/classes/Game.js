import GameState from './states/GameState.js';
import Preload from './states/Preload';
import Boot from './states/Boot';
import Menu from './states/Menu';
import Highscores from './states/Highscores';

export default class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, `content`);
    this.state.add(`Boot`, Boot);
    this.state.add(`Preload`, Preload);
    this.state.add(`Menu`, Menu);
    this.state.add(`Highscores`, Highscores);
    this.state.add(`Game`, GameState);

    this.state.start(`Boot`);
  }
}
