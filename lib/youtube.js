var youtube = require('youtube-feeds')

function run(id, cb) {
	return youtube.video(id, cb);
}

module.exports = {
	run: run
};