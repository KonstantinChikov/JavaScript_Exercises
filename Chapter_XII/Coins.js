// Ex. V --> Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. 
// Напишете функция, която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това.
// Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка

function Coins(input){
    let change = Number(input[0]);
    let inCoins = Math.floor(change * 100);
    let coinsCounter = 0;

    while(inCoins > 0){
        if(inCoins >= 200){
            inCoins -= 200;
            coinsCounter++;
        }else if(inCoins >= 100){
            inCoins -= 100;
            coinsCounter++;
        }else if(inCoins >= 50){
            inCoins -= 50;
            coinsCounter++;
        }else if(inCoins >= 20){
            inCoins -= 20;
            coinsCounter++;
        }else if(inCoins >= 10){
            inCoins -= 10;
            coinsCounter++;
        }else if(inCoins >= 5){
            inCoins -= 5;
            coinsCounter++;
        }else if(inCoins >= 2){
            inCoins -= 2;
            coinsCounter++;
        }else if(inCoins >= 1){
            inCoins -= 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}

Coins(["1.23"])     
Coins(["2"])        
Coins(["0.56"])     