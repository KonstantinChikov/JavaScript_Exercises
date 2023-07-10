// Ex. IV --> Снимките за дългоочаквания филм "Годзила срещу Конг" започват. 
// Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, 
// дали предвидените средства са достатъчни за снимането на филма. 
// За снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.

//Известно е, че:
//· Декорът за филма е на стойност 10% от бюджета.
//· При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

function GodzillavsKong(input){
    let filmsBudget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let priceOfClothingPerEx = Number(input[2]);


    let totalClothingPrice;
    if(numberOfExtras < 150){
        totalClothingPrice =  numberOfExtras * priceOfClothingPerEx;
    }
    else if(numberOfExtras > 150){
        totalClothingPrice =  numberOfExtras* priceOfClothingPerEx;
        let discount = totalClothingPrice * 0.10;
        totalClothingPrice = totalClothingPrice - discount; // -10%
    }
    
    let totalCost = totalClothingPrice + (filmsBudget * 0.10);
    let totalBudget = filmsBudget - totalCost;
    totalBudget = Math.abs(totalBudget);

    if(filmsBudget < totalCost){
        console.log("Not enough money!");
        console.log(`Wingard needs ${totalBudget.toFixed(2)} leva more.`)
    }
    else if(filmsBudget > totalCost){
        console.log("Action!");
        console.log(`Wingard starts filming with ${totalBudget.toFixed(2)} leva left.`);
    }    
}

GodzillavsKong(["9587.88", "222", "55.68"])
//   80/100 in judge!  
