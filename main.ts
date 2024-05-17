basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    pins.servoWritePin(AnalogPin.P0, input.lightLevel())
})
