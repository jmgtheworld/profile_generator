const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let output = "";

const showOutput = (output) => {
  console.log(output);
}

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  output += `${answer1}` + " loves to do ";
    rl.question("What's an activity you like doing? ", (answer2) => {
      output += `${answer2}` + " while listening to ";
        rl.question("What do you listen to while doing that? ", (answer3) => {
          output += `${answer3}` + ", likes to have ";
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
                rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
                  output += `${answer5}` + " for " + `${answer4}` + ', ';
                    rl.question("Which sport is your absolute favourite? ", (answer6) => {
                      output += "prefers " + `${answer6}` + " over any other sport, ";
                      rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
                        output += "and is amazing at " + `${answer7}`;
                        showOutput(output);
                        rl.close();
                      });
                    });
                });
            });
        });
    });
});





 
