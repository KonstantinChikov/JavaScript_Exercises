// Ex. V --> Напишете функция, която получава име на човек и отпечатва "Hello, <name>!",
// където <name> е въведеното име от конзолата.

function greetingByName(input){

    let name = input[0]
    console.log(`Hello, ${name}!`);
}

greetingByName(["Koko"])