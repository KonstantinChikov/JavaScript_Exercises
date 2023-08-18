// Ex. IV --> Курсът "Train the trainers" е към края си и финалното оценяване наближава. 
// Вашата задача е да помогнете на журито, което ще оценява презентациите, като напишете функция, 
// която да изчислява средната оценка от представянето на всяка една презентация от даден студент, 
// а накрая средният успех от всички тях.

//От първия елемент на масива се прочита броят на хората в журито n - цяло число в интервала [1…20]

//След това името на презентацията - текст
//За всяка една презентация като нов елемент се чете n - на брой оценки - реално число в интервала [2.00…6.00]

//След изчисляване на средната оценка за конкретна презентация, на конзолата се печата\
//"{името на презентацията} - {средна оценка}."

//След получаване на команда "Finish" на конзолата се печата "Student's final assessment is {среден успех от всички презентации}."
//   и програмата приключва.
//Всички оценки трябва да бъдат форматирани до втория знак след десетичната запетая.

function TrainTheTrainers(input){
    let index = 0;
    let n  = Number(input[index]);
    index++;
    
    let command = input[index];
    index++;

    let sumGrade = 0;
    let counter = 0;

    while(command !== "Finish"){
        counter++;
        let presentationName = command;
        let sum = 0;

        for(let i = 0; i < n; i++){
            let grade = Number(input[index]);
            index++;    

            sum += grade;
        }

        let tempAvg = sum / n;
        sumGrade += tempAvg;
        console.log(`${presentationName} - ${tempAvg.toFixed(2)}.`);

        command = input[index];
        index++;
    }

    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}

// TrainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])
TrainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"])