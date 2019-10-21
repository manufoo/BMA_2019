export function detectCollision(player, brick){
    let playerBottom = player.position.y + player.height
    let playerLeft = player.position.x
    let playerRight = player.position.x + player.width
    let brickTop = brick.position.y
    let brickLeft = brick.position.x
    let brickRight = brick.position.x + brick.width


    if(playerBottom < brickTop || playerLeft > brickRight || playerRight < brickLeft) return true;
    return false;
}