/**
 * Pour les rubans 30 Leds penser à enlever les ordres non nécessaire du démarrage
 */
function Poste_5 () {
    for (let index = 0; index <= 60; index++) {
        strip0.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip0.show()
        basic.pause(10)
    }
    strip5.showColor(neopixel.colors(NeoPixelColors.Green))
    strip5.show()
    strip0.clear()
    strip0.show()
}
radio.onReceivedNumber(function (receivedNumber) {
    index = 0
    if (receivedNumber == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Poste_1()
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Poste_2()
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Poste_3()
    }
    if (receivedNumber == 4) {
        basic.showLeds(`
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Poste_4()
    }
    if (receivedNumber == 5) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Poste_5()
    }
    if (receivedNumber == 6) {
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Poste_6()
    }
    if (receivedNumber == 7) {
        basic.showLeds(`
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Tous_Rouge()
    }
    if (receivedNumber == 8) {
        basic.showLeds(`
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Tous_Noir()
    }
    if (receivedNumber == 9) {
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        Pulvérisation_Bleue()
    }
    if (receivedNumber == 10) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        Tous_Noir()
    }
    if (receivedNumber == 11) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            `)
        Minuteur_30s()
        Tous_Vert()
    }
    if (receivedNumber == 12) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            `)
        Tous_Noir()
    }
})
function Minuteur_30s () {
    index = 0
    while (index <= 29) {
        strip1.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip2.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip3.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip4.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip5.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip6.setPixelColor(29 - index, neopixel.colors(NeoPixelColors.Green))
        strip1.show()
        strip2.show()
        strip3.show()
        strip4.show()
        strip5.show()
        strip6.show()
        basic.pause(1000)
        index += 1
    }
    strip0.showColor(neopixel.colors(NeoPixelColors.Green))
    strip0.show()
}
function Poste_3 () {
    for (let index = 0; index <= 90; index++) {
        strip0.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip0.show()
        basic.pause(10)
    }
    strip3.showColor(neopixel.colors(NeoPixelColors.Green))
    strip3.show()
    strip0.clear()
    strip0.show()
}
input.onButtonPressed(Button.A, function () {
    Tous_Noir()
})
function Poste_6 () {
    for (let index = 0; index <= 60; index++) {
        strip0.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip0.show()
        basic.pause(10)
    }
    strip6.showColor(neopixel.colors(NeoPixelColors.Green))
    strip6.show()
    strip0.clear()
    strip0.show()
}
function Initialisation_Branchements_Ruban () {
    strip0 = neopixel.create(DigitalPin.P1, 150, NeoPixelMode.RGB)
    strip1 = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip2 = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
    strip3 = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip4 = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
    strip5 = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
    strip6 = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
}
input.onButtonPressed(Button.AB, function () {
    Tous_Noir()
    index = -1
})
function Tous_Noir () {
    strip0.showColor(neopixel.colors(NeoPixelColors.Black))
    strip1.showColor(neopixel.colors(NeoPixelColors.Black))
    strip2.showColor(neopixel.colors(NeoPixelColors.Black))
    strip3.showColor(neopixel.colors(NeoPixelColors.Black))
    strip4.showColor(neopixel.colors(NeoPixelColors.Black))
    strip5.showColor(neopixel.colors(NeoPixelColors.Black))
    strip6.showColor(neopixel.colors(NeoPixelColors.Black))
    strip0.show()
    strip1.show()
    strip2.show()
    strip3.show()
    strip4.show()
    strip5.show()
    strip6.show()
}
function Tous_Vert () {
    strip0.showColor(neopixel.colors(NeoPixelColors.Green))
    strip1.showColor(neopixel.colors(NeoPixelColors.Green))
    strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    strip3.showColor(neopixel.colors(NeoPixelColors.Green))
    strip4.showColor(neopixel.colors(NeoPixelColors.Green))
    strip5.showColor(neopixel.colors(NeoPixelColors.Green))
    strip6.showColor(neopixel.colors(NeoPixelColors.Green))
    strip0.show()
    strip1.show()
    strip2.show()
    strip3.show()
    strip4.show()
    strip5.show()
    strip6.show()
}
function Poste_2 () {
    for (let index = 0; index <= 120; index++) {
        strip0.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip0.show()
        basic.pause(10)
    }
    strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    strip2.show()
    strip0.clear()
    strip0.show()
}
function Pulvérisation_Bleue () {
    index = 0
    while (index <= 255) {
        strip0.setBrightness(index)
        strip0.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip0.show()
        basic.pause(30)
        index += 5
    }
    index = 0
    while (index <= 29) {
        strip1.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip2.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip3.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip4.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip5.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip6.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip1.show()
        strip2.show()
        strip3.show()
        strip4.show()
        strip5.show()
        strip6.show()
        basic.pause(10)
        index += 1
    }
}
function Tous_Rouge () {
    strip0.showColor(neopixel.colors(NeoPixelColors.Red))
    strip1.showColor(neopixel.colors(NeoPixelColors.Red))
    strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    strip3.showColor(neopixel.colors(NeoPixelColors.Red))
    strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    strip5.showColor(neopixel.colors(NeoPixelColors.Red))
    strip6.showColor(neopixel.colors(NeoPixelColors.Red))
    strip0.show()
    strip1.show()
    strip2.show()
    strip3.show()
    strip4.show()
    strip5.show()
    strip6.show()
}
function Poste_1 () {
    for (let index = 0; index <= 120; index++) {
        strip0.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip0.show()
        basic.pause(10)
    }
    strip1.showColor(neopixel.colors(NeoPixelColors.Green))
    strip1.show()
    strip0.clear()
    strip0.show()
}
function Poste_4 () {
    for (let index = 0; index <= 90; index++) {
        strip0.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip0.show()
        basic.pause(10)
    }
    strip4.showColor(neopixel.colors(NeoPixelColors.Green))
    strip4.show()
    strip0.clear()
    strip0.show()
}
let strip6: neopixel.Strip = null
let strip4: neopixel.Strip = null
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip1: neopixel.Strip = null
let index = 0
let strip5: neopixel.Strip = null
let strip0: neopixel.Strip = null
radio.setGroup(1)
Initialisation_Branchements_Ruban()
for (let index2 = 0; index2 < 4; index2++) {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(500)
}
basic.forever(function () {
	
})
