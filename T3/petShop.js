 // Ex. VIII --> Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки. 
 // Храната се пазарува от зоомагазин, 
 // като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4 лв.
 
 function petShop(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let total = dogFood * 2.5 + catFood * 4;

    console.log(`${total} lv.`)
 }

 petShop(["2", "2"])