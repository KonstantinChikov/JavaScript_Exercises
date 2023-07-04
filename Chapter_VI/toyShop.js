// Ex. IV --> Петя има магазин за детски играчки. 
// Тя получава голяма поръчка, която трябва да изпълни. 
// С парите, които ще спечели иска да отиде на екскурзия.

//Цени на играчките:

//· Пъзел - 2.60 лв.
//· Говореща кукла - 3 лв.
//· Плюшено мече - 4.10 лв.
//· Миньон - 8.20 лв.
//· Камионче - 2 лв.

// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. 
// От спечелените пари Петя трябва да даде 10% за наема на магазина. 
// Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let price = (puzzles * 2.6) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let toyCount = puzzles + dolls + bears + minions + trucks;

    if(toyCount >= 50){
         let priceWithDiscount = price - (price * 0.25); // -25%

         let priceAfterRentAndDiscount = priceWithDiscount - (priceWithDiscount * 0.10); // -10%
         let totalPrice = priceAfterRentAndDiscount - tripPrice;
         totalPrice = Math.abs(totalPrice);
     
         if(totalPrice > tripPrice){
             console.log(`Yes! ${(totalPrice).toFixed(2)} lv left.`);
         }else{
             console.log(`Not enough money! ${(totalPrice).toFixed(2)} lv needed.`);
         }
    }
    else if(toyCount < 50){

        let priceAfterRent = price - (price * 0.10); // -10%
        let totalPrice = priceAfterRent - tripPrice;
        totalPrice = Math.abs(totalPrice);

        if(totalPrice > tripPrice){
            console.log(`Yes! ${(totalPrice).toFixed(2)} lv left.`);
        }else{
            console.log(`Not enough money! ${(totalPrice).toFixed(2)} lv needed.`);
        }
    }

}

toyShop(["320", "8", "2", "5", "5", "1"])
//   70/100 in judge!       
