// Ex. VIII --> Григор Димитров е тенисист, чиято следваща цел е изкачването в световната ранглиста по тенис за мъже.
// През годината Гришо участва в определен брой турнири, като за всеки турнир получава точки, 
// които зависят от позицията, на която е завършил в турнира. Има три варианта за завършване на турнир:

// W - ако е победител получава 2000 точки
// F - ако е финалист получава 1200 точки
// SF - ако е полуфиналист получава 720 точки

// Напишете програма, която изчислява колко ще са точките на Григор след изиграване на всички турнири, 
// като знаете с колко точки стартира сезона. 
// Също изчислете колко точки средно печели от всички изиграни турнири и колко процента от турнирите е спечелил.

// Отпечатват се три реда в следния формат:
//· "Final points: {брой точки след изиграните турнири}"
//· "Average points: {средно колко точки печели за турнир}"
//· "{процент спечелени турнири}%"

// Средните точки да бъдат закръглени към най-близкото цяло число надолу, 
// а процентът да се форматира до втората цифра след десетичния знак.

function tennisRanklist(input){
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let finalPoints = startingPoints;
    let tournamentPoints = 0;
    let amountOfWins = 0;

    for(let i = 2; i <= tournaments + 1; i++){
        let tournamentR = input[i];
        // console.log(tournamentR);

        if(tournamentR === "F"){
            finalPoints += 1200;
            tournamentPoints += 1200;
        }else if(tournamentR === "SF"){
            finalPoints += 720;
            tournamentPoints += 720;
        }else if(tournamentR === "W"){
            amountOfWins++;
            finalPoints += 2000;
            tournamentPoints += 2000;
        }
    }

    console.log("Final points: " + finalPoints);
    console.log("Average points: " + Math.floor(tournamentPoints / tournaments));
    console.log(((amountOfWins/tournaments) * 100).toFixed(2) + "%");

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])
tennisRanklist(["4", "750", "SF", "W", "SF", "W"])
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])

