+++
Categories = ["Development", "GoLang"]
Description = ""
Tags = ["Development", "golang"]
date = "2016-10-21T19:18:37-04:00"
title = "Unreal Engine Game Project"
draft = true

+++

![ScreenShot00005](/img/ScreenShot00005.png)

For a project in the DMS program at the University of Rochester, our 5-person group was tasked with creating an interactive experience using Unreal Engine. We quickly decided that the best way to collaborate would be for each of our group members to build their own level and combine it together into a larger game. This would work better than sharing a single level because of the short amount of time we got to do the project.

With this in mind, we came up with the idea that each of our levels would be a uniquely styled island, with a center island to connect all the islands together. The plot of the game would be that your airplane crashes on the islands and you miraculously survive, but are stranded. You find a boat but must collect gas tanks in order to have enough fuel to reach the mainland. The game would have multiple islands linked together with a world map, and you would win the game once you found all ten items hidden within the islands. We decided the initial theme of the islands would be Forest, Fire, Desert, Ice, and Plains.

These themes changed a little but we roughly kept to our plans. While the rest of the group started working on their islands, I decided to start with the airplane intro scene.

I used blender to create a 3d model for the airplane windows, wings, and seats. I then used Unreal Engine’s blueprint system to script an intro sequence where you could look around with the camera but not move, and looking out the airplane window triggered smoke and a crashing animation to begin.

![Blueprint](/img/Blueprint.jpg)

*Unreal’s blueprint system, seen above, allows for easy scripting without having to use any code*

After a few seconds, the camera fades to white and loads the main level.

![ScreenShot00001](/img/ScreenShot00001.png)
![ScreenShot00000](/img/ScreenShot00000.png)

Once I finished the introduction scene, I started working on my two levels: the main hub island, where you would start the game, and my themed island. The theme for the main island was tropical, so I found some free palm tree models online and used those as vegetation.

![ScreenShot00020](/img/ScreenShot00020.png)
![ScreenShot00004](/img/ScreenShot00004.png)
![ScreenShot00002](/img/ScreenShot00002.png)


The theme for my own island was castle/plains, so I tried to create an environment that did not have very much heavy vegetation. I also wanted to experiment with moving platfrms, so the level has a jumping puzzle with a platform that flips on a timer. I used Unreal’s Matinee system to achieve this.

![ScreenShot00006](/img/ScreenShot00006.png)

Andrew Gutierrez helped out with some of the final polishing of graphics by producing the following images which we used as in-game maps which the player could open to navigate between islands. We also used these textures to decorate the HUD as the in-game screenshot shows.

![Map](/img/map.png)

In the corner of the screen, we displayed the number of items you have found. This user interface persists across all levels. Again, we used blueprints and the visual scripting system to achieve this. At the end of the game, once you reached 10 / 10 items found, the game loaded a final level which showed the credits and a congratulation message.

Because of the huge file size of the resulting project, it was impossible to upload it online. Here are some screenshots of the project.

![ScreenShot00006](/img/ScreenShot00006.png)
![ScreenShot00012](/img/ScreenShot00012.png)
![ScreenShot00017](/img/ScreenShot00017.png)
![ScreenShot00013](/img/ScreenShot00013.png)
![ScreenShot00008](/img/ScreenShot00008.png)
![ScreenShot00009](/img/ScreenShot00009.png)
![ScreenShot00010](/img/ScreenShot00010.png)
![ScreenShot00007](/img/ScreenShot00007.png)
![ScreenShot00003](/img/ScreenShot00003.png)
![ScreenShot00001](/img/ScreenShot00001.png)