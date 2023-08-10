// Ex. VII --> Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата.
// Да се отпечата на конзолата един ред:

// "The sum of the digits is:{sum}" – където sum е сумата на отделните цифри.

function sumOfNumbers(input){
    let userInput = input[0];
    let sum = 0;

    for (let i = 0; i < userInput.length; i++){
        let ch = Number(userInput[i]);
        sum += ch;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"])