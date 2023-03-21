/* eslint-disable @typescript-eslint/no-unused-vars */
const templateTypes = () => {
  type World = 'world';
  type Greeting = `hello ${World}`;
  let greeting: Greeting = 'hello world';

  type EmailAddress = `${string}@${string}.${string}`;
  const myEmailAddress: EmailAddress = 'john.doe@example.com';

  // Interpolated position, it create type by one to one mapping
  type HorizontalPosition = 'left' | 'center' | 'right';
  type VerticalPosition = 'top' | 'center' | 'bottom';
  type Positions = `${HorizontalPosition}-${VerticalPosition}`;

  type ToastPropTypes = {
    position: 'center' | Exclude<Positions, 'center-center'>;
  };

  // It can be use with string, number, bigint, boolean, null, undefined (not with array and object)​
  type Numbers = 1 | 2 | 3 | 4 | [1];
  type NumberGreeting = `hello ${Numbers}`;

  //with built-in string manipulation types
  type MessageType = 'error' | 'notification' | 'request';
  type MessageId = `${Uppercase<MessageType>}_ID`;

  type MessageName = `${Capitalize<MessageType>}`;

  type MessageIdLower = `${Lowercase<MessageId>}`;

  type MessageIdCapitalized = `${Capitalize<MessageIdLower>}`;
};

export default templateTypes;
