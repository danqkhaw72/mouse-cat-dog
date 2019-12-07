var Dog = require('./Dog');
var dog = new Dog('Jax');

var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat();
var mouse = new Mouse('Jerry');


dog.SayHi();

try {
	cat.eat(dog);
} catch (error) {
	console.log('Error while cat eating a dog // Lol :3');
}
