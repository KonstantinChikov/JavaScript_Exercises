// Ex. XII --> Фирма дава следните комисионни на търговците си според града, 
// в който работят и обема на продажбите:

//  ._________._____________._________________.____________________.____________.
//  |  Град   | 0 ≤ s ≤ 500 | 500 < s ≤ 1 000 | 1 000 < s ≤ 10 000 | s > 10 000 |
//  |---------|-------------|-----------------|--------------------|------------|
//  |  Sofia  |      5%     |       7%        |         8%         |     12%    |
//  |---------|-------------|-----------------|--------------------|------------|
//  |  Varna  |     4.5%    |      7.5%       |         10%        |     13%    |
//  |---------|-------------|-----------------|--------------------|------------|
//  | Plovdiv |     5.5%    |       8%        |         12%        |    14.5%   |
//  |_________|_____________|_________________|____________________|____________|

// Напишете функция, 
// която получава име на град (стринг) и обем на продажби (число) и 
// изчислява и извежда размера на търговската комисионна според горната таблица. 
// Резултатът да се изведе форматиран до 2 цифри след десетичната точка. 
// При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".

function tradeCommissions(input){
    let city = input[0];
    let amountSold = Number(input[1]);

    let final;
    if(city === "Sofia" ||city === "Varna" || city === "Plovdiv"){
        switch(city){
            case "Sofia":
                if(amountSold == 0 || amountSold <= 500){
                    final = amountSold * 0.05;
                }
                else if(amountSold > 500 && amountSold <= 1000){
                    final = amountSold * 0.07;
                }
                else if(amountSold > 1000 && amountSold <= 10000){
                    final = amountSold * 0.08;
                }
                else if(amountSold > 10000){
                    final = amountSold * 0.12;
                }
            break;
            case "Varna":
                if(amountSold == 0 || amountSold <= 500){
                    final = amountSold * 0.045;
                }
                else if(amountSold > 500 && amountSold <= 1000){
                    final = amountSold * 0.075;
                }
                else if(amountSold > 1000 && amountSold <= 10000){
                    final = amountSold * 0.10;
                }
                else if(amountSold > 10000){
                    final = amountSold * 0.13;
                }
            break;
            case "Plovdiv":
                if(amountSold == 0 || amountSold <= 500){
                    final = amountSold * 0.055;
                }
                else if(amountSold > 500 && amountSold <= 1000){
                    final = amountSold * 0.08;
                }
                else if(amountSold > 1000 && amountSold <= 10000){
                    final = amountSold * 0.12;
                }
                else if(amountSold > 10000){
                    final = amountSold * 0.145;
                }
            break;
            default:
                console.log("error");
            break;
        }
            if(final >= 0){
                console.log(final.toFixed(2));
            }else if(final < 0){
                console.log("error");
            }
    }else{
        console.log("error");
    }
}

tradeCommissions(["Plovdiv", "-20"])
