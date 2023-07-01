 function petShop(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let total = dogFood * 2.5 + catFood * 4;

    console.log(`${total} lv.`)
 }

 petShop(["2", "2"])