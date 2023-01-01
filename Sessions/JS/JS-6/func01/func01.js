function oldSchool(pre, name){
    console.log(`Good Morning ${pre}.${name}`);
}

oldSchool('Mr','John')

const newAPP = (pre, uname) =>{
    console.log(`Good morning ${pre}.${uname}`);
}

newAPP('Mrs','Smith')

////////////////////

function addOS(num1, num2){
    let result = num1+num2;
    return result

}

console.log(addOS(5,8));

const addNA= (num1, num2) => num1+num2;

console.log(addNA(7,3));

///////////

const findMax= (num1, num2) => num1>num2 ? num1 : num2;

function findMaxOS(num1, num2){
    return num1>num2 ? num1 : num2;
}

console.log(findMax(5,8));
console.log(findMaxOS (5,8));

const checker=(num1) => num1%2 ? "odd" : 'even';


console.log(checker(5));

const risk=(smoking, alcohol, over65) => smoking || alcohol || over65 === 1 ? 'There is risk' : 'No risk';

console.log(risk(0,0,0));
