// Ex. VII --> Напишете функция, която до получаване на командата "Stop", 
// чете цели числа, и намира най-малкото измежду тях. Въвежда се по едно число на ред

function minNumber(input){
    let index = 0;
    let maxNumber = Number.MAX_SAFE_INTEGER;
    let command = input[index];
    index++;

    while(command !== "Stop"){
        let number = Number(command);

        if(maxNumber > number){
            maxNumber = number;
        }

        command = input[index];
        index++;
    }
    console.log(maxNumber);
    
}

minNumber(["100", "99", "80", "70", "Stop"])
minNumber(["-1", "-2", "Stop"])