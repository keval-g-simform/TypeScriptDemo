/* eslint-disable @typescript-eslint/no-unused-vars */

const InferOperator = () => {
  type T0 = string[];
  type T1 = () => string;

  type UnpackArrayType<T> = T extends (infer R)[] ? R : T;
  type t1 = UnpackArrayType<number[]>; // t1 is number
  type t2 = UnpackArrayType<string>; // t2 is string

  type Wrong1<T extends (infer U)[]> = T[0];
  type Wrong2<T> = (infer U)[] extends T ? U : T;
  type Wrong3<T> = T extends (infer U)[] ? T : U;
  type right<T> = T extends (infer U)[] ? U : T;

  //Some built in type which implemented using infer
  type UnpackedFn<T> = T extends (...args: any[]) => infer U ? U : T;

  type U1 = UnpackedFn<T1>; // string
  type U2 = UnpackedFn<T0>; // string[]

  type User = {
    id: number;
    name: string;
  };

  //can extract multiple type
  type PropertyType<T> = T extends { id: infer U; name: infer R } ? [U, R] : T;
  type U3 = PropertyType<User>; // [number, string]

  type PropType<T> = T extends { id: infer U; name: infer U } ? U : T;
  type U4 = PropType<User>; // string | number

  // TS allows us to add an optional extends clause to the infer type to specify explicit constraints on type variables.
  // type FirstIfString<T> = T extends [infer S, ...unknown[]]
  //   ? S extends string
  //     ? S
  //     : never
  //   : never;

  type FirstIfString<T> = T extends [infer S extends string, ...unknown[]]
    ? S
    : never;

  type A = FirstIfString<[string, number, boolean]>;
  type B = FirstIfString<['Hello', number, boolean]>;
  type C = FirstIfString<['Hello' | 'World', number, boolean]>;
  type D = FirstIfString<[boolean, number]>;
};

export default InferOperator;
