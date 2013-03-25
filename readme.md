VideoInfo
=========

A node module for retrieving information of videos from popular video services.

Supported services:

- Youtube
- Vimeo
- Confreaks

Installation
-----------

	npm install videoinfo

Usage
-----

Fetch the information for a video

	vi = require('videoinfo');
	vi.fetch('http://www.youtube.com/watch?v=9eHbqMayxv8', function (err, data) {
		//...
	});

Data will have the following schema

	{
		title: "title",
		description: "description",
		thumbS: "thumbnail/path",
		thumbM: "thumbnail/path",
		thumbL: "thumbnail/path"
	}

Get the basic information about the provider and the media id based on a url:

	vi = require('videoinfo');
	var data = vi.resolve('http://www.youtube.com/watch?v=9eHbqMayxv8');

	data.provider //=> youtube
	data.id //=> 9eHbqMayxv8