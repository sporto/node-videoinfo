var main = require('./lib/main');

main.fetch('http://vimeo.com/26355165', function (err, data) {
	console.log('==VIMEO==')
	console.log(data);
});

main.fetch('http://www.youtube.com/watch?v=9eHbqMayxv8', function (err, data) {
	console.log('==YOUTUBE==');
	console.log(data);
});

main.fetch('http://www.youtube.com/v/Gz18KskDxv4&fs=1&rel=0&wmode=opaque&ap=%2526fmt%3D18', function (err, data) {
	console.log('==YOUTUBE ALT URL FORMAT==');
	console.log(data);
});

main.fetch('http://www.youtube.com/embed/0bmbGsJDE1o?fs=1&rel=0&wmode=opaque&ap=%2526fmt%3D18', function (err, data) {
	console.log('==YOUTUBE EMBED URL FORMAT==');
	console.log(data);
});

main.fetch('http://player.vimeo.com/video/70228559?title=0&portrait=0', function (err, data) {
	console.log('==VIMEO ALT URL FORMAT==')
	console.log(data);
});

main.fetch('http://www.confreaks.com/videos/1288-rubyconf2012-ruby-vs-the-world', function (err, data) {
	console.log('==CONFREAKS==');
	console.log(data);
});