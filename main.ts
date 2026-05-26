// --- Game Configuration & Setup ---
game.stats = true;
scene.setBackgroundColor(11); // Dark blue background sky
// Create the player (the Light Wisp)
let player = sprites.create(img`
    . . . . . . 9 . . . . . . . . .
    . . . . . . . 9 9 . . . . . . .
    . . . . . . 9 9 9 9 . . . . . .
    . . . . . 9 9 d d 9 1 . . . . .
    . . . . 6 9 d 1 1 d 9 1 . . . .
    . . . 6 6 d 1 1 1 1 d 9 9 . . .
    . . . 6 d 1 f 1 1 f 1 d 9 . . .
    . . . 6 d 1 1 1 1 1 1 d 9 . . .
    . . . 6 6 d 1 1 1 1 d 9 9 . . .
    . . . . 6 6 d d d d 9 9 . . . .
    . . . . . 6 6 9 9 9 9 . . . . .
    . . . . . . 6 . . 9 . . . . . .
    . . . . . . 6 . . 9 . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
//camera Movement
scene.cameraFollowSprite(player)

// first map: prototype
// bgm and tilemap 
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b6666666fbb66666666ff66bbb66666666666666b6666666fbb66666666ff66bbb66666666666666b6666666fbb66666666ff66bbb66666666666666b6666666fbb66666666ff66bbb666666666666
    66b666666ffcbb666666ccf666bb66666666666666b666666fffbb666666fff666bb66666666666666b666666fffbb666666fff666bb66666666666666b666666fffbb666666fff666bb666666666666
    6bb666f66ff66bbb6f666cff66bb6666666666666bb666f66ff66bbb6f666cff66bb6666666666666bb666f66ff66bbb6f666cff66bb6666666666666bb666f66ff66bbb6f666cff66bb666666666666
    6bb666cf66f6cfbbbff66cff66bbb666666666666bb666cf66f6cfbbbff66cff66bbb666666666666bb666cf66f6cfbbbff66cff66bbb666666666666bb666cf66f6cfbbbff66cff66bbb66666666666
    6bb66ccffffcff6bbffcccf6666bb666666666666bb66ccffffcff6bbffcccf6666bb666666666666bb66ccffffcff6bbffcccf6666bb666666666666bb66ccffffcff6bbffcccf6666bb66666666666
    bbb666cffffcff6bbffccff66fcbbb66f6666666bbb666cffffcff6bbffccff66fcbbb66f6666666bbb666cffffcff6bbffccff66fcbbb66f6666666bbb666cffffcff6bbffccff66fcbbb66f6666666
    bbbcc6cffffcfffbbbfccfffff6bbb66fff66666bbbcc6cffffcfffbbbfccfffff6bbb66fff66666bbbcc6cffffcfffbbbfccfffff6bbb66fff66666bbbcc6cffffcfffbbbfccfffff6bbb66fff66666
    bbb6cccffffcffffbbfccffffc6bbbf6ff666666bbb6cccffffcffffbbfccffffc6bbbf6ff666666bbb6cccffffcffffbbfccffffc6bbbf6ff666666bbb6cccffffcffffbbfccffffc6bbbf6ff666666
    bbb6cccfffcfffffbbbccffffcfbbbffff66ff66bbb6cccfffcfffffbbbccffffcfbbbffff66ff66bbb6cccfffcfffffbbbccffffcfbbbffff66ff66bbb6cccfffcfffffbbbccffffcfbbbffff66ff66
    bbbccccfffcffffffbbccffffcfbbbbffffcfff6bbbccccfffcffffffbbccffffcfbbbbffffcfff6bbbccccfffcffffffbbccffffcfbbbbffffcfff6bbbccccfffcffffffbbccffffcfbbbbffffcfff6
    bbfccccffccfffffffbbffffccfbbbbffffcffffbbfccccffccfffffffbbffffccfbbbbffffcffffbbfccccffccfffffffbbffffccfbbbbffffcffffbbfccccffccfffffffbbffffccfbbbbffffcffff
    bbffcccccfffffffffbbbfffcfffbbbffffcffffbbffcccccfffffffffbbbfffcfffbbbffffcffffbbffcccccfffffffffbbbfffcfffbbbffffcffffbbffcccccfffffffffbbbfffcfffbbbffffcffff
    bbffccccffffffffffcbbbbccfffbbbffffcfffbbbffccccffffffffffcbbbbccfffbbbffffcfffbbbffccccffffffffffcbbbbccfffbbbffffcfffbbbffccccffffffffffcbbbbccfffbbbffffcfffb
    bbffcccfffffffffffccbbbbffffbbbbfffcfffbbbffcccfffffffffffccbbbbffffbbbbfffcfffbbbffcccfffffffffffccbbbbffffbbbbfffcfffbbbffcccfffffffffffccbbbbffffbbbbfffcfffb
    bbffcccfffffffffffccbbbbbbffbbbbfffcfffbbbffcccfffffffffffccbbbbbbffbbbbfffcfffbbbffcccfffffffffffccbbbbbbffbbbbfffcfffbbbffcccfffffffffffccbbbbbbffbbbbfffcfffb
    bffffccffffffffffccccbbbbbbbbbbbbfffcffbbffffccffffffffffccccbbbbbbbbbbbbfffcffbbffffccffffffffffccccbbbbbbbbbbbbfffcffbbffffccffffffffffccccbbbbbbbbbbbbfffcffb
    bffffcccfffffffffccfffffbbbbbbbbbfffcffbbffffcccfffffffffccfffffbbbbbbbbbfffcffbbffffcccfffffffffccfffffbbbbbbbbbfffcffbbffffcccfffffffffccfffffbbbbbbbbbfffcffb
    bffffccccffffffffccffffffbbbbbbbbfffcfbbbffffccccffffffffccffffffbbbbbbbbfffcfbbbffffccccffffffffccffffffbbbbbbbbfffcfbbbffffccccffffffffccffffffbbbbbbbbfffcfbb
    bffffcccccffffffcccfffffffbbbbbbbfffcbbbbffffcccccffffffcccfffffffbbbbbbbfffcbbbbffffcccccffffffcccfffffffbbbbbbbfffcbbbbffffcccccffffffcccfffffffbbbbbbbfffcbbb
    ccfffffcccccffffcccfffffffffbbbbbfffbbbbccfffffcccccffffcccfffffffffbbbbbfffbbbbccfffffcccccffffcccfffffffffbbbbbfffbbbbccfffffcccccffffcccfffffffffbbbbbfffbbbb
    fcfffffcccccccfcccffffffffffbbbbbffbbbbffcfffffcccccccfcccffffffffffbbbbbffbbbbffcfffffcccccccfcccffffffffffbbbbbffbbbbffcfffffcccccccfcccffffffffffbbbbbffbbbbf
    fcffffffccccccccccffffffffffbbbbbffbbbfffcffffffccccccccccffffffffffbbbbbffbbbfffcffffffccccccccccffffffffffbbbbbffbbbfffcffffffccccccccccffffffffffbbbbbffbbbff
    fcffffffcccccccccfffffffffffbbbbbffbbffffcffffffcccccccccfffffffffffbbbbbffbbffffcffffffcccccccccfffffffffffbbbbbffbbffffcffffffcccccccccfffffffffffbbbbbffbbfff
    fccfffffcccccccfffffffffffffbbbbbffbbcfffccfffffcccccccfffffffffffffbbbbbffbbcfffccfffffcccccccfffffffffffffbbbbbffbbcfffccfffffcccccccfffffffffffffbbbbbffbbcff
    ffccffffccccccffffffffffffffbbbbbffbbcffffccffffccccccffffffffffffffbbbbbffbbcffffccffffccccccffffffffffffffbbbbbffbbcffffccffffccccccffffffffffffffbbbbbffbbcff
    ffcccfffccccccffffffffffffffbbbbbfbbbccfffcccfffccccccffffffffffffffbbbbbfbbbccfffcccfffccccccffffffffffffffbbbbbfbbbccfffcccfffccccccffffffffffffffbbbbbfbbbccf
    ffffccccccccccfffffffffffffbbbbbbfbbbfcfffffccccccccccfffffffffffffbbbbbbfbbbfcfffffccccccccccfffffffffffffbbbbbbfbbbfcfffffccccccccccfffffffffffffbbbbbbfbbbfcf
    ffffccccccccccfffffffffffffbbbbbbbbbffcfffffccccccccccfffffffffffffbbbbbbbbbffcfffffccccccccccfffffffffffffbbbbbbbbbffcfffffccccccccccfffffffffffffbbbbbbbbbffcf
    ffffffccccccccfffffffffffffbbbbbbbbbffccffffffccccccccfffffffffffffbbbbbbbbbffccffffffccccccccfffffffffffffbbbbbbbbbffccffffffccccccccfffffffffffffbbbbbbbbbffcc
    cfffffffccccccffffffffffffbbbbbbbbbffffccfffffffccccccffffffffffffbbbbbbbbbffffccfffffffccccccffffffffffffbbbbbbbbbffffccfffffffccccccffffffffffffbbbbbbbbbffffc
    ccfffffffcccccffffffffffffbbbbbbbbbfffffccfffffffcccccffffffffffffbbbbbbbbbfffffccfffffffcccccffffffffffffbbbbbbbbbfffffccfffffffcccccffffffffffffbbbbbbbbbfffff
    ccfffffffcccccffffffffffffbbbbbbbbffffffccfffffffcccccffffffffffffbbbbbbbbffffffccfffffffcccccffffffffffffbbbbbbbbffffffccfffffffcccccffffffffffffbbbbbbbbffffff
    fcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbffffff
    fcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbffffff
    fcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbffffff
    fcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbfffffffcfffffffcccccfffffffffffbbbbbbbbbffffff
    fccffffffcccccfffffffffffbbbbbbbbffffffffccffffffcccccfffffffffffbbbbbbbbffffffffccffffffcccccfffffffffffbbbbbbbbffffffffccffffffcccccfffffffffffbbbbbbbbfffffff
    fccffffffcccccfffffffffffbbbbbbbbffffffffccffffffcccccfffffffffffbbbbbbbbffffffffccffffffcccccfffffffffffbbbbbbbbffffffffccffffffcccccfffffffffffbbbbbbbbfffffff
    cccffffffcccccfffffffffffbbbbbbbbfffffffcccffffffcccccfffffffffffbbbbbbbbfffffffcccffffffcccccfffffffffffbbbbbbbbfffffffcccffffffcccccfffffffffffbbbbbbbbfffffff
    ccfffffffcccccfffffffffffbbbbbbbbfffffffccfffffffcccccfffffffffffbbbbbbbbfffffffccfffffffcccccfffffffffffbbbbbbbbfffffffccfffffffcccccfffffffffffbbbbbbbbfffffff
    ccfffffffccccccffffffffffbbbbbbbbfffffffccfffffffccccccffffffffffbbbbbbbbfffffffccfffffffccccccffffffffffbbbbbbbbfffffffccfffffffccccccffffffffffbbbbbbbbfffffff
    ccfffffffccccccffffffffffbbbbbbbbfffffffccfffffffccccccffffffffffbbbbbbbbfffffffccfffffffccccccffffffffffbbbbbbbbfffffffccfffffffccccccffffffffffbbbbbbbbfffffff
    ccfffffffccccccffffffffffbbbbbbbffffffffccfffffffccccccffffffffffbbbbbbbffffffffccfffffffccccccffffffffffbbbbbbbffffffffccfffffffccccccffffffffffbbbbbbbffffffff
    cffffffffccccccffffffffffbbbbbbbfffffffccffffffffccccccffffffffffbbbbbbbfffffffccffffffffccccccffffffffffbbbbbbbfffffffccffffffffccccccffffffffffbbbbbbbfffffffc
    cffffffffccccccffffffffffbbbbbbbffffffcccffffffffccccccffffffffffbbbbbbbffffffcccffffffffccccccffffffffffbbbbbbbffffffcccffffffffccccccffffffffffbbbbbbbffffffcc
    cffffffffccccccffffffffffbbbbbbbffffffcccffffffffccccccffffffffffbbbbbbbffffffcccffffffffccccccffffffffffbbbbbbbffffffcccffffffffccccccffffffffffbbbbbbbffffffcc
    fffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffccc
    fffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffccc
    fffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffcccfffffffffcccccccfffffffffbbbbbbbfffffccc
    fffffffffccccccccffffffffbbbbbbbffffccccfffffffffccccccccffffffffbbbbbbbffffccccfffffffffccccccccffffffffbbbbbbbffffccccfffffffffccccccccffffffffbbbbbbbffffcccc
    fffffffffccccccccffffffffbbbbbbbffffccccfffffffffccccccccffffffffbbbbbbbffffccccfffffffffccccccccffffffffbbbbbbbffffccccfffffffffccccccccffffffffbbbbbbbffffcccc
    fffffffffccccccccffffffffbbbbbbbffffcccffffffffffccccccccffffffffbbbbbbbffffcccffffffffffccccccccffffffffbbbbbbbffffcccffffffffffccccccccffffffffbbbbbbbffffcccf
    ffffffffffccccccccffffffbbbbbbbbffffcccfffffffffffccccccccffffffbbbbbbbbffffcccfffffffffffccccccccffffffbbbbbbbbffffcccfffffffffffccccccccffffffbbbbbbbbffffcccf
    cfffffffffccccccccffffffbbbbbbbbcccccccccfffffffffccccccccffffffbbbbbbbbcccccccccfffffffffccccccccffffffbbbbbbbbcccccccccfffffffffccccccccffffffbbbbbbbbcccccccc
    cccccfffffccccccccffffffbbbbbbbbbccccccccccccfffffccccccccffffffbbbbbbbbbccccccccccccfffffccccccccffffffbbbbbbbbbccccccccccccfffffccccccccffffffbbbbbbbbbccccccc
    ccccccccffcccccccccfffccbbbbbbbbbcccccccccccccccffcccccccccfffccbbbbbbbbbcccccccccccccccffcccccccccfffccbbbbbbbbbcccccccccccccccffcccccccccfffccbbbbbbbbbccccccc
    cccccccccccccccccccfccccbbbbbbbbbccccccccccccccccccccccccccfccccbbbbbbbbbccccccccccccccccccccccccccfccccbbbbbbbbbccccccccccccccccccccccccccfccccbbbbbbbbbccccccc
    ccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbcccccc
    ccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbcccccc
    cccccccccccccccccccccccbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbcccccc
    cccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccc
    cccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccc
    cccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccc
    cccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbccccc
    ccccccccccccccccccc6666666666bbbbbbcccccccccccccccccccccccc6666666666bbbbbbcccccccccccccccccccccccc6666666666bbbbbbcccccccccccccccccccccccc6666666666bbbbbbccccc
    cccccccccccccc66666666666666666666bccccccccccccccccccc66666666666666666666bccccccccccccccccccc66666666666666666666bccccccccccccccccccc66666666666666666666bccccc
    ccccccccccc6666666666666666666666666ccccccccccccccc6666666666666666666666666ccccccccccccccc6666666666666666666666666ccccccccccccccc6666666666666666666666666cccc
    cccccccc666666666666666666666666666666cccccccccc666666666666666666666666666666cccccccccc666666666666666666666666666666cccccccccc666666666666666666666666666666cc
    ccccc66666666666666666666666666666666666ccccc66666666666666666666666666666666666ccccc66666666666666666666666666666666666ccccc66666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
`)
// 1st map's tile map
tiles.setCurrentTilemap(tilemap`level1`)

// --- MANUAL PHYSICS CONFIGURATION ---
let spdY = -2;
let previousY = 0;
const MOVE_SPEED = 60;

const GLIDE_MAX_FALL = 0.5; // Strictly caps falling speed when spacebar is held
const NORMAL_MAX_FALL = 4;  // Your original cap (spdY > 4)

// Initialize Player position & horizontal controller
player.setPosition(20, 30);
controller.moveSprite(player, MOVE_SPEED, 0); // Left/Right movement only

// CAMERA FIX: Tells the screen scroll to track your player as you move right
scene.cameraFollowSprite(player);

// --- Defining Invisible Wind Zones ---
let windZones: Sprite[] = [
    // Zone 1: columns 4-6, rows 3-15 (Width: 48, Height: 208)
    sprites.create(image.create(48, 208), SpriteKind.Food),
    // Zone 2: columns 11-13, rows 9-15 (Width: 48, Height: 112)
    sprites.create(image.create(48, 112), SpriteKind.Food),
    // Zone 3: columns 19-23, rows 7-15 (Width: 80, Height: 144)
    sprites.create(image.create(80, 144), SpriteKind.Food),
    // Zone 4: columns 4-6, rows 4-15 (Width: 48, Height: 192)
    sprites.create(image.create(48, 192), SpriteKind.Food),
    // Zone 5: columns 27-28, rows 5-15 (Width: 32, Height: 176)
    sprites.create(image.create(32, 176), SpriteKind.Food)
];

// Fill the canvases with a block of color so overlaps trigger, then hide them from view
for (let zone of windZones) {
    zone.image.fill(1); // Fills it with a solid base color so it has active physical pixels
    zone.setFlag(SpriteFlag.Invisible, true); // Hides the big colored blocks completely
}

// Map zone coordinates (Center X, Center Y)
windZones[0].setPosition(88, 152);   // Zone 1
windZones[1].setPosition(200, 200);  // Zone 2
windZones[2].setPosition(344, 184);  // Zone 3
windZones[3].setPosition(88, 160);   // Zone 4
windZones[4].setPosition(448, 168);  // Zone 5


// --- CORE GAME LOOP (Runs every single frame) ---
game.onUpdate(function () {
    let isPlayerInWind = false;

    // 1. Check if player is standing inside ANY wind zone
    for (let zone of windZones) {
        if (player.overlapsWith(zone)) {
            isPlayerInWind = true;
        }
    }

    // 2. Compute Custom Gravity Matrix
    if (isPlayerInWind) {
        // REVERSE GRAVITY: Instead of pulling down (+0.1), wind pushes up (-0.15)
        // If holding Spacebar/A, the wind lifts you even faster (-0.25)
        if (controller.A.isPressed()) {
            spdY = spdY - 0.25;
        } else {
            spdY = spdY - 0.15;
        }

        // Cap upward velocity so you don't rocket off-screen instantly
        if (spdY < -3) {
            spdY = -3;
        }

    } else if (controller.A.isPressed() && spdY > 0) {
        // GLIDING: Outside wind, holding Spacebar while falling pulls gravity down much slower
        spdY = spdY + 0.02; // Very weak downward gravity pull

        if (spdY > GLIDE_MAX_FALL) {
            spdY = GLIDE_MAX_FALL; // Forces a slow, floaty drift downwards
        }

    } else {
        // NORMAL GRAVITY: Your original logic loops here
        spdY = spdY + 0.1;

        if (spdY > NORMAL_MAX_FALL) {
            spdY = NORMAL_MAX_FALL;
        }
    }

    // 3. Apply the actual computed frame positioning values directly to the player sprite
    player.y = player.y + spdY;

    // 4. Hard Y-Level 14 Dead-Zone Clamp (14 tiles * 16 pixels = 224 pixels)
    if (player.y > 224) {
        game.over(false);
    }
});

// --- VISUAL AMBIENT WIND PARTICLE ENGINE ---
game.onUpdateInterval(100, function () {
    for (let zone of windZones) {
        if (Math.randomRange(0, 100) < 25) {
            let pX = Math.randomRange(zone.x - (zone.width / 2), zone.x + (zone.width / 2));
            let pY = zone.y + (zone.height / 2);

            let particle = sprites.create(img`
                . 1 .
                1 1 1
                . 1 .
            `, SpriteKind.Projectile);

            particle.setPosition(pX, pY);
            particle.vy = Math.randomRange(-60, -90);
            particle.setFlag(SpriteFlag.GhostThroughWalls, true);
            particle.lifespan = 2500;
        }
    }
});

// --- Win Condition ---
// WIN: If the player touches a Chest
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true);
})
// --- AUTOMATIC ARRAY CLEANUP ---
// When a temporary wind zone's lifespan ends, safely remove it from your active array
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    let index = windZones.indexOf(sprite);
    if (index !== -1) {
        windZones.splice(index, 1);
    }
});

// --- SPAWN POCKET WIND CURRENT (REVISED: SAFE FLOAT) ---
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // 1. Create a compact 32x32 wind block using Food kind
    let playerWind = sprites.create(image.create(32, 32), SpriteKind.Food);
    playerWind.image.fill(1);
    playerWind.setFlag(SpriteFlag.Invisible, true);

    // 2. Center it right beneath the Wisp so it catches you instantly
    playerWind.setPosition(player.x, player.y + 10);

    // 3. Push it into your existing windZones array so your loops process it automatically
    windZones.push(playerWind);

    // 4. Give it a lifespan of 1.5 seconds (1500ms) before it self-destructs
    playerWind.lifespan = 1500;

    // 5. Neutralize gravity for the float effect (gentle upward lift)
    spdY = -0.1;

    // 6. Safe visual effect: A gentle wind trail underneath, leaving the player alone!
    playerWind.startEffect(effects.trail, 300);
});