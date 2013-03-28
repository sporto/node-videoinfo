var retriever = require('youtube-feeds').video;

function run(url, cb) {
	var id = url.split('=').pop();

	return retriever(id, function (err, data){
		if (err) return cb(err);

		if (!data) {
			return cb(null, undefined);
		}

		var info = {
			title: data.title,
			description: data.description,
			presenters: '',
			thumbS: data.thumbnail.sqDefault,
			thumbM: data.thumbnail.sqDefault,
			thumbL: data.thumbnail.sqDefault
		};
		return cb(null, info);
	});
}

module.exports = {
	run: run
};