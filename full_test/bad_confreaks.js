var main = require('../lib/main');

main.fetch('http://www.confreaks.com/videos/1444288-rubyconNOTf2012-ruby-vs-the-world', function (err, data) {
	console.log('==CONFREAKS==');
	console.log(data);
});