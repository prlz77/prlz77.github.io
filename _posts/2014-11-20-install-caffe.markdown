---
layout: post
title:  "How I installed Caffe in OS X Yosemite"
date:   2014-11-20 10:04:45
description: How I installed Caffe in OS X 10.10 Yosemite
categories:
- blog
permalink: install-caffe
---

I've had to install [Caffe](http://caffe.berkeleyvision.org) on my mac book with OS X Yosemite. However the installing instructions are for Mac OS 10.9 and I've discovered it's much more difficult if you do it in Mac OS 10.10.

## General dependencies

I installed the CPU version, so I can't give any feedback about using CUDA (also because my laptop doesn't have an NVIDIA) appart from the fact that I had to install CUDA6 library so that Caffe compiles correctly. For this I went to NVIDIA webpage and used their installer.

The next thing to do is edit some brew formulas because:

> In OS X 10.9, clang++ is the default C++ compiler and uses libc++ as the standard library. However, NVIDIA CUDA (even version 6.0) currently links only with libstdc++. This makes it necessary to change the compilation settings for each of the dependencies.
> - [BVLC](http://caffe.berkeleyvision.org)

So follow the instructions in [caffe installation](http://caffe.berkeleyvision.org/installation.html) BUT change whe word protobuf by protobuf241 everywhere you see it. This has to be done because Caffe won't find some functions in the latest version which is installed by brew.

I used OpenBlas which is easily installed using brew.

### Python Wrappers

To use the python wrappers it is **highly recommended** to install anaconda python. Otherwise I haven't been able to install it correctly.

To install the required python packages you can use the command:

{% highlight bash %}
conda install package # opencv for example
{% endhighlight %}

## Compiling

First, the **Makefile.config** has to be edited. 

To use openBLAS change this lines:

> BLAS_INCLUDE := /usr/local/opt/openblas/include<br>
> BLAS_LIB := /usr/local/opt/openblas/lib<br>
> BLAS := open

Also include the correct protobuf:

> INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/local/opt/protobuf241/include <br>
> LIBRARY_DIRS := $(PYTHON_LIB) /usr/local/lib /usr/lib /usr/local/opt/protobuf241/lib

Read the file to change the other needed options such as if to use anaconda or to use GPU/CPU.

I also had to change a line in the makefile where it said 10.9 instead of 10.10.

## Executing
Even though it compiles correctly, there might be some linking errors such as python fails to find protobuf when we import caffe. To solve this I edited the .bashrc to look like this:

> export PYTHONPATH=~/code/caffe-folder/python:/usr/local/lib/python2.7/site-packages/ <br>
> export PATH=$PATH:/usr/local/opt/protobuf241/bin/ <br>
> export DYLD_FALLBACK_LIBRARY_PATH=~/anaconda/lib:/usr/local/Cellar/protobuf241/2.4.1/lib/

That's how I managed it to work after struggling for a lot of time. I hope this helps some people to lose less time than I did.