// Ex. VI --> Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса.
// Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка. 
// Точките, които актьора получава се формират от: 
// дължината на името на оценяващия умножено по точките, които дава делено на две.
// Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, 
// че дадения актьор е получил номинация.

//• Име на актьора - текст
//• Точки от академията - реално число в интервала [2.0... 450.5]
//• Брой оценяващи n - цяло число в интервала[1… 20]
//      На следващите n-на брой реда:
//o Име на оценяващия - текст
//o Точки от оценяващия - реално число в интервала [1.0... 50.0]

// Да се отпечата на конзолата един ред:
//· Ако точките са над 1250.5:
//      "Congratulations, {име на актьора} got a nominee for leading role with {точки}!"
//· Ако точките не са достатъчни:
//      "Sorry, {име на актьора} you need {нужни точки} more!"
//Резултатът да се форматирана до първата цифра след десетичния знак!

function Oscars(input){
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    // let judges = Number(input[2]);

    for(let i = 3; i < input.length; i++){
        let judgesName = input[i];
        i++;
        let judgesPoints = Number(input[i]);
        let currentJudgesPoints = (judgesName.length * judgesPoints) / 2;

        startingPoints += currentJudgesPoints;
        if(startingPoints >= 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(startingPoints).toFixed(1)}!`);
            break;
        }

    }
    let neededPoint = 1250.5 - startingPoints;
    if(startingPoints < 1250.5){
        console.log(`Sorry, ${actorName} you need ${neededPoint} more!`);
    }
}

Oscars([    "Zahari Baharov", "205", "4",
            "Johnny Depp", "45",
            "Will Smith", "29",
            "Jet Lee", "10",
            "Matthew Mcconaughey", "39"     ])