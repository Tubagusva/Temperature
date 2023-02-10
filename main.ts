let F = 0
let Fahrenhiet = 0
let Reamor = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("CELCIUS")
})
input.onButtonPressed(Button.AB, function () {
    F = input.temperature() * 1.8
    Fahrenhiet = F + 32
    basic.showNumber(Fahrenhiet)
    basic.showString("FAHRENHIET")
})
input.onButtonPressed(Button.B, function () {
    Reamor = input.temperature() * 0.8
    basic.showNumber(Reamor)
    basic.showString("REAMOR")
})
