// Ex. VIII --> По време на обедната почивка искате да изгледате епизод от своя любим сериал. 
// Вашата задача е да напишете програма, с която ще разберете дали имате достатъчно време да изгледате епизода. 
// По време на почивката отделяте време за обяд и време за отдих. 
// Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.

function lunchBreak(input){
    let name = input[0];
    let duration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchBreak = breakDuration / 8;
    let relaxTime = breakDuration  / 4;

    let timeLeft = breakDuration - (lunchBreak + relaxTime);

    if(duration <= timeLeft){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - duration)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(duration - timeLeft)} more minutes.`)
    }
}

lunchBreak(["Game of Thrones", "60", "96"])