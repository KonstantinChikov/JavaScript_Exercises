// Ex. VII --> Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. 
// Според размера на групата, катерачите ще изкачват различни върхове.

//· Група до 5 човека – изкачват Мусала
//· Група от 6 до 12 човека – изкачват Монблан
//· Група от 13 до 25 човека – изкачват Килиманджаро
//· Група от 26 до 40 човека – изкачват К2
//· Група от 41 или повече човека – изкачват Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.

// Да се отпечатат на конзолата 5 реда, 
// всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.

//· Първи ред - процентът изкачващи Мусала
//· Втори ред – процентът изкачващи Монблан
//· Трети ред – процентът изкачващи Килиманджаро
//· Четвърти ред – процентът изкачващи К2
//· Пети ред – процентът изкачващи Еверест

function trekkingMania(input){
    let numberOfGroups = Number(input[0]);
    let totalAmountOfPeople = 0;
    let Musala = 0;
    let MonBlan = 0;
    let Kiliman = 0;
    let K2 = 0;
    let Everest = 0;

    for(let i = 1; i <= numberOfGroups; i++){
        let amountOfPeople = Number(input[i]);
        totalAmountOfPeople += amountOfPeople;

        if(amountOfPeople <= 5){
            Musala += amountOfPeople
        }else if(amountOfPeople >= 6 && amountOfPeople <= 12){
            MonBlan += amountOfPeople;
        }else if(amountOfPeople >= 13 && amountOfPeople <= 25){
            Kiliman += amountOfPeople;
        }else if(amountOfPeople >= 26 && amountOfPeople <= 40){
            K2 += amountOfPeople;
        }else{
            Everest += amountOfPeople;
        }
    }

    console.log(((Musala / totalAmountOfPeople)*100).toFixed(2) + "%");
    console.log(((MonBlan / totalAmountOfPeople)*100).toFixed(2) + "%");
    console.log(((Kiliman / totalAmountOfPeople)*100).toFixed(2) + "%");
    console.log(((K2 / totalAmountOfPeople)*100).toFixed(2) + "%");
    console.log(((Everest / totalAmountOfPeople)*100).toFixed(2) + "%");

}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])