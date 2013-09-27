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
				return url.match(/(\/video\/|\/)([0-9]+)[\?\&]?/).pop();
				break;
			case 'youtube':
				return url.match(/(\/v\/|v=|\/embed\/)([0-9a-zA-Z_-]+)[\?\&]?/).pop();
				break;
			case 'confreaks':
				return url.match(/\d+/i)[0];
				break;
			default:
				return undefined;
		}
	}
};