// Ex. IV --> Снимките за дългоочаквания филм "Годзила срещу Конг" започват. 
// Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, 
// дали предвидените средства са достатъчни за снимането на филма. 
// За снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.

//Известно е, че:
//· Декорът за филма е на стойност 10% от бюджета.
//· При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

function GodzillavsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let pricePerExtra = Number(input[2]);

    let decorPrice = budget * 0.10;
    let clothingPrice = extras * pricePerExtra;

    if(extras > 150){
        clothingPrice *= 0.90;
    }

    let totalMoneyNeeded = decorPrice + clothingPrice; 

    if(budget >= totalMoneyNeeded){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalMoneyNeeded).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoneyNeeded - budget).toFixed(2)} leva more.`)
    }
  
}

GodzillavsKong(["20000", "120", "55.5"])
