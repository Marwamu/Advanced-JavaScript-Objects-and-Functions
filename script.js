// Function Constructorvar 

/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}
Person.prototype.calculateAge = function () {
    var age = 2023 - this.yearOfBirth;
    return age;
};
Person.prototype.LastName = 'Mostafa'


var Mona = new Person('Mona', 1998, 'Front-end Developer')
console.log(Mona, Mona.calculateAge(), Mona.LastName);

var Joe = new Person('Joe', 1996, 'Full-Stack Developer');
console.log(Joe, Joe.calculateAge(), Joe.LastName);*/





// Create Object

/*
var personProto = {
    calculateAge: function () {
        console.log(2023 - this.yearOfBirth);
    }
}
var Marwa = Object.create(personProto)
Marwa.name = 'Marwa'
Marwa.yearOfBirth = 1998
Marwa.job = 'UI/UX Designer'
var mona = Object.create(personProto, {
    name: { value: 'mona' },
    yearOfBirth: { value: 1998 },
    job: { value: 'Designer' }
})*/







// Primitives vs Objects



// Primitives
// var a = 32
// var b = a
// a = 46;
// console.log(a);
// console.log(b);



// // Objects
// var obj1 = {
//     name: 'marwa',
//     age: 23
// }
// var obj2 = obj1
// obj1.age = 44
// console.log(obj1);
// console.log(obj2);



// //Functions
// var age = 23;
// var obj = {
//     name: 'marwa',
//     city: 'Cairo'
// }
// function change(a, b) {
//     a = 30;
//     b.city = 'London';
//     b.name = 'Ahmed'
// }

// change(age, obj)
// console.log(age);
// console.log(obj.city);
// console.log(obj.name);

// // Passing Functions as arguments 

// var years = [1990, 1965, 1937, 2005, 1998];
// function arrayCalc(arr, fn) {


//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {

//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }
// function calculateAge(yearOfBirth) {

//     return 2016 - yearOfBirth;
// }
// function isFullAge(age) {
//     return age >= 18;
// }
// function maxHeartRate(age) {
//     if (age >= 18 && age <= 81) {
//         return Math.round(206.9 - (0.67 * age));
//     }
//     else
//         return -1;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge)
// var heartRates = arrayCalc(ages, maxHeartRate)

// console.log(ages);
// console.log(fullAges);
// console.log(heartRates);




// // Functions returing Functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you explain what is UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What subject do you teach ' + name + '?');
//         }
//     }
//     else {
//         return function (name) {
//             console.log('Hello  ' + name + ', what do you do?');
//         }
//     }
// }


// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// var teacherQuestion = interviewQuestion('developer');
// teacherQuestion('John');
// var teacherQuestion = interviewQuestion('designer');
// teacherQuestion('John');
// interviewQuestion('designer')('Marwa');






// IIFE 'Immediately Invoked Function Expressions'

function game() {
    var score = Math.random() * 10;
    console.log(Math.round(score));
    console.log(Math.random(score) >= 5);
}
game();
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(Math.round(score));
    console.log(Math.random((score)) >= 5 - goodLuck);
})(5)