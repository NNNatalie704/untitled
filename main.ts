input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1000; index++) {
        if (true) {
            music.playMelody("C5 A B G A F G E ", 120)
            basic.showNumber(randint(1, 50))
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.Ghost)
            basic.showIcon(IconNames.Pitchfork)
            basic.showIcon(IconNames.Target)
            basic.showIcon(IconNames.EigthNote)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.SmallDiamond)
            basic.showArrow(ArrowNames.North)
            basic.showArrow(ArrowNames.South)
            basic.showArrow(ArrowNames.West)
            basic.showArrow(ArrowNames.East)
            basic.clearScreen()
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        }
    }
})
