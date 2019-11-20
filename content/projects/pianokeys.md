+++
Categories = ["Development", "GoLang"]
Description = ""
Tags = ["Development", "golang"]
date = "2016-10-21T19:18:37-04:00"
title = "Giant Piano Keys"

+++

This set of giant piezoelectric piano keys won 2nd place at the University of Rochester's 2016 Dandyhacks hackathon. When I started the hackathon, I decided I wanted to tackle a hardware/software hack. I decided on building a large keyboard-input device that would be pressable using your hands or feet, and would send input to a computer. 

This idea was influenced by a project that a Microsoft team did at one of their BUILD Developer conferences: https://www.youtube.com/watch?v=eU39xbaPvz8


I liked the idea for an instrument, but unlike the Microsoft project, my piano did not run Windows. I chose to use an Arduino and communicate with the PC over a USB-Serial connection.

The original intention was to build a custom driver that could map each key to any key press, allowing you to control virtually any application from the piano keys! Because of time restrictions I narrowed the scope of my project so the device inputted number key presses which were used by a music synthesizer and visualization built using Processing.

I started the project by going to Home Depot and buying some plywood and 2x4s, which I divided up into. Because of time restrictions I wasn't able to order piezo elements (For use as pressure sensors) online, so I bought piezo buzzers from a local RadioShack and cracked them open to extract the element.

I then built each key, putting colored LED strips and a piezo element under a piece of plexiglass that I frosted using a sander. I interconnected all the keys using a bundle of wires which connected to a single arduino which controlled the whole system. The arduino monitored the voltage from each piezo element, sending a signal if any of the elements went over the threshold that indicated they were being pressed or tapped.

Finally, I built the visualization and synthesizer using Processing. The software read the USB-Serial input and had multiple advanced features; looping, layering, multiple instruments were all included in the project.

*Work-In-Progress:*
![IMG_1283](/img/IMG_1283.JPG)
![IMG_1286](/img/IMG_1286.JPG)

*Finished set of Keys:*
![Finished keys](/img/dandyhacks2016.jpg)