const Animal = require('./animal');

function Dog(name, age = 2) {
  Animal.call(this, name, age);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say = () => 'гав!';

module.exports = Dog;
