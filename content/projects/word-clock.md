---
title: "Word Clock"
group: "hardware"
draft: false
date: 2016-06-01
dateString: "September 2016"
image: "/img/thumbnails/word-clock.jpg"
---

#### Overview

This clock was a weekend project to build a dynamic piece of functional wall art.
The clock uses a matrix of letters with hidden words to display the time. 

Rather than spelling out all numbers, the clock uses phrases such as "half past five" or "quarter to ten" to indicate the time.

#### Components

I bought a cheap picture frame to use as an enclosure. The letters were created using a design printed onto a transparency sheet, with a matrix of 10mm LEDs mounted in a laser cut grid behind each letter.

The hardware uses several shift registers and channels connected to each row and column of the matrix. Individual sections of the matrix are rapidly switched on/off to give the appearance of 
any arbitrary lights being turned on at once.

The software ran on a [Particle Spark Core v1](https://docs.particle.io/datasheets/discontinued/core-datasheet/), allowing for wireless code updates and clock synchronization.


![Word Clock](/img/word-clock/IMG_5178.jpg)
![Word Clock](/img/word-clock/IMG_5176.jpg)
![Word Clock](/img/word-clock/IMG_5174.jpg)