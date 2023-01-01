console.log('Exercise 01');

const exchange=(amount, rate) => amount*rate;

console.log(exchange(1000,1.5));

console.log('Exercise 02');

function charcheck(str, char){

    let counter=0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if(str[index]===char){
            counter++;
        }

    }
    console.log(counter);
}

charcheck('clarusway','a')

//////////////

console.log('Exercise 03');

function primecheck(num){
    if (num<2){
        console.log('Its not a prime number');
        return false;}
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;

    
}

console.log(primecheck(5));