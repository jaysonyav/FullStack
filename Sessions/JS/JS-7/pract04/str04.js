let str01="This is a tEst string to practicE / TEST include and indexof()";

console.log(str01.includes('ice'));

console.log(str01.indexOf('i'));

console.log(str01.lastIndexOf('i'));

console.log(str01.search(/tEst/i));

// console.log(str01.replace(/i/gi,'-I-'));

// let str02 = "Mr. Brown has a brown house and a brown car"

// console.log(str02.replace(/brown/gi,'blue'));

// console.log(str02.replaceAll('brown','red'));

let str = 'clarusway@Clarusway.com is our email address';

console.log(str.startsWith('clarusway'));
console.log(str.startsWith('Clarusway'));
console.log(str.startsWith('Clarusway',10));

console.log(str.endsWith('address'));
console.log(str.endsWith('Clarusway',19));
