namespace SpriteKind {
    export const foodd = SpriteKind.create()
    export const fooddd = SpriteKind.create()
    export const key = SpriteKind.create()
    export const foood = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 f f f f f f f 9 9 9 9 9 
9 9 f f 9 6 9 9 9 9 9 f f 9 9 9 
9 f 9 9 9 6 9 9 9 9 9 6 9 f 9 9 
9 f 9 9 9 6 9 9 9 9 9 6 9 f 9 9 
f 9 9 9 9 6 9 9 9 9 9 6 9 9 f 9 
f 9 9 9 9 6 9 9 9 9 9 6 9 9 f 9 
f 9 9 9 6 6 6 9 9 9 9 6 9 9 f 9 
f 9 9 9 6 9 6 9 9 9 6 6 9 9 f 9 
f 9 9 9 9 9 9 9 9 9 6 9 9 9 f 9 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 
f 9 9 9 9 9 9 9 9 9 9 9 9 9 f 9 
9 f 9 9 9 9 9 9 9 9 9 9 9 f 9 9 
9 f 9 9 9 6 9 9 9 6 9 9 9 f 9 9 
9 9 f f 9 6 9 9 9 6 9 f f 9 9 9 
9 9 9 9 f f f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 f f f f f f f 9 9 9 9 9 
9 9 f f . . 8 . . . . f f 9 9 9 
9 f 1 1 . . 8 . . . . 8 . f 9 9 
9 f 1 1 . . 8 . . . . 8 . f 9 9 
f 1 1 . . . 8 . . . . 8 . . f 9 
f 1 . . . . 8 . . . . 8 . . f 9 
f 1 . . . . . . . . . 8 . . f 9 
f 1 . . . . . . . . . . . 8 f 9 
f 1 . . . . . . . . . . . 8 f 9 
f 1 . . . . . . . . . . . 8 8 9 
9 f 1 . . . . . . . . . 1 . f 9 
9 f 1 . . . . . . . . . 1 f 9 9 
9 f 1 1 . . . . . . 1 1 1 f 9 9 
9 9 f f 1 1 1 1 1 1 1 f f 9 9 9 
9 9 9 9 f f f f f f f 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.foood, function (sprite, otherSprite) {
    orb_4.destroy(effects.hearts, 500)
    info.startCountdown(60)
    mySprite.x += -3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    tiles.setWallAt(tiles.getTileLocation(18, 14), false)
    Key.destroy(effects.halo, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Orb.destroy(effects.hearts, 500)
    info.changeLifeBy(1)
    mySprite.x += -3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 500)
    mySprite.x += Math.randomRange(-20, 20)
    mySprite.y += Math.randomRange(-20, 20)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.foodd, function (sprite, otherSprite) {
    Orb_2.destroy(effects.hearts, 500)
    info.changeLifeBy(1)
    mySprite.x += -3
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`2000200008080808080808080808080808080808080808080808080808080808080808080c00000000000000000a0a0000000000000000000a0a0000000000000000000a080808000808080808080808000808080808080b000b0b0b0b0b000b0b0b000b080008000800000008000008000800000000000b000b0000000b000b000b000b0800080008080808080b0008000800000000000b000b0000000b000b000b000b080008000000000008000008000808080000000b000b000b0b0b000b000b000b080008080808080008000b08000a0a080000000b000b000b0a0a0a0b000b000b080000000a0a08000800000808080a080808080b000b000b0a0a000b000b000b080000000a0a0800080b000000080a0000000000000b000b00000000000a0a0b080808080808080008000b0b0008000808080800000b000000000000000a0b0b0800000000000000000000000008000800000b00000000000b0b00000a0b0b0b0800080808080808000008080808000800000b000b0b0b0b0b0000000b0b0b0b0800080909090908000008000000000800000b000b00000b0000000b0b0b0b0b080008090909090b000008000808080800000b0a0b0b0b0b000b0a0b0b0b0b0b08000809090909080000080000000b0a0a0a0b0a0b00000b000b0a0b0000000008000808000808080a00080808000b0a0a000b0a0b00000b000b000b0b0b0b0b08000000000000000000000008000b0b0b0b0b000b00000b000b00000000000b08080800000a00000000080008000000000000000b00000b000b000b0b0b000b08000008000a000a000008000b000b0b0b0b0b0b0b00000b000b000b000b000b080000000800000a0a0008000a0a0b00000b000b0b0b0b0b000b000b000b000b08000800000808080800080b0b0b0b000b0b000b0000000a0a0b000b0a0b000b08000808000000000800080000000b00000b0b0b000b000b0b0b000b0a0b000b0800080808080800080008000b0b0b0b000b0000000b000b000b000b0a00000b08000808080808000000080000000000000a0900000b000b000b000b0b0b0b0b0800000000080808080808000b0b0b000b0a0900000b000b0b0b000000000a0008080808000800000000000000000b000b0b0b0b000b0000000b000b0b0b0b0008080808000808080808080b0b0b0b000b00000b000b0b0b0b0b000b00000b000b0a0a00000000000a0a0800000000000b0a0a0b000b0b0b0b0b0b0b0b0b0b0b0b0a0a0000000000000a08000b0b0b0b0b0a0a0b000000000000000000000b000b00000000000000000008000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b000b0a00000000000000000800000000000a0a00000000000000000000000000010b0b0b0b0b0b0b0b0b0b08080808080808080808080808080808080808080808`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . 2 
2 . 2 . 2 . . . 2 . . 2 . 2 . . . . . 2 . 2 . . . 2 . 2 . 2 . 2 
2 . 2 . 2 2 2 2 2 2 . 2 . 2 . . . . . 2 . 2 . . . 2 . 2 . 2 . 2 
2 . 2 . . . . . 2 . . 2 . 2 2 2 . . . 2 . 2 . 2 2 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 . 2 . 2 2 . . . 2 . . . 2 . 2 . 2 . . . 2 . 2 . 2 
2 . . . . . 2 . 2 . . 2 2 2 . 2 2 2 2 2 . 2 . 2 . . . 2 . 2 . 2 
2 . . . . . 2 . 2 2 . . . 2 . . . . . . . 2 . 2 . . . . . . . 2 
2 2 2 2 2 2 2 . 2 . 2 2 . 2 . 2 2 2 2 . . 2 . . . . . . . . 2 2 
2 . . . . . . . . . . . . 2 . 2 . . 2 . . . . . 2 2 . . . 2 2 2 
2 . 2 2 2 2 2 2 . . 2 2 2 2 . 2 . . 2 . 2 2 2 2 2 . . . 2 2 2 2 
2 . 2 . . . . 2 . . 2 . . . . 2 . . 2 . 2 . . 2 . . . 2 2 2 2 2 
2 . 2 . . . . 2 . . 2 . 2 2 2 2 . . 2 . 2 2 2 2 . 2 . 2 2 2 2 2 
2 . 2 . . . . 2 . . 2 . . . 2 . . . 2 . 2 . . 2 . 2 . 2 . . . . 
2 . 2 2 . 2 2 2 . . 2 2 2 . 2 . . . 2 . 2 . . 2 . 2 . 2 2 2 2 2 
2 . . . . . . . . . . . 2 . 2 2 2 2 2 . 2 . . 2 . 2 . . . . . 2 
2 2 2 . . . . . . . 2 . 2 . . . . . . . 2 . . 2 . 2 . 2 2 2 . 2 
2 . . 2 . . . . . . 2 . 2 . 2 2 2 2 2 2 2 . . 2 . 2 . 2 . 2 . 2 
2 . . . 2 . . . . . 2 . . . 2 . . 2 . 2 2 2 2 2 . 2 . 2 . 2 . 2 
2 . 2 . . 2 2 2 2 . 2 2 2 2 2 . 2 2 . 2 . . . . . 2 . 2 . 2 . 2 
2 . 2 2 . . . . 2 . 2 . . . 2 . . 2 2 2 . 2 . 2 2 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 . 2 . 2 . 2 2 2 2 . 2 . . . 2 . 2 . 2 . 2 . . . 2 
2 . 2 2 2 2 2 . . . 2 . . . . . . . . . . 2 . 2 . 2 . 2 2 2 2 2 
2 . . . . 2 2 2 2 2 2 . 2 2 2 . 2 . . . . 2 . 2 2 2 . . . . . . 
2 2 2 2 . 2 . . . . . . . . 2 . 2 2 2 2 . 2 . . . 2 . 2 2 2 2 . 
2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 . . 2 . 2 2 2 2 2 . 2 . . 2 . 
2 . . . . . . . . . 2 . . . . . 2 . . 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . 2 . 2 2 2 2 2 . . 2 . . . . . . . . . . 2 . 
2 . . . . . . . . . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.builtin.oceanDepths3,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths1,sprites.builtin.oceanDepths4,sprites.builtin.coral2,sprites.builtin.coral1,sprites.builtin.oceanDepths7,sprites.builtin.oceanDepths10],
            TileScale.Sixteen
        ))
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanDepths10)
    info.startCountdown(80)
    Orb.destroy()
    Shark.destroy()
    Shark_2 = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Shark_2.follow(mySprite, 30)
    Shark_2.setPosition(100, 300)
    shark_3 = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    shark_3.setFlag(SpriteFlag.BounceOnWall, true)
    shark_3.setPosition(70, 470)
    shark_3.setVelocity(22, 22)
    shark_4 = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    shark_4.setPosition(420, 130)
    shark_4.setFlag(SpriteFlag.BounceOnWall, true)
    shark_4.setVelocity(22, 22)
    shark_5 = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    shark_5.setPosition(280, 370)
    shark_5.setFlag(SpriteFlag.BounceOnWall, true)
    shark_5.setVelocity(22, 22)
    Orb_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.foodd)
    Orb_2.setPosition(154, 487)
    Orb_3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.fooddd)
    Orb_3.setPosition(105, 200)
    orb_4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.foood)
    orb_4.setPosition(280, 166)
    Key = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f . . . . . . . . . . 
. . . f 1 1 f . . . . . . . . . 
. . f 1 5 5 5 f f f f f f f f f 
. f 1 5 f f 5 1 5 5 5 5 5 1 1 f 
. f 5 5 f f 5 5 5 5 5 5 5 5 1 f 
. . f 5 5 5 5 f f f f 5 f f 5 f 
. . . f 5 5 f . . . . f . f 5 f 
. . . . f f . . . . . . . f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    Key.setPosition(455, 290)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fooddd, function (sprite, otherSprite) {
    Orb_3.destroy(effects.hearts, 500)
    info.changeLifeBy(1)
    mySprite.x += -3
})
let Orb_3: Sprite = null
let shark_5: Sprite = null
let shark_4: Sprite = null
let shark_3: Sprite = null
let Shark_2: Sprite = null
let Orb_2: Sprite = null
let Key: Sprite = null
let orb_4: Sprite = null
let Shark: Sprite = null
let Orb: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . . . . . . . . . f f f f . 
. . . . . . . . . . . f . . f . 
. . . . 1 1 1 1 1 . . f f . f . 
. . . . 1 1 1 1 1 1 f f f f f 1 
. . . . 1 1 1 1 1 f f . . . 1 1 
. . . . 1 1 1 1 f f . . . . . . 
. . . . . 1 1 1 f f . . f f . . 
. . . . . . 1 f f f f f f . . . 
. . . . . . f f . . . . . . . . 
. f f f f f f f . . . . . . . . 
. f f f f f f f f . . . . . . . 
. f f f f f f f f . . . . . . . 
. . f f f . f f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
Orb = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
Orb.setPosition(57, 360)
tiles.setTilemap(tiles.createTilemap(
            hex`18001800010101010101010101010101010101010101010101000100050008080000000000080000000000000000030300000100010101010101000101010101010101000101010101000100000000000001000101010101010101000100000001000100000101000001000100000000000001000100000001000103000001010101000100010101010001000100000001030103010000080000000100010000010301000101010101030103010100010101010100010101010301000003030001030100000100010000000000010000030301000101010101000100000100010001010101010001010101000100000001000100000100010000000000010001000000000100000001000100000100010101010101010001010100000100010101000100000100000000000008000003000000000101010000000100000100010101010101010103000000000108080001000100000100010000000000000100010000010108080101000101000103010000000000000100010001010008010001030300000103010000000000000100010001000001000001000100000100010101010101010100010001000100000001000103000100000000000000000000010101000100000001000103010103010101010101010100010100000100000001000103030303010000000000030100010100000100000001000100030101010100000101010100010100000101010101010100030000000100000100000000010101000003000000000001010101010100000101010101010001010101010101000006`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 . 
. . . . 2 2 . 2 2 2 2 2 2 2 2 . 2 . . . 2 . 2 . 
. 2 2 . . 2 . 2 . . . . . . 2 . 2 . . . 2 . 2 . 
. . 2 2 2 2 . 2 . 2 2 2 2 . 2 . 2 . . . 2 . 2 . 
2 . . . . . . 2 . 2 . . 2 . 2 . 2 2 2 2 2 . 2 . 
2 2 . 2 2 2 2 2 . 2 2 2 2 . 2 . . . . . 2 . 2 . 
. 2 . 2 . . . . . 2 . . . . 2 . 2 2 2 2 2 . 2 . 
. 2 . 2 . 2 2 2 2 2 . 2 2 2 2 . 2 . . . 2 . 2 . 
. 2 . 2 . . . . . 2 . 2 . . . . 2 . . . 2 . 2 . 
. 2 . 2 2 2 2 2 2 2 . 2 2 2 . . 2 . 2 2 2 . 2 . 
. 2 . . . . . . . . . . . . . . 2 2 2 . . . 2 . 
. 2 . 2 2 2 2 2 2 2 2 . . . . . 2 . . . 2 . 2 . 
. 2 . 2 . . . . . . 2 . 2 . . 2 2 . . 2 2 . 2 2 
. 2 . 2 . . . . . . 2 . 2 . 2 2 . . 2 . 2 . . . 
. 2 . 2 . . . . . . 2 . 2 . 2 . . 2 . . 2 . 2 . 
. 2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 . . . 2 . 2 . 
. 2 . . . . . . . . . . 2 2 2 . 2 . . . 2 . 2 . 
2 2 . 2 2 2 2 2 2 2 2 . 2 2 . . 2 . . . 2 . 2 . 
. . . 2 . . . . . . 2 . 2 2 . . 2 . . . 2 . 2 . 
. 2 2 2 2 . . 2 2 2 2 . 2 2 . . 2 2 2 2 2 2 2 . 
. . . . 2 . . 2 . . . . 2 2 2 . . . . . . . . 2 
2 2 2 2 2 . . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . . . 
`,
            [myTiles.tile0,sprites.builtin.oceanDepths0,myTiles.tile1,sprites.builtin.coral1,sprites.dungeon.collectibleRedCrystal,sprites.builtin.oceanDepths10,myTiles.tile2,sprites.castle.tilePath1,sprites.builtin.coral2],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanDepths10)
scene.cameraFollowSprite(mySprite)
info.startCountdown(40)
info.setLife(2)
Shark = sprites.create(img`
. . . . . . . . . . . . . . c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c c d d b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c b d d b f f . . . . . . . . . c c c . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . c b b c . . 
. . . f f f f f f f c c c c c c f f . . . . . . . c d b c . . . 
. f f c b b b b b b b b b b b b b c f f f . . . . c d b f . . . 
f c b b b b b b b b b c b b b b b b c c c f f . c d b f . . . . 
f b c b b b b f f b b b c b c b b b c c c c c f f d c f . . . . 
f b b 1 1 1 1 f f b b b c b c b b b c c c c c c b b c f . . . . 
. f b 1 1 1 1 1 1 1 1 b b c b b b c c c c c c c c b b c f . . . 
. . f c c c 3 3 c b 1 1 b b b b c c c c c c c f f f b b f . . . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . f b b f . . 
. . . . f 3 3 c 1 1 1 c b b c c d d d d d b c . . . . f f f . . 
. . . . . f f 1 1 1 1 f d b b c c d d b c c . . . . . . . . . . 
. . . . . . . c c c c c f d b b b f c c . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Shark.setPosition(235, 200)
Shark.setFlag(SpriteFlag.BounceOnWall, true)
Shark.setVelocity(22, 22)
