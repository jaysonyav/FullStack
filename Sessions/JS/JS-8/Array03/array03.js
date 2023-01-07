let randomNumbers = [5,7]

console.log(randomNumbers);

randomNumbers.unshift(11);//5,7->11,5,7
randomNumbers.unshift(45);//11,5,7 -> 45,11,5,7
randomNumbers.unshift(8);//45,11,5,7 -> 8,45,11,5,7


console.log(randomNumbers);

let removed = randomNumbers.shift();
console.log(`${removed} just removed.`);
console.log(randomNumbers);

removed = randomNumbers.shift();
console.log(`${removed} just removed.`);
console.log(randomNumbers);

removed = randomNumbers.shift();
console.log(`${removed} just removed.`);
console.log(randomNumbers);

removed = randomNumbers.shift();
console.log(`${removed} just removed.`);
console.log(randomNumbers);

removed = randomNumbers.shift();
console.log(`${removed} just removed.`);
console.log(randomNumbers);

// randomNumbers.push('MI', 'AZ')

// randomNumbers.push(true)

// console.log(randomNumbers);

// let removed= randomNumbers.pop()

// console.log(randomNumbers);
// console.log(`${removed} just removed...`);

// removed= randomNumbers.pop()

// console.log(randomNumbers);
// console.log(`${removed} just removed...`);

// removed= randomNumbers.pop()

// console.log(randomNumbers);
// console.log(`${removed} just removed...`);

// removed= randomNumbers.pop()

// console.log(randomNumbers);
// console.log(`${removed} just removed...`);

// removed= randomNumbers.pop()

// console.log(randomNumbers);
// console.log(`${removed} just removed...`);


