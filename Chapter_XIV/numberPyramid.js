// Ex. I --> Напишете функция, която получава цяло число n и отпечатва пирамида от числа.

function numberPyramid(input){
    let userInput = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for(let rows = 1; rows <= userInput; rows++){
        for(let coloms = 1; coloms <= rows; coloms++){
            if(current > userInput){
                isBigger = true;
                break;
            }
            
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }
    }
}

numberPyramid(["15"])