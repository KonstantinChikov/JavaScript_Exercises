// Ex. VII --> Петър иска да купи N видеокарти, M процесора и P на брой рам памет. 
// Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. 
// Важат следните цени:

//· Видеокарта – 250 лв./бр.
//· Процесор – 35% от цената на закупените видеокарти/бр.
//· Рам памет – 10% от цената на закупените видеокарти/бр.

// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.

function shopping(input){
    let buget = Number(input[0]);
    let graphicsCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let graphicsCardsPrice = graphicsCards * 250;
    let processorsPrice = processors * (graphicsCardsPrice * 0.35);
    let ramPrice = ram * (graphicsCardsPrice * 0.10);

    let totalPrice = graphicsCardsPrice + processorsPrice + ramPrice;

    if(graphicsCards > processors){
        totalPrice = totalPrice * 0.85;
    }

    if(buget >= totalPrice){
        console.log(`You have ${(buget - totalPrice).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(totalPrice - buget).toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"])