---
title: "Line Follower Robot"
group: "hardware"
draft: false
date: 2020-07-01
dateString: "July 2020"
image: "/img/thumbnails/line-follower-thumbnail.jpg"
---

{{< youtube 0DcV46YkHR8 >}}
#### Overview

I built a small line follower robot to sharpen my ROS and OpenCV skills. The robot can detect and follow tape lines on my floor. It runs ROS on a Raspberry Pi, uses OpenCV to detect lines, and an Arduino Pro Micro to control differential steering.

#### Architecture

The robot uses a pipeline that takes in images from a Raspberry Pi camera, processes the image to
produce a target speed and angle, and communicates with a motor driver and hardware. The architecture is outlined below:
```
┌────────────────────────────────┐ ┌─────────────────────────────────────────────────────────┐
│ ROBOT HARDWARE                 │ │ ROS NODES                                               │
│ ┌──────────────┐ Raw           │ │ ┌────────────────────────┐ Processed ┌────────────────┐ │
│ │ Raspberry Pi │ Image         │ │ │ Image Preparation      │ Image     │ Line Detection │ │
│ │    Camera    ├───────────────┼─┼─► Threshold,             ├───────────► Path Planning  │ │
│ └──────────────┘               │ │ │ Perspective-Correction │           └───────┬────────┘ │
│                                │ │ └────────────────────────┘                   │          │
│ ┌──────────────┐ Speed/Angle   │ │                                              │          │
│ │ Arduino Pro  │ Command       │ │ ┌────────────────────────┐  Speed/Angle      │          │
│ │ Micro        ◄───────────────┼─┼─┤ Serial Communication   │  Command          │          │
│ └──────┬───────┘               │ │ │ Node                   ◄───────────────────┘          │
│        │ Motor                 │ │ └────────────────────────┘                              │
│        │ Command               │ │                                                         │
│ ┌──────▼─────────────────┐     │ └─────────────────────────────────────────────────────────┘
│ │       Dual Motor       │     │
│ │       Controller       │     │
│ └─────┬────────────┬─────┘     │
│       │            │           │
│ ┌─────▼────┐ ┌─────▼─────┐     │
│ │Left Motor│ │Right Motor│     │
│ └──────────┘ └───────────┘     │
│                                │
└────────────────────────────────┘
```

You can check out more of the code and implementation details at https://github.com/chrisdalke/ros-line-follower-robot.