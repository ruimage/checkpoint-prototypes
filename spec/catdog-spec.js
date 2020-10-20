const Cat = require('../cat');
const Dog = require('../dog');

describe('Система контроля за домашними животными', () => {
  describe('Функция-конструктор Кошка', () => {
    it('является функцией', () => {
      expect(Cat.toString()).toContain('function');
    });
    it('позволяет указать имя кошки', () => {
      const name = 'Мурзик';
      const cat = new Cat(name);
      expect(cat.name).toBe(name);
    });
    it('позволяет указать возраст кошки', () => {
      const age = 5;
      const cat = new Cat('Мурзик', age);
      expect(cat.age).toBe(age);
    });
    it('по умолчанию устанавливает возраст 1 год', () => {
      const cat = new Cat('Мурзик');
      expect(cat.age).toBe(1);
    });
    it('создаёт метод для издавания звука "мяу!"', () => {
      const cat = new Cat();
      expect(cat.say()).toBe('мяу!');
    });
    it('прячет метод "say" в прототип', () => {
      const cat = new Cat();
      expect(Object.prototype.hasOwnProperty.call(cat, 'say')).toBeFalse();
      expect(Object.getPrototypeOf(cat).say).toBeInstanceOf(Function);
    });
  });
  describe('Функция-конструктор Собака', () => {
    it('является функцией', () => {
      expect(Dog.toString()).toContain('function');
    });
    it('позволяет указать имя собаки', () => {
      const name = 'Жучка';
      const dog = new Dog(name);
      expect(dog.name).toBe(name);
    });
    it('позволяет указать возраст кошки', () => {
      const age = 5;
      const dog = new Dog('Жучка', age);
      expect(dog.age).toBe(age);
    });
    it('по умолчанию устанавливает возраст 2 года', () => {
      const dog = new Dog('Жучка');
      expect(dog.age).toBe(2);
    });
    it('создаёт метод для издавания звука "гав!"', () => {
      const dog = new Dog();
      expect(dog.say()).toBe('гав!');
    });
    it('прячет метод "say" в прототип', () => {
      const dog = new Dog();
      expect(Object.prototype.hasOwnProperty.call(dog, 'say')).toBeFalse();
      expect(Object.getPrototypeOf(dog).say).toBeInstanceOf(Function);
    });
  });
  describe('Наследование', () => {
    it('гарантирует, что присваивание имени и возраста происходит в родителе', () => {
      expect(Cat.toString()).not.toContain('this.name');
      expect(Cat.toString()).not.toContain('this.age');
      expect(Dog.toString()).not.toContain('this.name');
      expect(Dog.toString()).not.toContain('this.age');
      const parentCatConstructor = Object.getPrototypeOf(Cat.prototype).constructor;
      expect(parentCatConstructor.toString()).toContain('this.name');
      expect(parentCatConstructor.toString()).toContain('this.age');
      const parentDogConstructor = Object.getPrototypeOf(Dog.prototype).constructor;
      expect(parentDogConstructor.toString()).toContain('this.name');
      expect(parentDogConstructor.toString()).toContain('this.age');
    });
    it('сохраняет ссылку на конструктор потомка', () => {
      expect(Cat.prototype.constructor).toBe(Cat);
      expect(Dog.prototype.constructor).toBe(Dog);
    });
    it('гарантирует, что у кошки и собаки общий потомок', () => {
      const parentCatConstructor = Object.getPrototypeOf(Cat.prototype).constructor;
      const parentDogConstructor = Object.getPrototypeOf(Dog.prototype).constructor;
      expect(parentCatConstructor).toBe(parentDogConstructor);
    });
  });
});
