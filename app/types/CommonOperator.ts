const CommonOperator = () => {
  //"in" operator
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  type Human = { swim?: () => void; fly?: () => void };

  function move(animal: Fish | Bird) {
    if ('swim' in animal) {
      return animal.swim();
    }
    return animal.fly();
  }

  function moves(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
      animal;
    } else {
      animal;
    }
  }

  //"as" operator as formatter
  type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<
      string & Property
    >}`]: () => Type[Property];
  };

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type LazyPerson = Getters<Person>;

  const x = 'hello' as number;

  //Extend
  interface A {
    a: boolean;
  }
  interface B {
    b: string;
  }
  interface C extends A, B {
    c: number;
  }

  type D = A & {
    d: null;
  };

  const xcc: C = {
    c: 10,
    a: false,
    b: '',
  };

  //Tuple Types
  let employee: [number, string] = [1, 'Steve'];
  employee.push('2');
};

export default CommonOperator;
