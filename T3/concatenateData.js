function concatenateData(input){

    let firstName = input[0];
    let secondName = input[1];
    let age = input[2];
    let town = input[3];

    //You are <firstName> <lastName>, a <age>-years old person from <town>.
    console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`)
}

concatenateData(["Konstantin", "Chikov", 21, "Vraca"])