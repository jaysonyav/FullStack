// x=10;

// console.log(x);

// var x;

// y=10
// console.log(y);

// let y; 

// sayHi()

// function sayHi(){
//     console.log('Hello');
// }

// sayHello()

// var sayHello = function(){
//     console.log('Hello');
// }

// function greet(params) {
//     console.log(`Hello ${params}`);
// }

// greet("John")
// greet('Jane')


// function number(){
//     let numb1=+prompt('Sayi gir la');
//     let numb2=+prompt('Bi daha gir la');
//     console.log(numb1+numb2);
// }

// number();

// let add= function (num1,num2 ){
//     const result=num1+num2;
//     return result
// }

// // console.log(result);
// const res1= add(4,4);
// console.log(res1);
// console.log(add(5,10));



// function reverse(word){
//     let result="";
//     for (let i = 0; i < word.length; i++) {
//         result=word[i]+result;
//     }
//     return result
// }

// console.log(reverse(prompt('Enter your text')));


// function fact(numb){
//     let result=1;
//     for (let i = 1; i <= numb; i++) {
//         result=i*result;
//     }
//     return result
// }

// console.log(fact(+prompt('Enter your number')));

// function greet(name){
//     console.log('Hello', name);
// }

// greet("John")

function greater(a,b,c){

    if((a>b)&&(a>c))
    {return a}
    else if ((b>a)&&(b>c)){
    return b
    }else{
        return c;
    }
}

console.log(greater(+prompt("Enter a number"),+prompt("Enter a number"),+prompt("Enter a number")));
