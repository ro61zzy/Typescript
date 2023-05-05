//objects
//in ts you can explicitely define the property type of an employee object
let employee: {
  readonly id: number;
  name: string;
} = {
  id: 2,
  name: "rossie",
};
//to make a property contant, that is not to be changed later, we use readonly property while setting it like in id, now, you cannot change the value of id
