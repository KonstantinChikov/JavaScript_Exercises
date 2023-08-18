// Ex. II --> Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000.
// Винаги първото въведено число ще бъде по малко от второто. 
// На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете, 
// прочетени от конзолата числа и отговарят на следното условие:

// · сумата от цифрите на четни и нечетни позиции да са равни. 
//   Ако няма числа, отговарящи на условието на конзолата не се извежда резултат.

function Position(input){
    let start = Number(input[0]);
    let end = Number(input[1]);

    let printCurrentLine = '';
    for(let i = start; i <= end; i++){
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for(let j = 0; j <= currentNum.length; j++){
            let currentDigit = Number (currentNum.charAt(j));
            if(j % 2 === 0){
                evenSum += currentDigit;
            }else{
                oddSum += currentDigit;
            }
        }
        if(oddSum === evenSum){
            printCurrentLine += `${i} `
        } 
    }
    console.log(printCurrentLine);
}

Position(["100000", "100050"])