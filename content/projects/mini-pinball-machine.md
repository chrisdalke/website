---
title: "Mini Pinball Machine"
group: "hardware"
draft: false
date: 2019-07-01
dateString: "July 2019"
image: "/img/thumbnails/mini-pinball-machine.jpg"
---

{{< youtube iiBn7FVzlcc >}}

<br />

I've always been fascinated by arcade machines, in particular their user interface design. 
Arcades bombard the player with a rich multi-sensory experience in an attempt to compete for attention in a noisy and distracting environment. 

The most successful arcade games have extremely satisfying interaction methods: The games "feel" good to play, on the lowest level of the tactile response in an individual button or joystick press.

In the summer after graduating, I had free time and access to a makerspace. I decided to build a miniature pinball machine [1], with a focus on creating a game with a "feel" influenced by arcade machines. I chose to focus on **tactile response**, **audio**, and **color & light** as three areas to focus on.

To constrain the project to a realistic scope, I chose to build the actual game in software -- The gameplay would occur on a screen, and the input method and other elements would be physical. 

## Hardware

The enclosure is built from laser-cut baltic birch plywood. I designed the components to interlock,
so the enclosure has few visible screws but can be easily opened.

![Mini Pinball Machine - Render 1](/img/mini-pinball-machine/render2.png)

![Mini Pinball Machine - Enclosure 1](/img/mini-pinball-machine/IMG_4053.JPG)
![Mini Pinball Machine - Enclosure 2](/img/mini-pinball-machine/IMG_4050.JPG)

Integrating all the peripherals turned out to be quite the challenge. The electronics nest tightly into the enclosure and center around a Raspberry Pi 4 which powers the video game. The RPi communicates with an Arduino Uno over serial, which drive the peripheral IO including the LED matrix display and button inputs. The RPi is connected to a speaker driver and 7" HDMI touchscreen.

![Mini Pinball Machine - Hardware](/img/mini-pinball-machine/architecture.png)

![Mini Pinball Machine - Inside](/img/mini-pinball-machine/IMG_0315.JPG)

One of my priorities was to recreate the feeling of flippers on a real pinball machine. The machine has several methods for accomplishing this. I chose a set of arcade buttons that have a long throw and "clicky" response. I also added a solenoid and relay to the electronics, with the option of activating it to provide haptic feedback. 

![Mini Pinball Machine - Buttons](/img/mini-pinball-machine/buttons.png)

![Mini Pinball Machine - Matrix](/img/mini-pinball-machine/matrix.png)

The top panel of the enclosure holds four Adafruit LED Matrix panels, which are controlled over I2C.
I chose a bright orange color, which influenced the purple, orange and green color scheme in the software. These LED panels give off a warm, attractive glow and contributed a lot to the overall feel of the machine.

## Software
I built the pinball application in C++ and OpenGL. I used [raylib](https://www.raylib.com/), a library providing a simple imperative interface around OpenGL for graphics and audio. I won't go into detail into the software, but you can find my software [on Github](https://github.com/chrisdalke/mini-pinball-machine).

To interface the hardware with the software game, The Arduino communicates with the C++ application via a serial protocol. The application sends scoreboard updates, and the Arduino sends button presses in realtime.

## Summary

In the end, the software and hardware components all come together to create a cohesive experience that I believe captures the spirit of an arcade game. The art style, user input methods, enclosure, scoreboard, and other components work very well together. I'm very proud of how the project turned out!

What's next? This project has inspired me to do other similar laser-cut arcade games. In the future, I might build a retro arcade machine using [RetroPie](https://retropie.org.uk/), or something else inspired by a classic game.

![Mini Pinball Machine - End Result](/img/mini-pinball-machine/screen.png)
