//in Js, arrays can take any number of datatypes
let arr1 = [1,2,3,"4","story"]
//In ts you have to specify the type
let arr2:number[] = [1,2,3]
//or
let arr3 = [1,2,3] //here ts will infer the type of the array due to the type of data passed in the array
//or to use any
let arr4 = [] //here one can assign any type of data to the array
arr4[0] = 1
arr4[1] = "three"
arr4[2] = true
//so if you console this, the answer will be
console.log(arr4) // [1,"three",true] 