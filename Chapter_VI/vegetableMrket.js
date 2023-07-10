function vegetableMarket(input){
    let vegetablesPricePerKg = Number(input[0]);
    let fruitsPricePerKg = Number(input[1]);
    let totalVegetablesKg = Number(input[2]);
    let totalFruitsKg = Number(input[3]);

    let totalVegetablesPrice = totalVegetablesKg * vegetablesPricePerKg;
    let totalFruitsPrice = totalFruitsKg * fruitsPricePerKg;

    let Price = totalVegetablesPrice + totalFruitsPrice;
    let totalPrice = Price / 1.94;

    console.log(totalPrice.toFixed(2));


}

vegetableMarket([0.194, 19.4, 10, 10])