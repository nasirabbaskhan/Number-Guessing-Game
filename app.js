import inquirer from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";
(async () => {
    await showBanner("Number Guessing Game", "Number Guessing Game is a game that guess your number to win ", "red", "blue");
})();
async function fun() {
    const systemGeneratedNo = Math.floor(Math.random() * 10);
    let loop = true;
    while (loop) {
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: gradient.rainbow("Kindly guess yuor number b/w 1 to 10"),
                validate: (input) => {
                    if (input) {
                        return true;
                    }
                    else {
                        return gradient.rainbow("please enter number :");
                    }
                },
            },
        ]);
        // destructuring the userGuess no from ansewr variable
        const { userGuess } = answer;
        if (userGuess === systemGeneratedNo) {
            console.log(gradient.rainbow(`Your answer is correct \n  your answer is ${userGuess} and system Number is ${systemGeneratedNo} \n You have won the game`));
        }
        else {
            console.log(gradient.rainbow(`opps! your answer is not correct \n  your answer is ${userGuess} and system Number is ${systemGeneratedNo} \n Please try again`));
        }
        const answers = await inquirer.prompt([
            {
                type: "confirm",
                name: "again",
                message: gradient.rainbow("Do you want to Guess Again?"),
            },
        ]);
        loop = answers.again;
    }
    console.log(gradient.rainbow("thanks for playing our Guessing Game!"));
}
setTimeout(() => {
    fun();
}, 1000);
