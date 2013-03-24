var main = require('../lib/main');
var assert = require('chai').assert;

describe('main', function () {

	it('has a run function', function () {
		assert.isFunction(main.run);
	});

});