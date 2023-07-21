// Ex. IX --> Да се напише функция, която получава аргумент име на продукт и проверява дали е плод или зеленчук.

//· Плодовете "fruit" имат следните възможни стойности: banana, apple, kiwi, cherry, lemon и grapes
//· Зеленчуците "vegetable" имат следните възможни стойности: tomato, cucumber, pepper и carrot
//· Всички останали са "unknown"

//Да се изведе "fruit", "vegetable" или "unknown" според въведения продукт

function fruitOrVegetable(input){
    let userInput = input[0];

    switch(userInput){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}

fruitOrVegetable(["banana"])