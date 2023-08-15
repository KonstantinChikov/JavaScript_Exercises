// Ex. III --> Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа, 
// докато тяхната сума стане по-голяма или равна на първоначалното число. 
// След приключване да се отпечата сумата на въведените числа.

function sumNumbers(input){
    let index = 0;
    let topNumbers = Number(input[index]);
    index++

    let sum = 0; 
    while(true){
        if(sum >= topNumbers){
            break;
        }
        let currentNumber = Number(input[index]);
        index++;

        sum += currentNumber;
        
    }
    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"])
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])