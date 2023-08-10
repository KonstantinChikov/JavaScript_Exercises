// Ex. II --> Напишете функция, която получава положително число n,
// въведено от потребителя и печата числата от n до 1 в обратен ред. 
// Въведеното число n, винаги ще бъде по-голямо от 1.

function NumbersNto1(input){
    let userInput = Number(input[0]);

    if(userInput >= 1){
        for(let n = userInput; n > 0; n--){
            console.log(n);
        }
    }
}

NumbersNto1(["12"])