let distancia = 0
basic.forever(function () {
    distancia = mbit_Robot.Ultrasonic_Car()
    basic.showString("" + (distancia))
    if (distancia <= 30) {
        mbit_Robot.Servo_Car(mbit_Robot.enServo.S1, 180)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    } else {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
        mbit_Robot.Servo_Car(mbit_Robot.enServo.S1, 50)
    }
})
