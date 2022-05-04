controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
let enemy_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 4 4 8 8 8 . . 
    . . . . . . . . 8 8 4 8 8 8 . . 
    . . . . . . 8 8 8 8 4 4 . . . . 
    . . . . 8 8 8 4 4 4 4 4 . . . . 
    . 8 8 8 8 4 4 4 4 4 4 4 . . . . 
    4 8 4 4 4 8 8 8 8 8 8 8 . . . . 
    4 8 4 4 4 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 4 4 4 4 4 4 4 . . . . 
    . . . . 8 8 8 4 4 4 4 4 . . . . 
    . . . . . . 8 8 8 8 4 4 . . . . 
    . . . . . . . . 8 8 4 8 8 8 . . 
    . . . . . . . . . 4 4 8 8 8 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemy_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 5 5 5 5 . . . 
        . . . . . . . . . 5 5 5 5 . . . 
        . . . . . . . . . 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 2 2 2 5 5 5 . . . . . 
        . . 5 5 2 2 5 5 5 5 5 . . . . . 
        . . 5 2 2 2 5 5 5 5 5 . . . . . 
        . . 5 2 2 2 5 5 5 2 5 5 . . . . 
        . . 5 2 2 2 2 5 2 2 2 5 . . . . 
        . . 5 2 2 2 2 2 5 2 5 5 . . . . 
        . . 5 2 2 2 2 2 5 5 5 . . . . . 
        . . 5 5 5 2 2 2 2 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . . . 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy_ship.x = scene.screenWidth()
    enemy_ship.vx = -15
    enemy_ship.y = randint(10, scene.screenHeight() - 10)
})
