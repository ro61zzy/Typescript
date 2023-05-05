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
// now we have problem 
//1. to define another employee we have to repeat the same structure
//2. the other employee may have extra parameters more than those we have defined
//3. this structure is making our code too much and hard to understand
//this is where we use a type alias
//let's define a type alias, use Pascal case
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void
}
//now when defining a new employee you just need to call the alias and you can add more properties
let employee1: Employee = {
    id: 2,
    name: "rossie",
    retire: (date: Date) => {
    console.log(date)
}
}
// now you can reuse it multiple times