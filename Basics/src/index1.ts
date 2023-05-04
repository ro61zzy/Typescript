// if you have a large number you separate it using underscore
let sales: number = 123456789
let course: string ="Typescript"
let is_published: boolean = true

//type any - can take any value
let level
//this will be initialized to type any, and hence can be initializee to any type of data
level = 1
level = 'a'
//using type any just shows how typescript is then not impotant 
//this will be set to any type implicitly, ts will infer, it has not been set
// function render(document) {
//     console.log(document)
// }
//this has been set explicitly
function another(document: any){
    console.log(another)
}
