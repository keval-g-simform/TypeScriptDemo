/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-unused-vars */
const tupleType = () => {
  let actor: [string, number, boolean];
  actor = ['Ram Charan', 1, true];

  let song: [string, number?, ...boolean[]];
  song = ['Naatu Naatu', , true, false, true, false];

  let employee: [number, string] = [75, 'Virat Kohli'];
  employee.push(true); // have to pass only value of type number or string
};

export default tupleType;
