//console.log("test connection");

// console.log(5+6);
// console.log(5*6);
// console.log(9%2);

// let x = 10;
// // ++ increment does increment after every expression handled
// let y = x++;

// console.log(y);
// console.log(x);

// let a = 10;
// let b = --a;

// console.log(b);

// let x = 10;
// let y = 10;

// console.log(x==y);
// console.log(x!=y);

// let a = 10;
// let b = '10';

// console.log(a == b);
// console.log(a === b);
// console.log(a !== b);

// let x = 10;
// console.log(Boolean(x));
// console.log(!!x);

// let text= 'Hello';
// console.log(!text);
// let y = 0;
// console.log(!y);

// //x is in between 5 and 15
// let x = 11;
// // console.log(x > 5 && x < 15);

// // checking odd numbers
// console.log(x % 2 == 1);
// console.log(Boolean(x % 2 ));

//divisible by 5
// let x = prompt('Enter a number');
// console.log(!Boolean(x%5));

//are you at risk?

// const alcohol = confirm("Do you take alcohol")
// const cigarette= confirm("Do you smoke")
// const age = confirm("Are you older than 65")

// const risk= alcohol || age || cigarette;
// console.log(risk);

// const username = "clarusway"
// const password = "12345"

// const usernameEntered = prompt ("Enter username: ")
// const passwordEntered = prompt ("Enter password: ")

// const isAuthenticated = usernameEntered===username && passwordEntered===password;

// console.log(isAuthenticated)


// // Age check
// // If age is in between 25-30, you can take this test
// const agentered = prompt ("What is your age?")
// const checkAge = agentered >= 25 && agentered <= 30;
// //Provide a meaningful response
// // If in nange ---> Log You can take test
// // If not _ _ > Log You are not suitable
// console.log (checkAge);
// console.log (checkAge && "You can take test"|| 'You are not eligible!');

// // type conversion
// let x = 12;
// let y = '12';

// console.log(x+y);// join
// // x into string and join 2 strings

// console.log(x/y);
// // automaticlaly into number

// console.log(x + Number (y));
// console.log(x + parseInt (y));
// console.log(x + parseFloat (y));
// console.log(x +  +y);

// const age= prompt('Enter your age!');
// console.log(age, typeof age);

// const age2= +prompt('Enter your age!');
// console.log(age, typeof age2);

// Not a Number NaN

let y = 'text';
console.log(Number(y));

const age = Number(prompt('enter your age'));
console.log(age);
console.log(isNaN(age));
