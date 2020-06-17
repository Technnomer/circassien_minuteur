input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.clear()
    strip2.clear()
    while (!(input.buttonIsPressed(Button.AB)) || index == 29) {
        strip.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip2.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip2.show()
        basic.pause(1000)
        index += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    strip2.show()
    index = -1
})
let index = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
	
})
