// Ex. VII --> Иван решава да подобри световния рекорд по плуване на дълги разстояния. 
// Функцията получава: рекордът в секунди, който Иван трябва да подобри, 
// разстоянието в метри, което трябва да преплува и времето в секунди, за което плува разстояние от 1 м. 
// Да се напише функция, която изчислява дали се е справил със задачата, 
// като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
// Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, 
// резултатът трябва да се закръгли надолу до най-близкото цяло число.

// Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд.

function worldSwimmingRecord(input){
    let Record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let timeWithoutResistance = distance * timeForOneMeter;
    let resistance = Math.floor(distance / 15) * 12.5;
    let totalTime = timeWithoutResistance + resistance;

    if(Record > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime - Record).toFixed(2)} seconds slower.`);   
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"])
worldSwimmingRecord(["10464", "1500", "20"])