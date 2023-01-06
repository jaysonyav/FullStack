let str = '     HellO FroM ChainEd MethoDs    ';

let trimmed= str.trim();
let lower = trimmed.toLowerCase()
let result = lower.slice(0,5)

console.log(result);

let chained = str.trim().toLowerCase().slice(0,5)

console.log(chained);
