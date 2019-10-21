import { LevelFactory } from "./level";
import Player from "./player";
import InputHandler from "./inputHandler";
import { detectCollision } from "./collisionDetection";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        
        this.player = new Player(this)
        new InputHandler(this.player);
        
        this.levels = new LevelFactory(gameHeight).constructLevels()
        
        this.currentLevel = 0

        this.gameObjects = [this.player, this.levels[this.currentLevel]]
    }

    detectCollisionWithLevel(){
        return this.levels[this.currentLevel].detectCollisionWithPlayer(this.player)
    }


    draw(ctx) {
        this.gameObjects.forEach(gameObject => {
            gameObject.draw(ctx)
        });
    }
    update(ctx) {
        this.gameObjects.forEach(gameObject => {
            gameObject.update(ctx)
        });
    }
}