// Ex. III --> Напишете програма, която изчислява каква сума ще получите в края на депозитния период при определен лихвен процент. 
//Използвайте следната формула:
//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function depositCalculator(input){
    let depositedAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    //let sum = depositedAmount + depositTerm * ((depositedAmount * annualInterestRate) / 12);
    let accruedInterest = depositedAmount * (annualInterestRate / 100);
    let interest = accruedInterest / 12;
    let sum = depositedAmount + depositTerm * interest;

    console.log(sum);
}

depositCalculator([2350, 6, 7])