const ConditionalTypes = () => {
  interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }

  type Example1 = Dog extends Animal ? number : string;

  type Example2 = RegExp extends Animal ? number : string;

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
  type BooleanIdType = ExtractIdType<BooleanId>; // won't work

  //### Distributive over union types​: ###
  type ToStringArray<T> = T extends string ? T[] : never; ////To avoid it add [] to the type in condition

  type StringArray = ToStringArray<string | number>;

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

  let c = userInfo(Math.random() ? 'Rajguru' : 1931);

  //### Inferring Within Conditional Types: ###
  type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

  type Str = Flatten<string[]>;

  type Num = Flatten<number>;
};

export default ConditionalTypes;
