const randNum= Math.ceil(Math.random()*100)

//console.log(randNum);

let found= false;
let guess=0;
let counter=0;


while (!found) {
    
    guess = prompt('Enter a number');
    counter++;
    if(guess>randNum){
        alert('Enter something smaller');
    }
    else if(guess<randNum){
        alert('Enter something bigger');
    }
    else{
        found = true;
        alert(`You found it in ${counter} times`)
    }
}