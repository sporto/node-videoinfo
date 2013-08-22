var findId = require('./find_id');
var retriever = require('youtube-feeds').video;

function run(url, cb) {
	var id = findId.run(url);

	return retriever(id, function (err, data){
		
		if (err) {
			if (err.details.code === 400) return cb(true, 404)
			return cb(err);
		}
		
		var info = {
			provider: 'youtube',
			providerId: id,
			title: data.title,
			description: data.description,
			presenters: '',
			thumbS: data.thumbnail.sqDefault,
			thumbM: data.thumbnail.sqDefault,
			thumbL: data.thumbnail.hqDefault
		};
		return cb(null, info);
	});
}

module.exports = {
	run: run
};