const users = ['Jamil','Brad','Daniel','Dana','Michael']

const numbers= [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < users.length; i++) {
//     console.log('Hello '+users[i]);
// }

// users.forEach((element)=>console.log('Hello '+element));
// users.forEach((user,index)=>console.log('Hello user '+index+' '+user));
// users.forEach((user,index,array)=>console.log('Hello user '+array[index]));

// const payments=[100,200,-400,500,-600];

// payments.forEach(payment =>{
//     if(payment >0){
//         console.log('You recived ' + payment + ' USD');
//     }else{
//         console.log('You paid ' + payment + ' USD');
//     }
    
    
    
// })

// Multiply every element in numbers, and return a new array


const arr=[];

for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers[i]*2)
    
}

console.log(arr);


const arr2 = [];

numbers.forEach(number => arr2.push(number*2))

console.log(arr2);

const arr3 = numbers.map(number => number*2)

console.log(arr3);


//Filter the names and return those with  4 letters

const arr4 = users.filter(user=>user.length<5)

console.log(arr4);

const arr5 = numbers.filter(number=>number%2).map(oddNumber=>oddNumber**2 )

console.log(arr5);

const arr6 = numbers.reduce((acc,number)=>acc+number)
console.log(arr6); 