input.onButtonPressed(Button.A, function () {
    ABSelect = 0
    BSelect = 0
    ShakeSelect = 0
    ASelect = 1
})
input.onButtonPressed(Button.AB, function () {
    ASelect = 0
    BSelect = 0
    ABSelect = 1
    ShakeSelect = 0
})
input.onButtonPressed(Button.B, function () {
    ABSelect = 0
    BSelect = 1
    ShakeSelect = 0
    ASelect = 0
})
input.onGesture(Gesture.Shake, function () {
    ABSelect = 0
    BSelect = 0
    ShakeSelect = 1
    ASelect = 0
})
let ABSelect = 0
let ShakeSelect = 0
let BSelect = 0
let ASelect = 0
let randomnumber = 0
basic.showString("BOP IT!")
basic.showString("...")
basic.showNumber(5)
basic.showNumber(4)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.clearScreen()
basic.pause(1000)
let count = 0
let paused_time = 3000
while (true) {
    randomnumber = randint(1, 4)
    basic.showNumber(randomnumber)
    basic.pause(paused_time)
    if (randomnumber == 1 && ASelect == 1) {
        basic.showIcon(IconNames.Yes)
        count += 1
        paused_time += -10
    } else if (randomnumber == 2 && BSelect == 1) {
        basic.showIcon(IconNames.Yes)
        count += 1
        paused_time += -10
    } else if (randomnumber == 3 && ShakeSelect == 1) {
        basic.showIcon(IconNames.Yes)
        count += 1
        paused_time += -10
    } else if (randomnumber == 4 && ABSelect == 1) {
        basic.showIcon(IconNames.Yes)
        count += 1
        paused_time += -10
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("Score:")
        basic.showNumber(count)
        break;
    }
}
