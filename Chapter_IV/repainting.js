// Ex. VI --> Румен иска да пребоядиса хола и за целта е наел майстори. 
//Напишете програма, която изчислява разходите за ремонта, предвид следните цени:

//· Предпазен найлон - 1.50 лв. за кв. метър
//· Боя - 14.50 лв. за литър
//· Разредител за боя - 5.00 лв. за литър

// За всеки случай, към необходимите материали, 
// Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, 
// разбира се и 0.40 лв. за торбички. 
// Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.

function repainting(input){
    let neededAmountOfNylon = Number(input[0]);
    let neededAmountOfPaint = Number(input[1]);
    let neededAmountOfThinner = Number(input[2]);
    let hoursNeededByTheCraftsman = Number(input[3]);

    let nylonCost = (neededAmountOfNylon + 2) * 1.50;
    let a = neededAmountOfPaint * 0.10;
    let paintCost = (neededAmountOfPaint + a) * 14.50;
    let thinnerCost = neededAmountOfThinner * 5;
    let materialsCost = (nylonCost + paintCost + thinnerCost) + 0.40;

    let b = materialsCost * 0.30
    let craftsmanCost = b * hoursNeededByTheCraftsman;

    let totalCost = materialsCost + craftsmanCost;

    console.log(totalCost);
}

repainting([10, 11, 4, 8])