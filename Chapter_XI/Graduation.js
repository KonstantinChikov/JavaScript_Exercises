// Ex. VIII --> Напишете програма, която изчислява средната оценка на ученик от цялото му обучение. 
// На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни оценки. 
// Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или равна на 4.00. 
// Ако ученикът бъде скъсан повече от един път, то той бива изключен и програмата приключва, 
// като се отпечатва името на ученика и в кой клас бива изключен.

// При успешно завършване на 12-ти клас да се отпечата :
//      "{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
// В случай, че ученикът е изключен от училище, да се отпечата:
//      "{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
// Стойността трябва да бъде форматирана до втория знак след десетичната запетая.

function Graduation(input){
    let index = 0;
    let name = input[index];
    index++;

    let sumGrade = 0;
    let Class = 1;
    let badGradeCounter = 0; 
    let hasExcluded = false;

    while(Class <= 12){
        let grade = Number(input[index]);
        index++;

        if(grade < 4.00){
            badGradeCounter++;
            if(badGradeCounter === 2){
                console.log(`${name} has been excluded at ${Class} grade`);
                hasExcluded = true;
                break;
            }
            continue;
        }

        sumGrade += grade;
        Class++;
    }

    if(hasExcluded == false){
        console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
    }
}

Graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
Graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])