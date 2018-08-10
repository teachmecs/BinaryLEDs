// tests go here; this will not be compiled when this package is used as a library
input.buttonA.onEvent(ButtonEvent.Click, function () {
    binary.displayBinaryLeds(500)
    pause(__internal.__timePicker(1000))
    binary.displayBinaryLeds(10)
    pause(__internal.__timePicker(1000))

})