let arr1 = ['abc','def']
let arr2 = [2,3,7,9]
let arr3 = [true,true,false]

let arrays=arr1.concat(arr2,arr3, arr1);

console.log(arrays);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log(arrays.indexOf('def',2));

console.log(arrays.lastIndexOf('def',9));

const arr04 = ['AA','CC','GG','BB','B','A','E']

console.log(arr04);
console.log(arr04.reverse());
console.log(arr04.sort());

const arr05 = [1,10,5,40,23,7,17]

console.log(arr05.sort((a,b)=>a-b));
console.log(arr05.sort((a,b)=>b-a));