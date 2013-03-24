var retriever = require('youtube-feeds').video;

function run(id, cb) {
	return retriever(id, function(err, data){
		if (err) return cb(err);

		var info = {
			title: data.title,
			description: data.description,
			thumbS: data.thumbnail.sqDefault,
			thumbM: data.thumbnail.sqDefault,
			thumbL: data.thumbnail.sqDefault
		}
		return cb(null, info);
	});
}

module.exports = {
	run: run
};