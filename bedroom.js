class Bedroom extends Phaser.Scene {


    constructor() {
        super({key: "Example1"})
    }

    preload() {
        this.load.image('gameTiles1', 'assets/aye_kitchen.png');
        this.load.image('gameTiles2', 'assets/aye_tile_c.png');
        this.load.image('gameTiles3', 'assets/interior.png');
        this.load.image('gameTiles4', 'assets/tiles.png');
        this.load.image('gameTiles5', 'assets/tv.png');
        this.load.tilemapTiledJSON('bedroom', 'assets/bma-map.json');
        this.load.spritesheet('player1',
            'assets/playerSprite.png',
            { frameWidth: 32, frameHeight: 36 }
        );


    }


    create() {
        this.map = this.add.tilemap('bedroom');
        var tileset1 = this.map.addTilesetImage('int3', 'gameTiles1');
        var tileset2 = this.map.addTilesetImage('interieor2', 'gameTiles2');
        var tileset3 = this.map.addTilesetImage('interior', 'gameTiles3');
        var tileset4 = this.map.addTilesetImage('BMA-Game', 'gameTiles4');
        this.bottomLayer = this.map.createStaticLayer('bottomLayer', [tileset4,tileset2, tileset3, tileset1]);
        this.middleLayer = this.map.createStaticLayer('middleLayer', [tileset4, tileset2, tileset3, tileset1]);
        this.topLayer = this.map.createStaticLayer('topLayer', [tileset4, tileset2, tileset3, tileset1]);
        this.topLayer.setCollision(259);

        // Character
        this.player = this.physics.add.sprite(325, 325, "player1", "assets/playerSprite.png");
        const spawnPoint = this.map.findObject("Objects", obj => obj.name === "Spawn Point");
        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "player1", "assets/playerSprite.png");

        // has to be set in Tiled
        this.topLayer$.setCollisionByProperty({ collides: true });

    }

    update(){

    }

}