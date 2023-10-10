/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program makes all colours of the RGB LED flash
*/

basic.clearScreen()
basic.pause(1000)

// Input

    
input.onButtonPressed(Button.A, function () {
    
  // Red
  pins.digitalWritePin(DigitalPin.P10, 1)
  basic.showString('Red')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P10, 0)
  
  // Green
  pins.digitalWritePin(DigitalPin.P19, 1)
  basic.showString('Green')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P19, 0)
  
  // Blue
  pins.digitalWritePin(DigitalPin.P20, 1)
  basic.showString('Blue')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P20, 0)
  
  // Magenta
  pins.digitalWritePin(DigitalPin.P10, 1)
  pins.digitalWritePin(DigitalPin.P20, 1)
  basic.showString('Magenta')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P10, 0)
  pins.digitalWritePin(DigitalPin.P20, 0)
  
  // Yellow
  pins.digitalWritePin(DigitalPin.P10, 1)
  pins.digitalWritePin(DigitalPin.P19, 1)
  basic.showString('Yellow')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P10, 0)
  pins.digitalWritePin(DigitalPin.P19, 0)
  
  // Cyan
  pins.digitalWritePin(DigitalPin.P10, 1)
  pins.digitalWritePin(DigitalPin.P20, 1)
  basic.showString('Cyan')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P10, 0)
  pins.digitalWritePin(DigitalPin.P20, 0)
  
  // White
  pins.digitalWritePin(DigitalPin.P10, 1)
  pins.digitalWritePin(DigitalPin.P20, 1)
  pins.digitalWritePin(DigitalPin.P19, 1)
  basic.showString('White')
  basic.pause(1000)
  pins.digitalWritePin(DigitalPin.P10, 0)
  pins.digitalWritePin(DigitalPin.P19, 0)
  pins.digitalWritePin(DigitalPin.P20, 0)
   
    })
