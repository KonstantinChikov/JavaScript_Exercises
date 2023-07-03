// Ex. IV --> Да се напише функция, която получава парола (текст) и 
// проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd". 
// При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!".

function passwordGuess(input){
    let password = "s3cr3t!P@ssw0rd";
    let passwordGuess = input[0];

    if(password == passwordGuess){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"])