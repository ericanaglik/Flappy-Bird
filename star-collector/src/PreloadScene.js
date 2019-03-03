import { Scene } from 'phaser'

class PreloadScene extends Scene {

    constructor() {
        super('preload')
    }

    preload() {
        this.load.image('logo', 'assests/logo.png')
        
    }

    create() {
        this.add.image(400, 300, 'logo');
    }
}