// Ex. IV --> Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден. 
// Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си. 
// Напишете функция, която чете от масив по колко стъпки изминава тя всеки път като излиза през деня и 
// когато постигне целта си да се изписва "Goal reached! Good job!" и 
// колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"

// Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките, 
// които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, 
// на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."

function Walking(input){
    let index = 0;
    let steps = 0;

    while(true){
        let userInput = input[index];
        index++;

        if(userInput !== "Going home"){
            steps += Number(userInput);
                if(steps >= 10000){
                    console.log("Goal reached! Good job!");
                    console.log(`${steps - 10000} steps over the goal!`);
                    break;
                }   
        }
        if(userInput === "Going home"){
            let stepsToHome = Number(input[index]);  
            steps += stepsToHome;
                if(steps >= 10000){
                    console.log("Goal reached! Good job!");
                    console.log(`${steps - 10000} steps over the goal!`);
                    break;
                }   
            console.log(`${10000 - steps} more steps to reach goal.`);
            break;
        }       
    }
}

Walking(["1000", "1500", "2000", "6500"])
Walking(["1500", "300", "2500", "3000", "Going home", "200"])