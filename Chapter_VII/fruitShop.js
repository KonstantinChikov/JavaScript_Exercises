// Ex. XI --> Магазин за плодове през работните дни работи на следните цени:

//  .______.________._______.________.____________.______.___________.________.
//  | плод | banana | apple | orange | grapefruit | kiwi | pineapple | grapes |
//  |------|--------|-------|--------|------------|------|-----------|--------|
//  | цена |  2.50  |  1.20 |  0.85  |    1.45    | 2.70 |    5.50   |  3.85  |
//  |______|________|_______|________|____________|______|___________|________|


//              Събота и неделя магазинът работи на по-високи цени:
//  .______.________._______.________.____________.______.___________.________.
//  | плод | banana | apple | orange | grapefruit | kiwi | pineapple | grapes |
//  |------|--------|-------|--------|------------|------|-----------|--------|
//  | цена |  2.70  |  1.25 |  0.90  |    1.60    | 3.00 |   5.60    |  4.20  |
//  |______|________|_______|________|____________|______|___________|________|

// Напишете функция, която получава аргументи:
// плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
// ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и 
// количество (число) и пресмята цената според цените от таблиците по-горе. 
// Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. 
// При невалиден ден от седмицата или невалидно име на плод да се отпечата "error".

function fruitShop(input){
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let totalPrice;

    if(product === "banana" || product === "apple" || product === "orange" || product === "grapefruit" || product === "kiwi" || product === "pineapple" || product === "grapes"){
        switch(day){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday": 
                switch(product){
                    case "banana":
                        totalPrice = quantity * 2.50;
                        break;
                    case "apple":
                        totalPrice = quantity * 1.20;
                        break;
                    case "orange":
                        totalPrice = quantity * 0.85;
                        break;
                    case "grapefruit":
                        totalPrice = quantity * 1.45;
                        break;
                    case "kiwi":
                        totalPrice = quantity * 2.70;
                        break;
                    case "pineapple":
                        totalPrice = quantity * 5.50;
                        break;
                    case "grapes":
                        totalPrice = quantity * 3.85;
                        break;
            }
            console.log(totalPrice.toFixed(2));
            break;
            case "Saturday":
            case "Sunday":
                switch(product){
                    case "banana":
                        totalPrice = quantity * 2.70;
                        break;
                    case "apple":
                        totalPrice = quantity * 1.25;
                        break;
                    case "orange":
                        totalPrice = quantity * 0.90;
                        break;
                    case "grapefruit":
                        totalPrice = quantity * 1.60;
                        break;
                    case "kiwi":
                        totalPrice = quantity * 3.00;
                        break;
                    case "pineapple":
                        totalPrice = quantity * 5.60;
                        break;
                    case "grapes":
                        totalPrice = quantity * 4.20;
                        break;
            }
            console.log(totalPrice.toFixed(2));
            break;
            default:
                console.log("error");
                break;
        }

    }else{
        console.log("error");
    }
}

fruitShop(["tomato", "Monday", "0.5"])