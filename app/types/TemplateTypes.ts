type World = 'world';

type Greeting = `hello ${World}`;

type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// It can be use with string, number, bigint, boolean, null, undefined (not with array and object)​
type Numbers = 1 | 2 | 3 | 4 | [1];
type NumberGreeting = `hello ${Numbers}`;

//with built-in string manipulation types
type MessageType = 'error' | 'notification' | 'request';
type MessageId = `${Uppercase<MessageType>}_ID`;

type MessageName = `${Capitalize<MessageType>}`;

type MessageIdLower = `${Lowercase<MessageId>}`;

type MessageIdCapitalized = `${Capitalize<MessageIdLower>}`;

//Example
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastPropTypes = {
  position:
    | 'center'
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>;
};
