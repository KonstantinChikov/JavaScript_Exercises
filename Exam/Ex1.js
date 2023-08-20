function Book(input){
    let pricePerPaper = Number(input[0]);
    let pricePerCover = Number(input[1]);
    let discount = Number(input[2]);
    let priceForDesign = Number(input[3]);
    let pricePaid = Number(input[4]);

    let totalForPaper = (pricePerPaper*899) + (pricePerCover*2);
    totalForPaper = totalForPaper - (totalForPaper*(discount/100));
    totalForPaper += priceForDesign;

    totalForPaper = totalForPaper - (totalForPaper*(pricePaid/100));
    console.log(`Avtonom should pay ${totalForPaper.toFixed(2)} BGN.`);

}

Book(["0.01",
"1",
"10",
"20",
"20"])
