import Phaser, { Scene } from 'phaser';

class PreloadScene extends Scene {
  constructor() {
    super('preload'); // key: preload
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
    this.load.image('spark', 'assets/particle.png');
  }

  create() {
    const logo = this.add.image(400, 300, 'logo');
    logo.setDepth(99);
    this.input.on('pointerdown', () => this.scene.start('game'));
    this.add.text(100, 500, 'Touch Anywhere to Begin', { fontSize: '40px', fill: '#fff' });

    const particles = this.add.particles('spark');

    const emitter = particles.createEmitter();

    emitter.setPosition(400, 300);
    emitter.setSpeed(200);
    emitter.setBlendMode(Phaser.BlendModes.ADD);
  }
}

export default PreloadScene;
