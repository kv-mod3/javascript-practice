// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday



// Titles the document page, adds header + other info
document.title = 'Day 03 - Take Home';
const h1 = document.createElement('h1');
h1.innerText = 'Day 03 - Take Home';
const p = document.createElement('p');
p.innerText = 'Please enter your first and lsst name, then click Confirm.';



// Creates input field element and applies placeholder text for input field
// Note: input fields output their values as strings
let firstName = document.createElement('input');
firstName.placeholder = 'First Name';

// Creates input field element for last name
let lastName = document.createElement('input');
lastName.placeholder = 'Last Name';

// Creates Enter button
const btn = document.createElement('button');
btn.innerHTML = 'Confirm';

btn.addEventListener('click', function () {
    console.log('click');

    // accepts input
    const fNameOutput = firstName.value;
    const lNameOutput = lastName.value;

    console.log(fNameOutput);
    alert(lNameOutput);
});

// Appends elements created above to the <body> section of the document
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(firstName);
document.body.appendChild(lastName);
document.body.appendChild(btn);