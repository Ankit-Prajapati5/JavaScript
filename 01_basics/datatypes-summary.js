// Primitive ( call by value) = String,Number,Boolean,null,undefined,Symbol,BigInt
// Non-primitive ( call by reference) = Array , Objects , Functions


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 34567897383793n
console.log(typeof bigNumber);

const heros = ["god","demon","human"];

let myObj = {
    name: "Ankit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello Hii")

}
console.log(typeof myFunction)
console.log(typeof myObj);
console.log(typeof heros)
console.log(typeof anotherId);


