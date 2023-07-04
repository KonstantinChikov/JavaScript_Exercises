// Ex. I --> Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
// Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
// Секундите да се изведат с водеща нула (2 à "02", 7 à "07", 35 à "35").

function sumSeconds(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalTime = first + second + third;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10){    
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
    
}

sumSeconds([50 ,50 ,49])