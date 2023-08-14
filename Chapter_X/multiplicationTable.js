// Ex. II --> Напишете функция, която получава аргумент число от 1 до 10 и принтира таблицата за умножение в конзолата.

function multiplicationTable(input){
    let userInput = Number(input[0]);
    let sum = 0;

    for(let i = 1; i <= 10; i++){
        sum = i * userInput
        console.log(`${i} * ${userInput} = ${sum}`)
    }
}

multiplicationTable(["5"])