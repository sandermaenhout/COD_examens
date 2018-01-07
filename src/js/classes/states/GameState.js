export default class GameState extends Phaser.State {

  init() {
    this.createBackground();
    this.createPlayer();
    this.createEnemy();
  }

  createBackground() {
    this.stage.backgroundColor = `#000`;
    this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, `background`);
  }

  createPlayer(){
    this.player = this.add.sprite(150, this.world.centerY, `ninja`);
    this.player.animations.add(`walk`, Phaser.Animation.generateFrameNames(`ninja`, 0, 4, `.png`, 1), 7, true, false);
    this.player.animations.play(`walk`);
    this.player.anchor.setTo(0.5, 1);
  }

  createEnemy(){
    this.bird = this.add.sprite(300, this.world.centerY, `bird`);
    this.bird.animations.add(`fly`, Phaser.Animation.generateFrameNames(`bird`, 0, 6, `.png`, 1), 7, true, false);
    this.bird.animations.play(`fly`);
    this.bird.anchor.setTo(0.5, 1);
  }
}
