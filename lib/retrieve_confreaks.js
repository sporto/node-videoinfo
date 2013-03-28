var retriever = require('confreaks').scrape;

function run(url, cb) {

	return retriever(url, function (err, data){
		if (err) return cb(err);

		if (!data) {
			return cb(null, undefined);
		}

		var info = {
			title: data.title,
			description: data.description,
			presenters: data.presenters,
			thumbS: "",
			thumbM: "",
			thumbL: ""
		};
		return cb(null, info);
	});
}

module.exports = {
	run: run
};