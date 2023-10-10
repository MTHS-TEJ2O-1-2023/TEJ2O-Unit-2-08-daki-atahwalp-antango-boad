"""
Created by: Daki A.B
Created on: Oct 2023
This module is a Micro:bit flashing all RGB LED colours
"""

from microbit import *


while True:
    if button_a.is_prerssed():
        # Red
        pin10.write_digital(1)
        display.scroll("Red")
        sleep(1)
        pin10.write_digital(0)
        # Green
        pin19.write_digital(1)
        display.scroll("Green")
        sleep(1)
        pin19.write_digital(0)
        # Blue
        pin20.write_digital(1)
        display.scroll("Blue")
        sleep(1)
        pin20.write_digital(0)
        # Magenta
        pin10.write_digital(1)
        pin20.write_digital(1)
        display.scroll("Magenta")
        sleep(1)
        pin10.write_digital(0)
        pin20.write_digital(0)
        # Yellow
        pin10.write_digital(1)
        pin19.write_digital(1)
        display.scroll("Yellow")
        sleep(1)
        pin10.write_digital(0)
        pin19.write_digital(0)
        # Cyan
        pin19.write_digital(1)
        pin20.write_digital(1)
        display.scroll("Cyan")
        sleep(1)
        pin19.write_digital(0)
        pin20.write_digital(0)
        # White
        pin10.write_digital(1)
        pin19.write_digital(1)
        pin20.write_digital(1)
        display.scroll("White")
        sleep(1)
        pin10.write_digital(0)
        pin19.write_digital(0)
        pin20.write_digital(0)
