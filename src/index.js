import Player from "./player";
import InputHandler from "./inputHandler";


let canvas = document.getElementById('game')
let cxt = canvas.getContext("2d");


const GAME_WIDTH = 1000
const GAME_HEIGHT = 800


let player = new Player(GAME_WIDTH, GAME_HEIGHT)
new InputHandler(player);

let lastTime = 0


function gameLoop(timestamp) {
    
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp; 
    
    cxt.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT)

    player.update(deltaTime)

    player.draw(cxt)


    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)