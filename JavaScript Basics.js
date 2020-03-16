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
 