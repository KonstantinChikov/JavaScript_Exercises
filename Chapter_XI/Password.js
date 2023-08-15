// Ex. II --> Напишете функция, която първоначално прочита име и парола на потребителски профил. 
// След това чете парола за вход.

//· при въвеждане на грешна парола: потребителя да се подкани да въведе нова парола.
//· при въвеждане на правилна парола: отпечатваме "Welcome {username}!".

function Password(input){
    let index = 0;

    let username = input[0];
    index++;
    let password = input[1];
    index++;
    let tempPassword = input[index];
    index++;

    while(tempPassword !== password){
        tempPassword = input[index];
        index++;
    }

    console.log("Welcome " + username + "!");

}

Password([
            "Nakov",
            "1234",
            "Pass",
            "1324",
            "1234"
        ])