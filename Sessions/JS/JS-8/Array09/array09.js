let array01= [ 1,45,23,'aaa','bbb','ccc',''];

// for (let i = 0; i < array01.length; i++) {
//     console.log(`This is index ${i} and it points to ${array01[i]}`);
// }

// let i=0;

// while (i<array01.length) {
//     console.log(`(W) This is index ${i} and it points to ${array01[i]}`);
//     i++;
// }

for(let i in array01){
    console.log(i);
    
}
console.warn('-----------');
for(let i of array01){
    console.log(i);
}