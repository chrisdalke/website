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

[1] In a nostalgic nod to my childhood and the hours I spent playing the [Space Cadet Pinball](https://en.wikipedia.org/wiki/Full_Tilt!_Pinball) game included with Windows.


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

Integrating all the peripherals turned out to be quite the challenge. The electronics nest tightly into 

![Mini Pinball Machine - Hardware](/img/mini-pinball-machine/architecture.png)

![Mini Pinball Machine - Inside](/img/mini-pinball-machine/IMG_0315.JPG)

### 7" Primary Display

### AC Power In

### Arcade-Style Buttons

One of my priorities was to recreate the feeling of a real pinball machine, . The machine has several methods for accomplishing this. I chose a set of arcade buttons that have a long throw and "clicky" response. I also added a solenoid and relay to the electronics, with the option of activating it to provide haptic feedback. In the end, the buttons ended up feeling great on their own, and I don't use the haptic feedback in-game.

![Mini Pinball Machine - Buttons](/img/mini-pinball-machine/buttons.png)


### Stereo Speakers

### LED Matrix Scoreboard
![Mini Pinball Machine - Matrix](/img/mini-pinball-machine/matrix.png)

The top panel of the enclosure holds four Adafruit LED Matrix panels, which are controlled over I2C.
I chose a bright orange color, which influenced the purple, orange and green color scheme in the software.

These LED panels give off a warm, attractive glow and contributed a lot to the overall feel of the machine.

I programmed the LED matrix with two modes. In "demo" mode, used in the menus, the panels show a small square bouncing around the edges of the matrix.

In "game" mode, the matrix shows a score and the number of balls the player has left.

### Haptic Feedback


## Software



## Summary

In the end, the software and hardware components all come together to create a cohesive experience that I believe captures the spirit of an arcade game. The art style, user input methods, enclosure, scoreboard, and other components work very well together. I'm very proud of how the project turned out!

What's next? This project has inspired me to do other similar laser-cut arcade games. In the future, I might build a retro arcade machine using [RetroPie](https://retropie.org.uk/), or 

![Mini Pinball Machine - End Result](/img/mini-pinball-machine/screen.png)
