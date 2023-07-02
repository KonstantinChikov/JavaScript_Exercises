// Ex. VII --> Ресторант отваря врати и предлага няколко менюта на преференциални цени:

//• Пилешко меню – 10.35 лв.
//• Меню с риба – 12.40 лв.
//• Вегетарианско меню – 8.15 лв.

// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).
// Цената на доставка е 2.50 лв и се начислява най-накрая. 

function foodDelivery(input){
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let chikenMenuCost = chikenMenu * 10.35;
    let fishMenuCost = fishMenu * 12.40;
    let vegetarianMenuCost = vegetarianMenu * 8.15;

    let costWithoutDesert = chikenMenuCost + fishMenuCost + vegetarianMenuCost;
    let desertCost = costWithoutDesert * 0.20;
    let totalCost = (costWithoutDesert + desertCost)+ 2.50;

    console.log(totalCost);

}

foodDelivery([2, 4, 3])
