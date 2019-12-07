var Mouse = require('./Mouse');

function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(animal) {
	if(animal instanceof Mouse) {
		this.stomach.push(animal);
	} else {
		throw new Error('Cat can only eat mouse Meow !');
	}
	this.stomach.push(animal);
};

module.exports = Cat;