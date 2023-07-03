// Ex. VII --> Да се напише функция, която получава като вида и размерите на геометрична фигура и пресмята лицето й. 
// Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). 
// На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle).

//· Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
//· Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
//· Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
//· Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - 
//     дължината на страната му и дължината на височината към нея

//Резултатът да се закръгли до 3 цифри след десетичната запетая.

function areaOfFigures(input){
    let type = input[0]
    let num1 = Number(input[1])
    let num2 = Number(input[2])
    let area;

    if(type === "square"){
        area = num1 * num1;
    }
    else if(type === "rectangle"){
        area = num1 * num2;
    }
    else if(type === "circle"){
        area = Math.PI * (num1 * num1);
    }
    else if(type === "triangle"){
        area = (num1 * num2) / 2;
    }

    console.log(area)
}

areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"])
areaOfFigures(["circle", "6"])
areaOfFigures(["triangle", "4.5", "20"])
