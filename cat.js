/* eslint-disable object-curly-spacing */
const {Animal} = require('./animal');

function Cat(name, age = 1) {
  Animal.call(this, name, age);
}

Cat.prototype.say = function () {
  return 'мяу!';
};

Object.setPrototypeOf(Cat.prototype, Animal.prototype);

module.exports = Cat;
