// JavaScript Basics
/*
Using a basic JS to practice HTML element controls
create a Form that request user input via questions
// store the answer and create an output/ summary of user input */ 
    // Placing the <script src tag before the end of the </head> tag runs the JS file 1st
    // Placing the same tag before the ending </body> tag runs HTML 1st -->

//Testing connection
let name= "Tammi Ross "; 
alert(`Hi, ${name} here. Want to see something cool?`);
prompt(` Type Yes`);
document.querySelector('html').innerHTML = `
  <h1>Welcome to the ${name} Experiment! Scroll Down!</h1>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif">
`;
 
// // 1. Display an alert dialog with the content: "Warning! This message will self-destruct in"

// alert("Warning! this message will self-destruct in.... ")

// // 2. Display a "3... 2... 1..." countdown using 3 alert dialog boxes
// alert("3...");
// alert("2...");
// alert("1...");


// // 3. This statement selects the <h1> element and replaces its text with "BOOM!".
// document.querySelector("h1").textContent = "🔥BOOM!🔥";

// // 4. Log "Message destroyed!" to the console
// console.log("Message Destroyed");