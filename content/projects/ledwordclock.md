+++
Categories = ["Development", "GoLang"]
Description = ""
Tags = ["Development", "golang"]
date = "2016-10-21T19:18:37-04:00"
title = "LED Word Clock"
draft = true

+++

For a project at the local Makerspace, I built picture-frame sized word clock that displays the current time. The clock is synced with global atomic time and programmed using the Photon cloud-connected prototyping board.

The project consisted of several steps. The first step was to find a cheap picture frame and remove the backing to make room for the next surface. I created a rectangular wood piece with a grid of holes from LEDs. 

Then, in Photoshop, I created a grid of letters in white on a black background. I brought this to a print shot which printed the letter grid on transparency. This formed a mask over the LEDs.

The next step was to create a grid of LEDs which could each individually be turned on and off. I wired the LEDs in a method similar to the following format:

![led grid](/img/ledgrid.png)

All of the columns and rows were individually connected to ground and 5v via transistors. This meant that to turn on an individual led, the software would need to turn on the transistor for the row and column of the desired pixel at the same time. Doing this fast enough meant that through persistence-of-vision, it would appear as one image.

I optimized the code so that it would draw entire rows at one time - turning all the columns on for a given row, waiting a few milliseconds, and then moving to the next row. This is a better technique than flashing through each individual LED, and allowed the lit LEDs to appear brighter.

Lastly, I set up the software on a Photon board, which is an Arduino-type prototyping platform that is internet and cloud-connected. The Photon has an onboard WiFi chip, and connects to a cloud-based programming IDE that downloads the code automatically to the board.

This meant that I could tweak the code even after the clock was completely assembled. This was very convenient compared to the USB-Serial connection that other prototyping platforms have. In addition, this allowed me to add some cool features - Every time the clock is disconnected and then reconnected from power, it connects to the Internet and synchronizes its internal clock to remain at the correct time.

I don't currently have pictures of the final product (Coming soon)...