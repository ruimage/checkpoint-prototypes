const Animal = require('./animal');

function Cat(name, age = 1) {
  Animal.call(this, name, age);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = () => 'мяу!';

module.exports = Cat;
