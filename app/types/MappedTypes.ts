/* eslint-disable @typescript-eslint/no-unused-vars */
const mappedTypes = () => {
  type WrongType = {
    count: string;
    fontSize: boolean;
  };

  type OptionsFlags<Type> = {
    [Property in keyof Type]: number;
  };

  type FeatureOptions = OptionsFlags<WrongType>;

  //can create new type using template literal
  interface Person {
    name: string;
    location: string;
  }

  type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<
      string & Property
    >}`]: () => Type[Property];
  };

  type LazyPerson = Getters<Person>;

  //can exclude any Property from type
  type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, 'type'>]: Type[Property]; //Remove the 'type' property
  };

  // type A = Exclude<'lal' | 'bal' | 'pal' | 'tal', 'tal'>;

  interface Circle {
    type: 'circle';
    radius: number;
  }

  type KindlessCircle = RemoveKindField<Circle>;

  //pass with union type
  type EventConfig<Events extends { type: string }> = {
    [E in Events as E['type']]: (event: E) => void;
  };

  type SquareEvent = { type: 'square'; x: number; y: number };
  type CircleEvent = { type: 'circle'; radius: number };

  type Config = EventConfig<SquareEvent | CircleEvent>;
};

export default mappedTypes;
