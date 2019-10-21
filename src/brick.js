export default class Brick {
    static BRICK_SIZE = 50;
    
    constructor(position){
        this.position = {...position}
        this.width = Brick.BRICK_SIZE
        this.height = Brick.BRICK_SIZE
        
    }

    
    update() {
        // evtl für player geht aus dem Bild zu modifizieren
    }

    draw(ctx) {
        ctx.fillStyle = '#f00'

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }


}
