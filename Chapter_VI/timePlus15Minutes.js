// Ex. III --> Да се напише функция, 
// която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. 
// Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, 
// а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. 
// Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.

function timePlus15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let remainder;
        minutes += 15;

    if(minutes >= 60){
        hours++;
        remainder = minutes - 60;
    }
    if(hours >= 24){
        hours = 0;
    } 

    if(minutes >= 60){
        if(remainder < 10){    
            console.log(`${hours}:0${remainder}`);
        }else
        console.log(`${hours}:${remainder}`);
    }
    else{
        console.log(`${hours}:${minutes}`);
    }
    
}

timePlus15Minutes([23, 46])