for (let i = 0; i < 20; i++) {
    if (i%2==1) {
        continue;
    }
    console.log('i');
}


console.log('-----------');

for (let index = 0; index <= 10; index++) {
    
    console.log('inside the loop');
    if(index>5){
        //break;
        continue
    }

    console.log(index);
    
}

console.log('----------');