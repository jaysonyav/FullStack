const workingHours = {
    monday: "09:00-17:00", 
    tuesday: "10:00-17:00",
    wednesday: "11:00-16:90",
    thursday: "08:00-16:09",
    friday: "09:00-18:00",
   saturday: "10:00-14:00",
    sunday : "closed"
}
// let day=prompt("Enter the date");
// console.log(workingHours[`${day}`]);



// for(days in workingHours){
//     console.log(days, workingHours[days]);
// }


const keys=Object.keys(workingHours)
console.log(keys);

// keys.forEach(day => {console.log(day,workingHours[day]);
    
// });

const values=Object.values(workingHours);

console.log(values);

const entry=Object.entries(workingHours);

console.log(entry);