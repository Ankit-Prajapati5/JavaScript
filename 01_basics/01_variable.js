const accountId = 12345
let accountEmail = "pj@gmail.com"
var accountPassword = "9090"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ank@gmail.com"
accountPassword = "5000"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

