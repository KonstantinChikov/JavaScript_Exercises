// Ex. VI --> Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: 
// студентски(student), стандартен(standard) и детски(kid), за всички прожекции. 
// Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.

//Входът е поредица от цели числа и текст:
//      · На първия ред до получаване на командата "Finish" - име на филма – текст
//      · На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
//      · За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
//              o Типа на закупения билет - текст ("student", "standard", "kid")

//На конзолата трябва да се печатат следните редове:
// · След всеки филм да се отпечата, колко процента от кино залата е пълна
//      "{името на филма} - {процент запълненост на залата}% full."
// · При получаване на командата "Finish" да се отпечатат четири реда:
//      o "Total tickets: {общият брой закупени билети за всички филми}"
//      o "{процент на студентските билети}% student tickets."
//      o "{процент на стандартните билети}% standard tickets."
//      o "{процент на детските билети}% kids tickets."


function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    index++;

    let countStudentTickets = 0;
    let countStandartTickets = 0;
    let countKidsTickets = 0;
    let countTotal = 0;

    while(command !== "Finish"){
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;
        let countSellTicket = 0;
        while(ticketType !== "End"){
            countSellTicket++;

            switch(ticketType){
                case "student" : countStudentTickets++; break;
                case "standard": countStandartTickets++; break;
                case "kid"     : countKidsTickets++; break;
            }
            if(countSellTicket == freeSpace){
                break;
            }
            ticketType = input[index];
            index++;
        }
        countTotal += countSellTicket;
        let percentage = countSellTicket / freeSpace * 100;
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${countTotal}`);
    console.log(`${(countStudentTickets / countTotal * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandartTickets / countTotal * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKidsTickets / countTotal * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
                    "Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End",
                    "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"
             ])