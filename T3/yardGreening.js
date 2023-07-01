function yardGreening(input){
    let sqrArea = Number(input[0])
    //cost for 1 sqr.m is 7.61 & we have 18% discount
    
    let initialCost = sqrArea * 7.61;
    let discount = initialCost * 0.18
    let totalCost = initialCost - discount;

    console.log(`The final price is: ${totalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["1220"])