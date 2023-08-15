// Ex. IV --> Напишете програма, която чете число n, 
// въведено от потребителя и отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, …. 
// Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.

function Sequence(input){
    
    let userInput = Number(input[0]);
    let number = 1;
    while(number <= userInput){
        console.log(number);
        number = (number*2) + 1;
    }

}

Sequence([8])