//Ex. II --> Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. 
// При всяка решена задача той получава оценка. 
// Функцията трябва да приключи прочитането на данни при команда "Enough" или ако 
// Марин получи определеният брой незадоволителни оценки. 
// Незадоволителна е всяка оценка, която е по-малка или равна на 4.

//o· Ако Марин стигне до командата "Enough", отпечатайте на 3 реда:
//      -> "Average score: {средна оценка}"
//      -> "Number of problems: {броя на всички задачи}"
//      -> "Last problem: {името на последната задача}"

//o· Ако получи определеният брой незадоволителни оценки:
//      -> "You need a break, {брой незадоволителни оценки} poor grades."

// Средната оценка да бъде форматирана до втория знак след десетичната запетая.

function examPreparation(input){
    let index = 0;
    let numberOfBadGradesPossible = Number(input[index]);
    index++

    let numberOfBadGrades = 0;
    let numberOfGrades = 0;
    let grades = 0;
    let sum = 0;
    let lastEx;

    while(numberOfBadGrades < numberOfBadGradesPossible){
        lastEx = input[index];
        index++;
        gardes = input[index];
        index++;

        if(grades <= 4){
            numberOfBadGrades++;
            numberOfGrades++;
            if(numberOfBadGrades === numberOfBadGradesPossible){
                console.log(`You need a break, ${numberOfBadGrades} poor grades.`);
                break;
            }
        }else if (grades > 4){
            numberOfGrades++;
            sum += gardes;
        }

        if(lastEx === "Enough"){
            console.log(`Average score: ${sum / numberOfGrades}`);
            console.log(`Number of problems: ${numberOfGrades}`);
            console.log(`Last problem: ${lastEx}`);
            break;
        }

        index++;
        lastEx = input[index];
        index++;
        gardes = input[index];
    }

}

examPreparation(["3", "Money", "6", "Story", "4", "SpringTime", "5", "Bus", "6", "Enough"])