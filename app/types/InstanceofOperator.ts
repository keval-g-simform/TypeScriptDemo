/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';

const instanceofOperator = () => {
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

  class Cat extends Animal {
    sound: string;
    constructor(name: string, sound: string) {
      super(name);
      this.sound = sound;
    }
  }

  let myDog = new Dog('Rufus', 'Golden Retriever');
  console.log(myDog instanceof Dog); // true
  console.log(myDog instanceof Animal); // true
  console.log(myDog instanceof Cat); // false

  function playWithAnimal(animal: Animal) {
    if (animal instanceof Dog) {
      console.log(`Playing with ${animal.name} the ${animal.breed}!`);
    } else {
      console.log(`Playing with ${animal.name} the animal!`);
    }
  }
};

export default instanceofOperator;
