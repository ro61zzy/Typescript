//enums, this is a new one - it represents a list of related constants
//instead of 
const small = 1
const medium = 2
const large = 3

//you can use enum
enum Size {Small = 1, Medium, Large}
//by default the first value of the list will be 0 but if you don't want this , you can explicitly set the values Small = 1, if not a number, then you have to explicitly set a value for each of them as ts will not infer Small = 's', Medium = 'm' and so on. Now we can declare a variable
let mySize: Size = Size.Medium
console.log(mySize) // this will give answer 2