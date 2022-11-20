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
      return askQuestion();
    }
  });
}

askQuestion()
  .then(() => {
      console.log('Thanks for your honesty!')
    }
  )
  .catch(console.log);