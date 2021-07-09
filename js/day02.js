// Titles the document page, adds header + other info
document.title = 'Day 02 - Take Home';
const h1 = document.createElement('h1');
h1.innerText = 'Day 02 - Take Home';
document.body.appendChild(h1);

// Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1 = "cooler";
// Assign an adjective
let adj2 = "messier";
// Assign an adjective
let adj3 = "mischevious";
// Assign an adjective
let adj4 = "awful";
// Assign an adjective
let adj5 = "beautiful";
// Assign an adjective
let adj6 = "blue";
// Assign an adverb
let adverb = "slowly";
// Assign a color
let color = "magenta";
// Assign a noun
let noun1 = "book";
// Assign a noun
let noun2 = "justice";
// Assign a noun
let noun3 = "Abraham Lincoln";
// Assign a noun
let noun4 = "cat";
// Assign a noun
let noun5 = "library";
// Assign a noun
let noun6 = "bear";
// Assign a number
let num = "five";
// Assign a plural noun
let pnoun1 = "children";

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE


//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
console.log(story);