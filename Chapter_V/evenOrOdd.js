// Ex. III --> Да се напише функция, която получава цяло число като аргумент и отпечатва на конзолата, 
// дали е четно или нечетно. Ако е четно отпечатайте "even", ако е нечетно "odd".

function evenOrOdd(input){
    let userNumber = Number(input[0]);

    if(userNumber % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

evenOrOdd([14])