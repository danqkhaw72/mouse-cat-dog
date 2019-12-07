const chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

Dog.prototype.SayHi = function() {
	console.log('Hi! I am a dog. My name is '+ chalk.blue(this.name));
};

module.exports = Dog;