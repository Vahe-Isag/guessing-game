let maximum = parseInt(prompt("Enter the highest number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }

}

if (guess === 'q') {
    console.log("Quitting")
} else {
    console.log("You won!")
    console.log(`You won! It took you ${attempts} guess/guesses`)
}
