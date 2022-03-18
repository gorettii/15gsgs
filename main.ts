input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.East)
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
})
basic.forever(function () {
	
})
