// Ex. III --> Напишете функция, която отпечатва класа на животното според неговото име, въведено от потребителя.

// 1. dog -> mammal
// 2. crocodile, tortoise, snake -> reptile
// 3. others -> unknown

function animalType(input){
    let userInput = input[0];

    switch(userInput){
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise" :
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}

animalType(["snake"])