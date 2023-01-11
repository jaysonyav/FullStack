const arr1 = [1,2,3]
const arr2 = [6,7,8]

const arr3 = [...arr1,4,5,...arr2,9]

console.log(arr3);


console.log(arr1);
console.log(arr2);
console.log(arr3);

///////////////////////

const arr4 = [5,6,7]
const arr5 = arr4;

console.log(arr4);
console.log(arr5);

arr5.push('New Item');
console.log(arr5);
console.log(arr4);

/////

const arr6 = [5,6,7];
const arr7 = [...arr6];

arr7.push('New Item');

console.log(arr6);
console.log(arr7);
