const person = {
    name: 'John',
    YOB: 1977,

    calcAge: function (year){
        return year-person.YOB;
    },

    calcAgeArrow: (year) => year - person.YOB
}

console.log(person.calcAge(2022));
console.log(person.calcAgeArrow(2005));