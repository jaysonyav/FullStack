//Import data from external js files
import users from './users.js';
import products from './products.js'
import todos from './todos.js'


// Task 1 - Filter the users that lives in Gwenbrorough and create a new array that consists of strngs in "username - name" format

const selectedUsers= users.filter(user => user.city ==='Gwenborough')
const result= selectedUsers.map(user=>`${user.username} - ${user.name}`)

//const result= users.filter(user => user.city ==='Gwenborough').map(user=>`${user.username} - ${user.name}`);

console.log(result);

// Task 2 - Find the count of all users with the name "Kurtis Weissnat"

// const user = users.filter((user)=> user.name ==='Kurtis Weissnat')
// console.log(users);
// console.log(user[0]);
// console.log(user[0].city);

// const user = users.find(user=> user.name==='Kurtis Weissnat')
// console.log(user);
// const userCity=user.city
// console.log(userCity);

// Task - 3  Implement discount by discountPercentage,
// Calculate all new prices and put all new prices in a new array

let prices = products.map(prod=>(prod.price*(100-prod.discountPercentage)/100).toFixed(2))

prices = prices.filter(price=>price <=100)
console.log(prices);

// Task - 4
// Check the stocks fo find low stock number that is less than 40
// store in array in a format 'brand - title'
let  stock = products.filter(prod=> prod.stock<40)
stock = stock.map (prod=> `${prod.brand}- ${prod.title}`)
console.log(stock);
// Task-5
// Find how many products on laptop category

let laptopCount = products.filter(prod=>prod.category==='laptops').length;
console.log(laptopCount);

// Task 6  List of unique categories
// let categories = [];

// products.forEach(prod=>{
//     if(!categories.includes(prod.category))
//     categories.push(prod.category)
// })

// console.log(categories);

let categories = products.map (prod=> prod.category);

categories = [new Set(categories)]

console.log(categories);
// Task 7 - get the total price of all products 

let total = 0;
products.forEach(prod => {
    total += prod.price;

})

// total = products.reduce ((total, prod)=> total+prod.price,0)

// let productsList = products.reduce((list,prod)=> `${list+prod.title}`,'')

// console.log(productsList);
// console.log(total);

// Task 7 dort products asc by price

// products.sort ((a,b)=> b.price - a.price)
// console.log(products);

// // sort by rating
// products.sort ((a,b)=> b.rating - a.rating)
// console.log(products);

// let arr = ['Apple','orange','Grapes','banana','Watermelon']

// arr.sort();

// arr.sort((a,b)=>b.localeCompare(a))
// console.log(arr);

products.sort ((a,b)=> a.title.localeCompare(b.title))
console.log(products);


const selectedUserss= users.filter(user => user.city !=='Gwenborough')
 .sort((a,b)=>a.username.localeCompare(b.username))
console.log(selectedUserss);