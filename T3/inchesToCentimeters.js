// Ex. IV --> Да се напише функция, която чете от конзолата реално число и го преобразува от инчове в сантиметри. 
// За целта умножете инчовете по 2.54 (1 инч = 2.54 сантиметра).

function inchesToCentimeters(input){
    
    let inches = Number(input[0]);
    let centimeters = inches * 2.54;
    console.log(centimeters);
}

inchesToCentimeters([34])