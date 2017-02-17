---
layout: post
title: How to kill bash script children when crtl+c
date: 2016-09-27 16:20:00
description: How to kill all the child processes when interrupting the main bash script.
comments: true
categories:
- blog
permalink: killing-process-children
---

Using a script to run multiple tasks in background can be very handy but it can also be anoying when we press crtl+c to interrupt and the background processes keep working. There are many approaches to solve this but I have found the cleanest one is to simply trap the signal:

```bash
trap 'kill `jobs -p`; exit' INT
```

This will first kill all the background processes and then exit the main script (quitting loops as well). 
