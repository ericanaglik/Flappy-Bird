import { Scene } from 'phaser'

class PreloadScene extends Scene {

    constructor() {
        super('preload') // key: preload
    }

    preload() {
        this.load.image('logo', 'assets/logo.png')
        
    }

    create() {
        this.add.image(400, 300, 'logo');
        this.input.on('pointerdown', () => this.scene.start('game'));
        this.add.text(100, 500, 'Touch Anywhere to Begin', { fontSize: '40px', fill: '#fff' });
    }
}

export default PreloadScene