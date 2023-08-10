// Ex. V --> Напишете функция, която получава текст (стринг) и печата всеки символ от текста на отделен ред.

function characterSequence(input){
    let userInput = input[0];

    for(let i = 0; i < userInput.length; i++){
        let letter = userInput[i];
        console.log(letter)
    }
}

characterSequence(["softuni"])