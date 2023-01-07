let var01 = 3;
let var02 = true;

let var03 = 'Testing';
console.log(var03[02]);
var03[02] = 'S';
console.log(var03);

// var03.split

let arr01 = ['Jhon','Doe',34,'MI',true];

let arr02 = new Array('Cyristal','Silver',23,'TX',false)

console.log(arr01.length);
console.log(arr01[2]);
console.log(arr01[-1]);
console.log(arr01[5]);

console.log(typeof arr01);
console.log(typeof arr02);

console.log(Array.isArray(arr01));
console.log(arr02 instanceof Array);