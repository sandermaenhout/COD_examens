export default class Preload extends Phaser.State {
  preload() {
    //images
    this.load.image(`background`, `assets/background.jpg`);

    //Json
    this.load.atlasJSONHash(`hud`, `assets/hud.png`, `assets/hud.json`);
    this.load.atlasJSONHash(`components`, `assets/components.png`, `assets/components.json`);
    this.load.atlasJSONHash(`ninja`, `assets/ninja.png`, `assets/ninja.json`);
    this.load.atlasJSONHash(`bird`, `assets/bird.png`, `assets/bird.json`);

    //sounds
    this.load.audio(`coin`, `assets/coin.ogg`);
    this.load.audio(`backgroundMusic`, `assets/bg-music.mp3`);

  }

  create() {
    this.state.start(`Game`);
  }
}
