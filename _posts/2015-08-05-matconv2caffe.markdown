---
layout: post
title:  matconv2caffe v0.1 released
date:   2015-08-05 17:29:00
description: First release of the matconv2caffe utility to import matconvnet models from Caffe.
comments: true
categories:
- blog
permalink: matconv2caffe0.1/
---

## Convert Matconvnet models to Caffe with matconv2caffe.

There is already a script to import caffe models to matconvnet thanks to [@vedaldi](https://github.com/vlfeat/matconvnet/blob/master/utils/import-caffe.py). However, we needed the oposite so I made a script that converts the .caffemodel and extracts a deplotment .prototxt model definition and the average image. Currently it only works for standard CNNs and Dropout has not been tested to work.

It successfuly works for the caffenet .mat model (correctly predicts the 'cat.jpg' image).
 

<iframe src="https://ghbtns.com/github-btn.html?user=prlz77&repo=matconv2caffe&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=prlz77&repo=matconv2caffe&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=prlz77&repo=matconv2caffe&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
