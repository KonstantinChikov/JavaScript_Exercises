function worldSnookerChampionship(input){
    let stage = input[0];
    let ticketType = input[1];
    let amountOfTickets = Number(input[2]);
    let photo = input[3];
    
    let totalTicketPrice = 0;
    let discount = false;

    if(stage === "Final"){
        if(ticketType === "VIP"){
            totalTicketPrice = amountOfTickets * 400;
        }
        else if(ticketType === "Premium"){
            totalTicketPrice = amountOfTickets * 160.66;
        }
        else if(ticketType === "Standard"){
            totalTicketPrice = amountOfTickets * 110.10;
        }
    }
    else if(stage === "“Semi final"){
        if(ticketType === "VIP"){
            totalTicketPrice = amountOfTickets * 300.40;
        }
        else if(ticketType === "Premium"){
            totalTicketPrice = amountOfTickets * 125.22;
        }
        else if(ticketType === "Standard"){
            totalTicketPrice = amountOfTickets * 75.88;
        }
    }
    else if(stage === "Quarter final"){
        if(ticketType === "VIP"){
            totalTicketPrice = amountOfTickets * 118.90;
        }
        else if(ticketType === "Premium"){
            totalTicketPrice = amountOfTickets * 105.20;
        }
        else if(ticketType === "Standard"){
            totalTicketPrice = amountOfTickets * 55.50;
        }
    }
    

    if(totalTicketPrice >= 4000){
        discount = true;
        totalTicketPrice = totalTicketPrice - (totalTicketPrice * 0.25)
    }else if(totalTicketPrice >= 2500 && totalTicketPrice < 4000){
        totalTicketPrice = totalTicketPrice - (totalTicketPrice * 0.10)
    }
    if(photo === "Y"){
        if(!discount){
            totalTicketPrice = totalTicketPrice + (amountOfTickets * 40);
        }
    }
    console.log((totalTicketPrice).toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"])
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"])