

export default class Player {
    constructor (game){

        this.playerLeft = document.getElementById("player_left")
        this.playerRight = document.getElementById("player_right")

        this.height = 115 
        this.width = 45

        this.game = game

        this.speed = 0
        this.maxSpeed = 75 

        this.a = 0;
        this.maxJumpSpeed = 9.81
        this.startJumpSpeed = 0;
        this.jumping = false;
        this.jumpStartTime = 0

        this.position = {
            x: 10,
            y: game.gameHeight - this.height - 20
        }

        
    }


    draw(ctx){
        if(this.speed < 0)
            ctx.drawImage(this.playerLeft, this.position.x, this.position.y, this.width, this.height)
        else
            ctx.drawImage(this.playerRight, this.position.x, this.position.y, this.width, this.height)
        
    }

    stop(){
        this.speed = 0; 
    }

    moveLeft(){
        this.speed = -this.maxSpeed
    }
    moveRight(){
        this.speed = this.maxSpeed
    }

    jump(jumpSpeed){
        if(this.jumping) return;
        if(jumpSpeed > this.maxJumpSpeed) this.startJumpSpeed = this.maxJumpSpeed
        else this.startJumpSpeed = jumpSpeed
        this.a = -this.startJumpSpeed
        this.jumping = true
        this.jumpStartTime = Math.round(new Date().getTime()) + 1000
    } 

    update(deltaTime){
        if(!deltaTime) return;

        this.position.x += this.speed / deltaTime

        if(this.jumping){
            const currentTime = Math.round(new Date().getTime())
            let lengthToAdd = Math.round(Math.pow((currentTime - this.jumpStartTime)/300, 2))
            this.position.y += (currentTime === this.jumpStartTime) ? 0 : (currentTime < this.jumpStartTime ) ? -lengthToAdd : lengthToAdd
            if(this.game.detectCollisionWithLevel()) this.jumping = false 
        }

        if(this.position.x < 0) this.position.x = 0; 


    }

}