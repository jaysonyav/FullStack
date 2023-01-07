const arr = ['red', 'blue', 'purple','white','orange']

console.log(arr);

let a = arr.pop()

arr.push(arr.shift())
arr.unshift(a)

console.log(arr);

// console.log(arr.slice(1));
let newSubSet= arr.slice(1,3);
console.log(newSubSet);

console.log(arr);

