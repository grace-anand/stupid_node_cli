#! /usr/bin/env node

import inquirer from 'inquirer';

const question = [
  {
    type: "confirm",
    name: "isStupid",
    message: "Are you stupid?",
  },
];

function askQuestion() {
  return inquirer.prompt(question).then((answer) => {
    if (answer.isStupid) {
      return answer;
    } else {
      console.error('You know you are stupid, right?')
      return askQuestion();
    }
  });
}

// ask five silly questions
const sillyQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "favoriteColor",
    message: "What is your favorite color?",
  },
  {
    type: "input",
    name: "favoriteFood",
    message: "What is your favorite food?",
  },
  {
    type: "input",
    name: "favoriteAnimal",
    message: "What is your favorite animal?",
  },
  {
    type: "input",
    name: "favoriteNumber",
    message: "What is your favorite number?",
  },
];


inquirer.prompt(sillyQuestions).then((answer) => {
  console.log(
    `Hello ${answer.name}! Your favorite color is ${answer.favoriteColor}, your favorite food is ${answer.favoriteFood}, your favorite animal is ${answer.favoriteAnimal}, and your favorite number is ${answer.favoriteNumber}.`
  )
}).then(() => {
  askQuestion()
  .then(() => {
      console.log('Thanks for your honesty!')
    }
  )
  .catch(console.log);
});
