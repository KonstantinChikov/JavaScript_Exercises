function Football(input){
    let countryName = input[0];
    let souvenir = input[1];
    let amount = Number(input[2]);

    let totalPrice = 0;
    let error = false;

    switch(countryName){
        case "Argentina":
            if(souvenir === "flags"){
                totalPrice = 3.25 * amount;
            }else if(souvenir === "caps"){
                totalPrice = 7.20 * amount;
            }
            else if(souvenir === "posters"){
                totalPrice = 5.10 * amount;
            }else if(souvenir === "stickers" ){
                totalPrice = 1.25 * amount;
            }else{
                error = true;
                console.log("Invalid stock!");
            }
            break;
        case "Brazil":
            if(souvenir === "flags"){
                totalPrice = 4.20 * amount;
            }else if(souvenir === "caps"){
                totalPrice = 8.50 * amount;
            }
            else if(souvenir === "posters"){
                totalPrice = 5.35 * amount;
            }else if(souvenir === "stickers" ){
                totalPrice = 1.20 * amount;
            }else{
                error = true;
                console.log("Invalid stock!");
            }
            break;
        case "Croatia":
            if(souvenir === "flags"){
                totalPrice = 2.75 * amount;
            }else if(souvenir === "caps"){
                totalPrice = 6.90 * amount;
            }
            else if(souvenir === "posters"){
                totalPrice = 4.95 * amount;
            }else if(souvenir === "stickers" ){
                totalPrice = 1.10 * amount;
            }else{
                error = true;
                console.log("Invalid stock!");
            }
            break;
        case "Denmark":
            if(souvenir === "flags"){
                totalPrice = 3.10 * amount;
            }else if(souvenir === "caps"){
                totalPrice = 6.50 * amount;
            }
            else if(souvenir === "posters"){
                totalPrice = 4.80 * amount;
            }else if(souvenir === "stickers" ){
                totalPrice = 0.90 * amount;
            }else{
                error = true;
                console.log("Invalid stock!");
            }
            break;
        default:
            error = true;
            console.log("Invalid country!");
            break;
    }
    if(!error){
        console.log(`Pepi bought ${amount} ${souvenir} of ${countryName} for ${totalPrice.toFixed(2)} lv.`);
    }

    
}

Football(["Brazil", "stickers", "5"])
