let str= 'Clarusway';

// Slice

console.log(str.slice(6)); //way
console.log(str.slice(-3)); //way

console.log(str.slice(1,4)); //lar
console.log(str.slice(4,1)); //

console.log(str.slice(3,-2));//rusw
console.log(str.slice(2,-2));//rusw

console.warn(str);

// Substring

console.log(str.substring(6));//way
console.log(str.substring(-3));//Clarusway ---- Not friendly with indexes

console.log(str.substring(1,4));//lar
console.log(str.substring(4,1));//lar

console.log(str.substring(3,-2));// str.substring(3,0) -> str.substring(0,3)

// substr

// str.substr()

let str2="Full Stack";

console.log(str+" "+str2);

console.log(str.concat(" ",str2));

console.log(str);
console.log(str2);

let str03 = 'Clarusway to: Full Stack';

console.log(str03.split('',10));

console.log(str03.toLocaleLowerCase());
console.log(str03.toLocaleUpperCase());

console.log(str03);


let str04 = '       Clarusway to: Full Stack     '

console.log(str04 + '.');
console.log(str04.trim()+'.');
console.log(str04.trimEnd()+'.');
console.log(str04.trimStart()+'.');




