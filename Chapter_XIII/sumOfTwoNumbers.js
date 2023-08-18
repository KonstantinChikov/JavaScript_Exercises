// Ex. IV --> Напишете функция, която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа.
// На изхода се отпечатва, коя поред е първата комбинацията, чийто сбор от числата е равен на дадено магическо число.
// Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.

//На конзолата трябва да се отпечата един ред, според резултата:
//· При първата намерена комбинация, чиито сбор на числата е равен на магическото число:
//       "Combination N:{пореден номер} ({първото число} + {второ число} = {магическото число})"
//· Ако не е намерена комбинация отговаряща на условието:
//       "{броят на всички комбинации} combinations - neither equals {магическото число}"

function sumOfTwoNumbers(input){
    let startInterval = Number(input[0]);
    let endInterval =Number(input[1]);
    let magicNumber = Number(input[2]);

    let ifFound = false;
    let n = 0;

    for(let i = startInterval; i <= endInterval; i++){
        for(let j = startInterval; j <= endInterval; j++){
                n++;
                if((i + j) === magicNumber){
                    console.log(`Combination N:${n} (${i} + ${j} = ${magicNumber})`);
                    ifFound = true;
                    break;
                }
        }
        if(ifFound){
            break;
        }
    }
    if(!ifFound){
        console.log(`${n} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"])