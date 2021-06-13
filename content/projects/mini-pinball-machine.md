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

I approached this project iteratively; because I had so few design constraints there wasn't a predefined plan for the end product. Each step guided my subsequent decisions, as I narrowed in on the complete experience for the machine.

## Enclosure

I started by designing the pinball machine enclosure. The design had a few constraints; it needed to be large enough to fit the Raspberry Pi, peripherals, and display, but also the right size to be comfortable in a player's hands.

The enclosure is built from laser-cut baltic birch plywood. I designed the components to interlock,
so the enclosure has few visible screws but can be easily opened.

![Mini Pinball Machine - Render 1](/img/mini-pinball-machine/render2.png)

![Mini Pinball Machine - Enclosure 1](/img/mini-pinball-machine/IMG_4053.JPG)
![Mini Pinball Machine - Enclosure 2](/img/mini-pinball-machine/IMG_4050.JPG)

At this stage, I wasn't sure the specific layout of the electronics, but chose a few peripherals to integrate into the design:

- a 7" touchscreen display for the main viewport

- A set of four [Adafruit LED Matrix](https://www.adafruit.com/product/902) panels on the top panel, which would be used for an external scoreboard.

-  30mm arcade-style push buttons on the left, right, and front panels for user input.

- an AC power plug on the back of the enclosure for power.

- Stereo speakers with holes integrated into the enclosure for output.

## Hardware Subsystems

Integrating all the peripherals turned out to be quite the challenge. The electronics nest tightly into the enclosure and center around a Raspberry Pi 4 which powers the video game. The RPi communicates with an Arduino Uno over serial, which drive the peripheral IO including the LED matrix display and button inputs. The RPi is connected to a speaker driver and 7" HDMI touchscreen.

![Mini Pinball Machine - Hardware](/img/mini-pinball-machine/architecture.png)

![Mini Pinball Machine - Inside](/img/mini-pinball-machine/IMG_0315.JPG)

### AC Power In
The electronics are powered via 120V AC power and a 5V, 5A, AC-DC power supply. I chose to use AC power instead of a battery because it vastly simplified the power management in the project. The AC power cord connects on the back of the enclosure to a plug with a switch and fuse, used to power on/off the machine.

### 7" Primary Display
The main display, which shows the video game, is a 7" HDMI touchscreen. The RPi drives the display in 90-degree rotated mode, so the display is in portrait orientation. I use the touchscreen for debug purposes, but in the game the arcade buttons are used as the only input method.

### Arcade-Style Buttons

One of my priorities was to recreate the feeling of flippers on a real pinball machine. The machine has several methods for accomplishing this. I chose a set of arcade buttons that have a long throw and "clicky" response. I also added a solenoid and relay to the electronics, with the option of activating it to provide haptic feedback. In the end, the buttons ended up feeling great on their own, and I don't use the haptic feedback in-game.

![Mini Pinball Machine - Buttons](/img/mini-pinball-machine/buttons.png)

### Stereo Speakers & Audio
The RPi is connected to a set of stereo speakers, built in to the enclosure. The game plays background music on menus and ingame, and also plays a set of sound effects. 

### LED Matrix Scoreboard
![Mini Pinball Machine - Matrix](/img/mini-pinball-machine/matrix.png)

The top panel of the enclosure holds four Adafruit LED Matrix panels, which are controlled over I2C.
I chose a bright orange color, which influenced the purple, orange and green color scheme in the software.

These LED panels give off a warm, attractive glow and contributed a lot to the overall feel of the machine.

I programmed the LED matrix with two modes. In "demo" mode, used in the menus, the panels show a small square bouncing around the edges of the matrix.

In "game" mode, the matrix shows a score and the number of balls the player has left.

### Haptic Feedback


## Software

### Graphics

### Physics

### Audio
To provide variation with only a few sound effects, I pitch and volume shift impact noises based on the velocity and angle of the ball to an obstacle.

- **Menu Music**:
- **Game Music**:
- **Flipper Sound**:
- **Impact Sound**:
- **Red Powerup**:
- **Blue Powerup**:
- **Slow-Motion Powerup**: 


<audio controls src="/audio/mini-pinball-machine/Bounce3.wav"></audio>

<audio controls src="/audio/mini-pinball-machine/Click_Heavy_00.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/game.mp3"></audio>
<audio controls src="/audio/mini-pinball-machine/menu.mp3"></audio>
<audio controls src="/audio/mini-pinball-machine/redPowerup.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/redPowerup3.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/Slide_Sharp_02.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/slowdown.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/speedup.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/Typewriter_02.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/upperBouncer.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/water.wav"></audio>
<audio controls src="/audio/mini-pinball-machine/water2.wav"></audio>

### User Input

## Summary

In the end, the software and hardware components all come together to create a cohesive experience that I believe captures the spirit of an arcade game. The art style, user input methods, enclosure, scoreboard, and other components work very well together. I'm very proud of how the project turned out!

What's next? This project has inspired me to do other similar laser-cut arcade games. In the future, I might build a retro arcade machine using [RetroPie](https://retropie.org.uk/), or 

![Mini Pinball Machine - End Result](/img/mini-pinball-machine/screen.png)
