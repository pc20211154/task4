let rhegw4gEGTR = 0
let SE7YSGFAW4MY67 = 0
input.onButtonPressed(Button.A, function () {
    rhegw4gEGTR = 0
    while (rhegw4gEGTR >= 0) {
        led.plot(rhegw4gEGTR, 0)
        basic.pause(200)
        basic.clearScreen()
        rhegw4gEGTR += 1
    }
})
input.onButtonPressed(Button.B, function () {
    SE7YSGFAW4MY67 = 0
    while (SE7YSGFAW4MY67 >= 0) {
        led.plot(0, SE7YSGFAW4MY67)
        basic.pause(200)
        basic.clearScreen()
        SE7YSGFAW4MY67 += 1
    }
})
