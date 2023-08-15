// Ex. VI --> Напишете функция, която до получаване на командата "Stop", 
// чете цели числа и намира най-голямото измежду тях. Въвежда се по едно число на ред.

function maxNumber(input){
    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let command = input[index];
    index++;

    while(command !== "Stop"){
        let number = Number(command);

        if(maxNumber < number){
            maxNumber = number;
        }

        command = input[index];
        index++;
    }
    console.log(maxNumber);
    
}

maxNumber(["100", "99", "80", "70", "Stop"])
maxNumber(["-10", "20", "-30", "Stop"])
maxNumber(["45", "-20", "7", "99", "Stop"])
maxNumber(["-1", "-2", "Stop"])