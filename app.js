import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Kindly guess yuor number b/w 1 to 10",
            validate: (input) => {
                if (input) {
                    return true;
                }
                else {
                    return "please enter number :";
                }
            },
        },
    ]);
    // destructuring the userGuess no from ansewr variable
    const { userGuess } = answer;
    if (userGuess === systemGeneratedNo) {
        console.log(`Your answer is correct \n  your answer is ${userGuess} and system Number is ${systemGeneratedNo} \n You have won the game`);
    }
    else {
        console.log(`opps! your answer is not correct \n  your answer is ${userGuess} and system Number is ${systemGeneratedNo} \n Please try again`);
    }
    const answers = await inquirer.prompt([
        {
            type: "confirm",
            name: "again",
            message: "Do you want to Guess Again?",
        },
    ]);
    loop = answers.again;
}
console.log("thanks for playing our Guessing Game!");
