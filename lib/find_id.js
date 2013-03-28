var findProvider = require('./find_provider');

module.exports = {
	/*
	@public
	@param {String} url
	*/
	run: function (url) {
		var provider = findProvider.run(url);

		switch(provider) {
			case 'vimeo':
				return 	url.split('/').pop();
				break;
			case 'youtube':
				return url.split('=').pop();
				break;
			default:
				return undefined;
		}
	}
};