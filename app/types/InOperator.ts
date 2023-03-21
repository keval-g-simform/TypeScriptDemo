/* eslint-disable @typescript-eslint/no-unused-vars */
interface Person {
  name: string;
  age: number;
}

interface PersonWithAddress extends Person {
  address: {
    street: string;
    city: string;
  };
}

const inOperatorExample = () => {
  // narrow down type of variable - type guard
  function printAddress(person: Person | PersonWithAddress) {
    if ('address' in person) {
      console.log(
        `${person.name}'s address is ${person.address.street}, ${person.address.city}`,
      );
    } else {
      console.log(`${person.name} has no address on file.`);
    }
  }

  const john: PersonWithAddress = {
    name: 'John The Don',
    age: 25,
    address: {
      street: 'Chai vala street',
      city: 'Furfuri Nagar',
    },
  };

  const singham: Person = {
    name: 'Singham',
    age: 30,
  };

  printAddress(john);
  printAddress(singham);

  //optional properties will exist in both sides for narrowing
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  type Human = { swim?: () => void; fly: () => void };

  function move(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
      animal;
    } else {
      animal;
    }
  }
};

export default inOperatorExample;
