/* eslint-disable @typescript-eslint/no-unused-vars */
const keyofOperator = () => {
  type User = {
    id: number;
    name: string;
  };
  type UserKeys = keyof User; // "id" | "name"
  type U3 = User[keyof User];

  function getProperty(obj: User, key: UserKeys): U3 {
    return obj[key];
  }

  const user: User = {
    name: 'Khiladi',
    id: 786,
  };
  const userName = getProperty(user, 'name');

  //when type in index signature
  type ArrayType = { [n: number]: string };
  type A = keyof ArrayType;

  type MapType = { [k: string]: boolean };
  type M = keyof MapType;

  // const numberAsKey = {
  //   10: 'User Id',
  // };

  // const keyValue = numberAsKey['10']; // JS always coerced number to string, so numberAsKey['10'] and numberAsKey[10] is same.

  // can get type of primitives types
  type K1 = keyof boolean; //"valueOf"
  type K2 = keyof number; //"toFixed" | "toExponential" | "toPrecision" | "toString" | "toLocaleString" | "valueOf"
  type K3 = keyof any; //string | number | symbol

  //In class
  class Person {
    id: number = 666;
    name: string = 'Hello';
  }

  type PersonProp = keyof Person; //"id" | "name"

  //In Enum data type
  enum HttpMethod {
    Get,
    Post,
  }

  type K4 = keyof typeof HttpMethod;
};

export default keyofOperator;
