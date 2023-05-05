//objects
//in ts you can explicitely define the property type of an employee object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void
} = {
  id: 2,
  name: "rossie",
  retire: (date: Date) => {
    console.log(date)
  }
};
//to make a property contant, that is not to be changed later, we use readonly property while setting it like in id, now, you cannot change the value of id
// so now, how can we define a function here
