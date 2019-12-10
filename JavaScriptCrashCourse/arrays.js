// Arrays - variables that hold multiple values

// Constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

// Better way
const fruits = ['apples', 'oranges', 10, 'pears', true];
fruits[3] = 'grapes';
fruits.push('mangos'); // adds to last
fruits.unshift('strawberries'); // adds to first
fruits.pop(); // remove the last one

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));
 
console.log(fruits);

// Manipulating Arrays
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// For
for(let i = 0; i < todos.length; i++) {
    //console.log(`For Loop Number: ${i}`);
    console.log(todos[i].text);
}

// ForOf (arrays)
for(let todo of todos) {
    console.log(todo.text);
}

// High order array methods; forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

//arrow function;
todos.forEach((todo) => console.log(todo.text));

const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);

// While
/* let i = 0;
while(i < 10) {
    console.log(`While Loop: ${i}`);
    i++;
} */
