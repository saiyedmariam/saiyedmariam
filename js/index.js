// TASK 1
// If a has value 3, b has value 5, and c doesn't have a value

let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
alert(`
var a = 3;
var b = 5;
var c;
--------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b : ${a += b}
a -= b : ${a -= b}
a *= b : ${a *= b}
a /= b : ${a /= b}
a %= b : ${a %= b}
a == b : ${a == b}
a != b : ${a != b}
a > b : ${a > b}
a < b : ${a < b}
!a && !c : ${!a && !c}
!a || !c : ${!a || !c}
`
);

// TASK 2
// Declare the variable first_name and assign it with the value of your first name;
let first_name = "Mariam";

// Declare the variable last_name and assign it with the value of your last name;
let last_name = "Saiyed";

// Declare the variable last_name and assign it with the value of your last name;
let email = "saiy0007@algonquinlive.com";

// Declare the variable output;
let output;

// Expression concatenating variables
output = `My name is ${first_name} ${last_name} you can contact me at ${email}`;

// Alert output
alert(output);
