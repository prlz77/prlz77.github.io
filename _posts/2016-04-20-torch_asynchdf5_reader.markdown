---
layout: post
title:  torch.async-hdf5-reader
date:   2016-04-20 11:09:00
description: First version of the asynchronous hdf5 reader script released.
comments: true
categories:
- blog
permalink: torchasync
---

I decided to share this script I was using in order to accelerate the training of neural nets making them to gather data in parallel. So I wrote some tests to check it performs well its basic functions and commented the code a little bit.

## Dependencies

It depends on the following libraries (can be installed with luarocks):

* threads
* hdf5
* cutorch (will be optional in the future)

## Usage
Given an hdf5 file with a dataset of 4D (e.g. num_examples, channels, height, width) data with 2D label data (e.g. num_examples, labels), it provides a class for asynchronously getting miniBatches:

{% highlight lua %}
require 'hdf5reader'
local params = {} -- params is a dictionary with the parameters:
--  params.nthread = number of threads (default = 1).
--  params.njob = max number of jobs (default = 1)
--  params.cuda (default = false)
--  params.batchSize = batchSize (default = 1)
--  params.postprocess = postprocessing function (default f(x) = x)
--  params.hdf5_path = path of .h5 file
--  params.data_field = database name for data. (default = 'data')
--  params.labels_field = database name for labels. (default = 'labels')
--  params.num_dim = index of the dimension containing all the images (default = 1)
--  params.h_dim = height of the image (default = 2)
--  params.w_dim = width of the image (default = 3)
--  params.cha_dim = index of the dimension containing rgb (default = 4)
--  params.shuffle = wether to shuffle data !!Overhead do not use with already shuffled data¡¡  (default = false)
asyncReader = AsyncReader(params)
{% endhighlight %}

This will initialize the class and copy the necessary information to the thread pool. Then one can call `asyncReader:fetchData()` in order to make a thread to retrieve a batch from the database. This is an asynchronous call so other code can be executed while the batch is being prefetched.

At the point where we need the data, the blocking call `asyncReader:getNextBatch()` can be used in order to get the data and labels tensors. Memory is allocated once at the class initialization and thus the returned tensors always reuse the same memory. In fact, tensors are duplicated so that one can read and write the retreived ones while a thread is filling the other ones.

If any error, doubt, etc. please tell me.