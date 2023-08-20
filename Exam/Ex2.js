function Spaceship(input){
    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHigth = Number(input[2]);
    let avgAustronauthHigth = Number(input[3]);

    let rocketSpace = shipWidth*shipLength*shipHigth;
    let roomSpace = (avgAustronauthHigth + 0.40) * 2 *2;
    
    let roomPerPerson1 = rocketSpace / roomSpace;
    let roomPerPerson = Math.floor(roomPerPerson1);
    if(roomPerPerson >= 3 && roomPerPerson <= 10){
        console.log(`The spacecraft holds ${roomPerPerson} astronauts.`);
    }else if(roomPerPerson < 3){
        console.log("The spacecraft is too small.");
    }else{
        console.log("The spacecraft is too big.");
    }
}

Spaceship(["3.5",
"4",
"5",
"1.70"])
