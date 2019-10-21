

export default class InputHandler {
    constructor(player) {
        this.time = 0;
        this.jumpPressed = false

        document.addEventListener("keydown", event => {
            // alert(event.keyCode)
            switch(event.keyCode){
                case 37: player.moveLeft(); break; // links
                case 39: player.moveRight(); break; // rechts
                case 32: // space
                    if(this.time === 0 && !player.jumpng){
                        this.time = new Date().getTime();
                    }
                    this.jumpPressed = true
                    this.startJump(player)
                    break;
            }
        })
        document.addEventListener("keyup", event => {
            switch(event.keyCode){
                case 37: // links
                    if (player.speed < 0) player.stop();
                    break
                case 39: // rechts
                    if (player.speed > 0) player.stop(); 
                    break;
                case 32: // space
                    player.jump(Math.floor((new Date().getTime() - this.time)/10)); 
                    this.time = 0
                    this.jumpPressed = false
                    break;
            }
        })


    }

    startJump(player) {
        
        if(Math.floor((new Date().getTime() - this.time)/10) >= player.maxJumpSpeed && this.jumpPressed) {
            player.jump(Math.floor((new Date().getTime() - this.time)/10)); 
            this.time = 0
        }
        if(this.jumpPressed) setTimeout(() => this.startJump(player), 10)
    }

}