// Ex. VII --> На осемнадесетия си рожден ден на Хосе взел решение, че ще се изнесе да живее на квартира. 
// Опаковал багажа си в кашони и намерил подходяща обява за апартамент под наем. 
// Той започва да пренася своя багаж на части, защото не може да пренесе целия наведнъж. 
// Има ограничено свободно пространство в новото си жилище, където може да разположи вещите, 
// така че мястото да бъде подходящо за живеене.
// Напишете програма, която изчислява свободния обем от жилището на Хосе, който остава след като пренесе багажа си.
// Бележка: Един кашон е с точни размери: 1m. x 1m. x 1m.

//Да се отпечата на конзолата един от следните редове:
//- Ако стигнете до командата "Done" и има още свободно място:
//      "{брой свободни куб. метри} Cubic meters left."
//- Ако свободното място свърши преди да е дошла команда "Done":
//      "No more free space! You need {брой недостигащи куб. метри} Cubic meters more."

function Moving(input){
    let widthOfTheFreeSpace = Number(input[0]);
    let lengthOfTheFreeSpace = Number(input[1]);
    let higthOfTheFreeSpace = Number(input[2]);

    let totalSpace = widthOfTheFreeSpace * lengthOfTheFreeSpace * higthOfTheFreeSpace;
    let spaceNeeded = 0;

    let not = false;
    let index = 3;
    let command = input[index];

    while(command !== "Done"){
        let boxes = Number(command);

        spaceNeeded += boxes;
        if(totalSpace < spaceNeeded){
            console.log(`No more free space! You need ${spaceNeeded - totalSpace} Cubic meters more.`);
            not = true;
            break;
        }

        index++;
        command = input[index];
    }
    if(!not){
        console.log(`${totalSpace - spaceNeeded} Cubic meters left.`);
    }
}

Moving(["10", "10", "2","20", "20", "20", "20", "122"])
Moving(["10", "1", "2", "4", "6", "Done"])