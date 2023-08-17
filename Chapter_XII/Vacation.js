// Ex. III --> Джеси е решила да събира пари за екскурзия и иска от вас да ѝ 
// помогнете да разбере дали ще успее да събере необходимата сума. 
// Тя спестява или харчи част от парите си всеки ден. Ако иска да похарчи повече от наличните си пари, 
// то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.

// Функцията трябва да приключи при следните случаи:

// o· Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
//      --> "You can't save the money."
//      --> "{Общ брой изминали дни}"
// o· Ако Джеси събере парите за почивката на конзолата се изписва:
//      --> "You saved the money for {общ брой изминали дни} days."

function Vacation(input){
    let neededMoney = Number(input[0]);
    let savedMoney = Number(input[1]);
    let days = 0;
    let daysSpending = 0;
    let index = 2;
    let currentRow = input[index];

    while(savedMoney >= 0 ){
        days++;
        index++;
        if(currentRow === "spend"){
            let moneyToSpend = Number(input[index]);
            savedMoney -= moneyToSpend;
            if(savedMoney < 0){
                savedMoney = 0;
            }
            daysSpending++;
                if(daysSpending === 5){
                    console.log("You can't save the money.");
                    console.log(days);
                    break;
                }
        }else if(currentRow === "save"){
            daysSpending = 0; 
            let moneyToSave = Number(input[index]);
            savedMoney += moneyToSave;

            if(savedMoney >= neededMoney){
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }
        index++;
        currentRow = input[index];
    }
}

Vacation(["2000", "1000", "spend", "1200", "save", "2000"])