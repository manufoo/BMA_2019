export default class Player {
    constructor (gameWidth, gameHeight){

        this.height = 50 
        this.width = 25

        this.speed = 0
        this.maxSpeed = 5

        this.jumpSpeed = 0;
        this.maxJumpSpeed = 15
        this.startJumpSpeed = 0;
        this.jumping = false;

        this.position = {
            x: 10,
            y: gameHeight - this.height
        }

        
    }


    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
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
        this.jumpSpeed = -this.startJumpSpeed 
        this.jumping = true
    } 

    update(deltaTime){
        if(!deltaTime) return;

        this.position.x += this.speed

        if(this.jumping){
            this.position.y += this.jumpSpeed
            this.jumpSpeed++;
            if(this.jumpSpeed > this.startJumpSpeed) this.jumping = false
        }

        if(this.position.x < 0) this.position.x = 0;


    }

}