const IndexedTypes = () => {
  //### Access an object type's property: ###
  type Bird = {
    name: string;
    age: number;
    isHungry: boolean;
  };

  type Hungry = Bird['isHungry' | 'name']; // type Hungry = boolean
  const isBirdHungry: Hungry = true;

  // The index can be a type, not just a literal:
  const key = 'age';
  type AgeWithKey = Bird[key]; //can't pass variable
  type AgeProp = 'age';
  type Age = Bird[AgeProp]; // type Age = number
  const BirdAge: Age = 3;

  //###Access an array type's element: ###
  //by getting the type at the array's indices (which are numbers
  type UserListType = { name: string; age: number }[];

  type User = UserListType[number];
  type Username = UserListType[number]['name'];

  const user: User = { name: 'The one and only', age: 25 };
  const username: Username = 'The one and only';

  type BirdNames = Array<string>;

  type BirdName = BirdNames[number]; // type BirdName = string
  const myBirdsName: BirdName = 'Sparrow';

  // ### Access a tuple type's elements: ####
  type TupleExample = [string, number];

  const name: TupleExample[0] = 'tuple'; //`TupleExample[0]` is an alias for `string`
  const age: TupleExample[1] = 6; //`TupleExample[1]` is an alias for `number`
  const wrong: TupleExample[2] = true; // Error - `TupleExample` only has two elements

  // ### nested accesses: ###
  type BirdType = {
    name: string;
    age: number;
    hungry: boolean;
    personality: {
      friendly: boolean;
      hungerLevel: number;
    };
  };

  type Friendly = BirdType['personality']['friendly']; // type Friendly = boolean
  const isFriendly: Friendly = true;

  return {
    isBirdHungry,
    BirdAge,
    user,
    username,
    myBirdsName,
    name,
    age,
    wrong,
    isFriendly,
  };
};
export default IndexedTypes;
