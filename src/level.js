import Brick from "./brick";
import { detectCollision } from "./collisionDetection";

export default class Level {
    constructor(level){
        this.level = level
    }

    draw(ctx){
        this.level.forEach(layer => {
            layer.forEach(brick=> {
                if(brick)
                brick.draw(ctx)
            })
        });
    }
    update(ctx){
        this.level.forEach(layer => {
            layer.forEach(brick=> {
                if(brick) brick.update(ctx)
            })
        });
    }
    detectCollisionWithPlayer(player){
        let out = false
        for (let i = 0; i < this.level.length; i++) {
            const layer = this.level[i];
            for (let j = 0; j < layer.length; j++) {
                const brick = layer[j];
                if(brick) out = detectCollision(player, brick)
                if(out) {
                    console.log("Brick")
                    console.log(brick.position)
                    console.log("Player")
                    console.log(player.position)
                    return out
                }
                    
            }        
        }
        return out
    }




}

export class LevelFactory {
    constructor(gameHeight){
        this.gameHeight = gameHeight
    }
    constructLevels(){
        const levels = 
        [
            [
                [0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1],
                [0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1],
                [0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] // boden
            ], 
            [
                [0,0,0,0,1,1,0,0,0,1],
                [0,0,1,0,1,1,0,1,0,1],
                [0,0,1,0,1,1,0,1,0,1],
            ]
        ]
        const levelsOut = []
        levels.forEach(level => {
            levelsOut.push(this.constructLevel(level))
        });
        return levelsOut;
    }
    constructLevel(level){
        let bricksOut = []
        let row = level.length-1
        for (let i = 0; i < level.length; i++) {
            bricksOut.push([])
            for (let j = 0; j < level[i].length; j++) {
                if(level[i][j]){
                    bricksOut[i].push(new Brick({x: j * 50, y: this.gameHeight - (row * Brick.BRICK_SIZE)-10}))
                }else{
                    bricksOut[i].push(undefined)
                }
            }
            row--;
        }
        
        return new Level(bricksOut)
    }

}