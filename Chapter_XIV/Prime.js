// Ex. III --> Напишете функция, която получава масив с цели числа в диапазона от -2,147,483,648 до 2,147,483,647, 
// докато не се получи команда "stop". Да се намери сумата на всички въведени прости и сумата на всички въведени непрости числа.
// Тъй като по дефиниция от математиката отрицателните числа не могат да бъдат прости,
// ако на входа се подаде отрицателно число да се изведе следното съобщение "Number is negative.".
// В този случай въведено число се игнорира и не се прибавя към нито една от двете суми,
// а програмата продължава своето изпълнение, очаквайки въвеждане на следващо число.

//На изхода да се отпечатат на два реда двете намерени суми в следния формат:
//      "Sum of all prime numbers is: {prime numbers sum}"
//      "Sum of all non prime numbers is: {nonprime numbers sum}"

function Prime(input){
    let index = 0;
    let sumPrimeNumber = 0;
    let sumNonPrimeNumber = 0;

    let command = input[index];
    index++;

    while(command !== "stop"){
        let num = Number(command);

        if(num < 0){
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if(num == 1){
            sumPrimeNumber += num;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            sumPrimeNumber += num;
        }else{
            sumNonPrimeNumber += num;
        }

        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);
}

Prime(["3", "9", "0", "7", "19", "4", "stop"])