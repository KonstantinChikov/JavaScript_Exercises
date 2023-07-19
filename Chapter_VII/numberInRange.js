// Ex. VI --> Да се напише функция, 
// която проверява дали въведеното от потребителя число е в интервала [-100, 100] и е различно от 0 и извежда "Yes", 
// ако отговаря на условията, или "No" ако е извън тях

function numberInRange(input){
    let userNumber = Number(input[0]);

    if(userNumber >= -100 && userNumber <= 100){
        if(userNumber == 0){
            console.log("No");
        }else{   
            console.log("Yes");
        }
    }else{
        console.log("No");

    }
}

numberInRange(["0"])