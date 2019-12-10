// object oriented

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  /*  this.getBirthYear = function() {
        return this.dob.getFullYear();
    };
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    } */
}


Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.firstName, person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

// es6 = es2015; syntatical sugar
// Class; method is a function inside a class
class PersonMaker {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new PersonMaker('Xin', 'Jiang', '10-16-1982');
console.log(person3);