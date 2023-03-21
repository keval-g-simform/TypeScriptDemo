/* eslint-disable @typescript-eslint/no-unused-vars */
const asOperatorType = () => {
  let myVariable: unknown = 'Hello, world!';
  let convertToUppercase = (myVariable as string).toUpperCase();
  let myNumber = <number>10;

  //"as" operator used as formatter
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
};

export default asOperatorType;
