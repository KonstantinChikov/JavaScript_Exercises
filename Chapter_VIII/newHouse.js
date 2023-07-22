// Ex. III --> Марин и Нели си купуват къща не далеч от София. 
// Нели толкова много обича цветята, че ви убеждава да напишете функция, 
// която да изчисли колко ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. 
// Различните цветя са с различни цени.

//  ._____________________.______._______.______.________.__________.
//  |         цвете       | Роза | Далия | Лале | Нарцис | Гладиола |
//  |---------------------|------|-------|------|--------|----------|
//  | Цена на брой в лева |   5  |  3.80 | 2.80 |    3   |   2.50   |
//  |_____________________|______|_______|______|________|__________|

//      Съществуват следните отстъпки:
//· Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
//· Ако Нели купи повече от 90 Далии - 15% отстъпка от крайната цена
//· Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
//· Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
//· Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%

//      Функцията получава 3 аргумента:
//· Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
//· Брой цветя - цяло число в интервала [10…1000]
//· Бюджет - цяло число в интервала [50…2500]

//      Да се отпечата на конзолата на един ред:
//· Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
//· Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
//      Сумата да бъде форматирана до втория знак след десетичната запетая.

function newHouse(input){
    let kind = input[0];
    let amount = Number(input[1]);
    let buget = Number(input[2]);

    let totalPrice;
    switch(kind){
        case "Roses":
                if(amount >= 80){
                    totalPrice = (amount * 5) - ((amount * 5) * 0.10);
                }else{
                    totalPrice = amount * 5;
                }
            break;
        case "Dahlias":
                if(amount >= 90){
                    totalPrice = (amount * 3.80) - ((amount * 3.80) * 0.15);
                }else{
                    totalPrice = amount * 3.80;
                }
            break;
        case "Tulips":
                if(amount >= 80){
                    totalPrice = (amount * 2.80) - ((amount * 2.80) * 0.15);
                }else{
                    totalPrice = amount * 2.80;
                }
            break;
         case "Narcissus":
                if(amount < 120){
                    totalPrice = (amount * 3) + ((amount * 3) * 0.15);
                }else{
                    totalPrice = amount * 3;
                }
            break;
        case "Gladiolus":
            if(amount < 80){
                totalPrice = (amount * 2.5) + ((amount * 2.5) * 0.20);
            }else{
                totalPrice = amount * 2.5;
            }
            break;
    }
    
    let finalPrice;
    if(buget > totalPrice){
        finalPrice = buget - totalPrice;
        console.log(`Hey, you have a great garden with ${amount} ${kind} and ${finalPrice.toFixed(2)} leva left.`);
    }
    else if(buget < totalPrice){
        finalPrice = totalPrice - buget;
        console.log(`Not enough money, you need ${finalPrice.toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips", "88", "260"])