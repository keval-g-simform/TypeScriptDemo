/* eslint-disable @typescript-eslint/no-unused-vars */
const ConditionalTypes = () => {
  type IsString<T> = T extends string ? true : false;

  type I0 = IsString<number>;
  type I1 = IsString<'abc'>;

  //with interface
  interface Animal {
    live: () => void;
  }
  interface Dog {
    woof: () => void;
    live: () => void;
  }

  type Example1 = Dog extends Animal ? number : string;
  type Example2 = RegExp extends Animal ? number : string;

  //### Distributive over union types​: ###
  type ToStringArray<T> = T extends string ? T[] : any;
  type StringArray = ToStringArray<string | number>;

  // type StringArray = ToStringArray<string> | ToStringArray<number>
  // type StringArray = (string extends string ? string[] : never) | (number extends string ? number[] : never)
  // type StringArray = string[] | never

  type WrappedWithArray<T> = T[] extends string[] ? T[] : never;
  type NotDistributive = WrappedWithArray<string | number>;

  // with conditional expression
  interface IdLabel {
    id: number;
  }

  interface NameLabel {
    name: string;
  }

  type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

  function userInfo<T extends number | string>(_idOrName: T): NameOrId<T> {
    throw 'unimplemented';
  }

  let a = userInfo('Bhagat Singh');

  let b = userInfo(1857);

  let c = userInfo(Math.random() ? 4 : 1931);
};

export default ConditionalTypes;
