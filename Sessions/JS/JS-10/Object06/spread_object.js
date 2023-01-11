const person1= {
    firstName: 'John',
    YOB: 1977
}

// const person2 = person1;

const person2 = {...person1, 
                    education: 'Phd',
                    location: 'TX'}

console.log(person1);
console.log(person2);

person2.YOB = 1980;

console.log(person1);
console.log(person2);