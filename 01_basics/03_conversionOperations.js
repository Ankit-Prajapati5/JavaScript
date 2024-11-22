let score = "33abc"
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "ankit"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "ankit" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)

// ******************** Operations ********************************

let value = 3
let negvalue = -value
console.log(negvalue)

let str1 = "Hello"
let str2 = " Ankit"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true)
console.log(+"")