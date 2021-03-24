// import functions and grab DOM elements
import { countsAsNo } from './utils.js';

const button = document.getElementById('startQuiz');


const quizResults = document.getElementById('quizResults');
// initialize state


// set event listeners to update state and DOM
button.addEventListener('click', () => {

    const Q = confirm('Do you wanna take the quiz');

    if (Q === false) {
        alert('No worries! Little offense taken');
        return;
    }
  
// - Here I am just getting the user's name with the prompt action and assinging the value to the const 'name'
    const name = prompt('What is your name?');
    

// Test starts here
    let score = 0;

    const firstAnswer = prompt ("What is my daughter's name");

    const secondAnswer = prompt ("What is my wife's name?");

    const thirdAnswer = prompt ('Do I like horror movies?');

    if (firstAnswer === 'Alice') {
        score++;
    }
 
    if (secondAnswer === 'Vanessa') {
        score++;
    }
 
    if (countsAsNo(thirdAnswer)) {
        score++;
    }
    
    quizResults.textContent = 'Congrats! ' + name + ' you got ' + score + ' out of 3!';
})