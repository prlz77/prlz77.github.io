---
layout: post
title: Can not set ViewportOut in nvidia-settings
date: 2016-06-19 16:18:00
description: How to fix the screen resolution of an unrecognized monitor when it is impossible from nvidia-settings or xorg
comments: true
categories:
- blog
permalink: fix-viewport-out
---

After plugging the second monitor, I could not find the correct resolution
in nvidia-settings and it was impossible to do it manually. After having
to solve this problem for the second time, I post it here so to remember.

1. Look at nvidia-settings for the name of the monitors (In my case DFP-0 and DFP-7).
2. ```nvidia-settings -a CurrentMetaMode="DFP-0: 1920x1080+0+0, DFP-7: 1280x1024+1920+0 { ViewPortIn=1280x1024, ViewPortOut=1280x1024 }"```

Where DFP-7 is the problematic monitor and *1280x1024* is the correct resolution.

I hope this is helpful for someone else.