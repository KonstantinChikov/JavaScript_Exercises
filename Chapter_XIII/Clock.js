// Ex. I --> Напишете функция, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред. 
// Часовете трябва да се изписват във формат "{час}:{минути}".

function Clock(){
    
    for(let h = 0; h <= 23; h++){
        for(let m = 0; m <= 59; m++){

            if(h < 10 && m < 10){
                console.log(`0${h}:0${m}`);
            }else if(h < 10 && m >= 10){
                console.log(`0${h}:${m}`);
            }else if(m < 10 && h >= 10){
                console.log(`${h}:0${m}`);
            }else{
                console.log(`${h}:${m}`);
            }
        }
    }
}

Clock()