export default class Preload extends Phaser.State {
  preload() {
    //images
    this.load.image(`background`, `assets/background.jpg`);

    //Json
    this.load.atlasJSONHash(`hud`, `assets/hud.png`, `assets/hud.json`);
    this.load.atlasJSONHash(`components`, `assets/components.png`, `assets/components.json`);

    //spritesheets
    this.load.spritesheet(`ninja`, `assets/ninja.png`, 128, 128, 16);

    //sounds
    this.load.audio(`coin`, `assets/coin.ogg`);
    this.load.audio(`backgroundMusic`, `assets/bg-music.mp3`);

  }

  create() {
    this.state.start(`Game`);
  }
}
