import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => {
  // type Point = { x: number; y: number };
  // type P = keyof Point;

  // function f() {
  //   return { x: 10, y: 3 };
  // }
  // type x = typeof f;
  // type P = ReturnType<x>;
  // const x = 10;

  // let luckyNo = 10;
  // let rollNo: typeof luckyNo;

  // const getDetail = () => {
  //   return { name: 'Jayesh', age: 24 };
  // };

  // type DetailType = ReturnType<getDetail>;

  // type InfoType = ReturnType<typeof getDetail>;

  //  typeof undeclaredVar;
  const msgBox = (data: string) => {
    return data;
  };

  let shouldContinue: ReturnType<typeof msgbox>;

  // typeof undeclaredVar;
  // typeof letVar; // ReferenceError
  // typeof constVar; // ReferenceError
  // typeof sampleClass; // ReferenceError

  // let letVar;
  // const constVar = 'John';
  // class sampleClass {}

  type Cat = {
    name: string;
    age: number;
    hungry: boolean;
  };

  type Hungry = Cat['hungry' | 'age']; // type Hungry = boolean
  const isHungry: Hungry = true; // OK - `Hungry` is an alias for `boolean`

  // The index can be a type, not just a literal:

  const user = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 23 },
    { name: 'Eve', age: 38 },
  ];

  type Person = (typeof user)[number];
  type Age = (typeof user)[number]['age'];

  const key = 'age';
  type key = 'age';
  type year = Person[key];

  return (
    <SafeAreaView style={styles.container}>
      <Text>TypeScript Demo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
