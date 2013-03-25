function run(url) {
	if (url.indexOf('youtube') != -1) {
		return 'youtube';
	}

	if (url.indexOf('vimeo') != -1) {
		return 'vimeo';
	}

	if (url.indexOf('confreaks') != -1) {
		return 'confreaks';
	}

	return 'unknown';
}

module.exports = {
	/*
	@public
	@param {String} url
	*/
	run: run
};