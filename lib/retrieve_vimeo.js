var retriever = require('n-vimeo').video;

function run(url, cb) {
	var id = url.split('/').pop();
	
	return retriever(id, function (err, data){
		if (err) return cb(err);

		// Here the API expose three new objects: raw, thumb, username
		var info = {
			title: data.raw.title,
			description: data.raw.description,
			presenters: '',
			thumbS: data.thumb.s,
			thumbM: data.thumb.m,
			thumbL: data.thumb.l
		};
		return cb(null, info);
	});
}

module.exports = {
	run: run
};