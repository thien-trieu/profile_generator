const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  answers.push(answer);

  rl.question(`What's an activity you like doing? `, (answer) => {
    answers.push(answer);

    rl.question(`What do you listen to while doing that? `, (answer) => {
      answers.push(answer);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        answers.push(answer);

        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          answers.push(answer);

          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            answers.push(answer);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              answers.push(answer);
              
              console.log('\n');
              console.log(`Profile generated: ${answers[0]} enjoys ${answers[1]} while listening to ${answers[2]}. You can take ${answers[0]} out for ${answers[3]} expect an ordr of ${answers[4]} on the bill. ${answers[0]} is excellent at ${answers[5]}. You'll find that ${answers[0]} is amazing at ${answers[6]}\n`);
                          
              rl.close();
            });
          });
        });
      });
    });
  });
});