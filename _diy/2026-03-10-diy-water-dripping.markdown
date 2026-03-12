---
layout: post
title: "DIY Solar-Powered Smart Irrigation System with ESP32-H2 and Zigbee"
date: 2026-03-10 10:00:00
description: Building a custom smart watering system using AliExpress parts, a repurposed water tank, and an ESP32-H2 Zigbee controller.
comments: true
categories:
- diy
is_blog: true
published: false  # HIDDEN – remove this line to restore this post
---

Watering plants consistently can be a real challenge, especially when you're away on vacation or just having a super busy week. While there are plenty of commercial off-the-shelf solutions out there, building one from scratch is not only a fun weekend project, but it also allows for seamless integration into your existing home automation setup! 

In this post, I'll walk you through how I built my very own DIY solar-powered water dripping system using an ESP32-H2 and Zigbee. Let's dive in!

## The Hardware

The core of the system is surprisingly simple. Instead of buying an expensive, pre-packaged smart irrigation kit, I decided to source individual parts to keep costs down and maximize customization. I wanted to add some genuine "smarts" to my balcony so I could control and monitor everything right from my home automation dashboard.

### Components You'll Need

Here is the straightforward parts list to replicate this build:

- **Water Tank**: I grabbed a [plastic water tank from Amazon](https://www.amazon.es/dp/B0D31V8QY9) to act as my main reservoir. It's sturdy and gets the job done perfectly.
- **Solar Power & Pump**: To keep things budget-friendly, I just picked up a random solar panel, a dependable LiFePO4 battery, and a standard 12V water pump from AliExpress.
- **ESP32-H2**: This little board is the brain of the entire operation! I specifically chose the H2 variant because of its built-in **Zigbee** support. This allows it to talk directly to my Zigbee coordinator without having to rely on Wi-Fi.
- **Relay**: A standard 5V relay (like the SRD-05VDC-SL-C) to safely switch the 12V pump on and off.
- **Transistor (PN2222A)**: We use this to drive the relay coil straight from the ESP32's GPIO pin.
- **Resistors**: You'll need a 1KΩ resistor (for the base of the transistor) and a 10KΩ resistor (to act as a pull-down).
- **Diode (1N4007)**: A flyback diode placed across the relay coil. This is crucial as it protects the transistor from any nasty voltage spikes when the relay turns off.

## The Schematic

Designing the control circuit was a breeze. Since the ESP32-H2 operates at 3.3V, it can't drive the 5V relay directly. That's where our PN2222A transistor comes in—it acts as a simple switch to bridge the gap and safely engage the relay. 

If you want to build this yourself, just follow this simple wiring diagram:

![Wiring Schematic](/assets/images/diy-water-dripping/schematic-web.jpg)
*Figure 1: Control circuit schematic.*

## The Build

To keep things neat, I assembled all the electronics on a small prototype board. The ESP32-H2 is remarkably compact, so it sits perfectly right next to the relay and the few support components. 

![Assembled Controller](/assets/images/diy-water-dripping/controller-annotated-web.jpg)
*Figure 2: The assembled ESP32-H2 controller neatly packed away. (I passed the original photo through nano banana 2 to handily annotate the different parts!)*

The whole system is powered by the LiFePO4 battery, which is kept topped up by the AliExpress solar panel. In operation, the ESP32-H2 simply wakes up, connects to my Zigbee mesh network, and eagerly listens for commands to trigger the relay and water the plants!

## Why Zigbee Over Wi-Fi?

You might be wondering: why bother with Zigbee when Wi-Fi is everywhere? 

Using Zigbee drastically reduces power consumption, which is an absolute must-have feature for a solar-powered device that runs 24/7. Moreover, because Zigbee creates a robust mesh network, the system remains incredibly responsive even at the far edge of my balcony where my regular Wi-Fi signal drops off completely.

## The Final Setup

And speaking of the whole system, here is what the actual final setup looks like in action, with the lettuces already enjoying their automated drips:

![System Concept](/assets/images/diy-water-dripping/final-setup-web.jpg)
*Figure 3: The actual final smart watering setup in action, with lettuces growing.*

## Conclusion

This project has been a fantastic way to combine some cheap, robust hardware from AliExpress and a repurposed Amazon water tank with a custom, low-power smart controller. I built this entirely for the fun of tinkering, but seeing the lettuces thriving on automated drips is incredibly rewarding!

Now, I can effortlessly monitor and control my balcony's irrigation from absolutely anywhere, with the peace of mind knowing that the sun is providing all the energy it needs.

For version 2.0 of this project, I'm thinking of taking things a step further by designing a proper custom PCB and adding electrovalves to independently control different water circuits around the balcony. Thanks for reading!
