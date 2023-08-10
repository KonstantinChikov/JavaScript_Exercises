// Ex. III --> Напишете функция, която получава число n и отпечатва числата от 1 до n през 3

function Numbers1toNWithStep3(input){
    let userInput = Number(input[0]);

    for(let i = 1; i <= userInput; i += 3){
        console.log(i);
    }
}   

Numbers1toNWithStep3(["10"])