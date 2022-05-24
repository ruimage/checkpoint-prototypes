/* eslint-disable object-curly-spacing */
const {Animal} = require('./animal');

function Dog(name, age = 2) {
  Animal.call(this, name, age);
}

Dog.prototype.say = function () {
  return 'гав!';
};

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

module.exports = Dog;
