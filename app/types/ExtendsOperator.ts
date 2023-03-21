/* eslint-disable @typescript-eslint/no-unused-vars */
interface A {
  a: boolean;
}
interface B {
  b: string;
}
interface C extends A, B {
  c: number;
}

interface Lengthwise {
  length: number;
}

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

const ExtendsOperator = () => {
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(`Length of '${arg}' is ${arg.length}`);
    return arg;
  }

  loggingIdentity({ length: 5 });
  loggingIdentity('hello');
  loggingIdentity([1, 2, 3]);
  loggingIdentity(10);

  //The extends with classes or interfaces.
  function getDogName<T extends Dog>(dog: T): string {
    return dog.breed;
  }

  const myDog = new Dog('Buddy', 'Golden Retriever');
  const myAnimal = new Animal('Puppy');
  console.log(getDogName(myDog));
  console.log(getDogName(myAnimal));

  const abc: C = {
    c: 10,
    a: false,
    b: '',
  };

  type ExtractIdType<T extends { id: string | number }> = T['id'];

  interface NumericId {
    id: number;
  }

  interface StringId {
    id: string;
  }

  interface BooleanId {
    id: boolean;
  }

  type NumericIdType = ExtractIdType<NumericId>; // type NumericIdType = number
  type StringIdType = ExtractIdType<StringId>; // type StringIdType = string
  type BooleanIdType = ExtractIdType<BooleanId>;
};

export default ExtendsOperator;
