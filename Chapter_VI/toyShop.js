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
        price = price * 0.75;
    }
    price = price * 0.90;

    if(price >= tripPrice){
        console.log(`Yes! ${(price - tripPrice).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(tripPrice - price).toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"])    