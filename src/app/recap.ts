const username: string = 'zonarolo';

const sum = (a: number, b: number) => {
  return a + b
};

sum(1, 2);

class Person {
  constructor(public age: number, public lastname: string) {}
}

const juan = new Person(27, 'Juan')
juan.age
