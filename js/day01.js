// Add the following to your script file:
// Single line comment
// Multi-line comment
// Log your name to the console
// Log your favorite food to the console



// Titles the document page, adds header + other info
document.title = 'Day 01 - Take Home';

const h1 = document.createElement('h1');
h1.innerText = 'JavaScript Strings';

const p = document.createElement('p');
p.innerText = 'The length property returns the length of a string.';

document.body.appendChild(h1);
document.body.appendChild(p);

// This is a single-line comment

/*
This is a
multi-line
comment
*/

const myName = 'Kevin';
const favFood = 'likes garlic bread';

console.log(myName, favFood);