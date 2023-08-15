// Ex. I --> Напишете функция, която чете елементите на масив, докато не получи командата "Stop".

function readText(input) {
    let index = 0;
    let comand = input[index];
    index++;

    while(true){
        if(comand === "Stop"){
            break;
        }
        console.log(comand);
        comand = input[index];
        index++
    }
}

readText([
            "Nakov",
            "SoftUni",
            "Sofia",
            "Bulgaria",
            "SomeText",
            "Stop",
            "AfterStop",
            "Europe",
            "HelloWorld"
        ])