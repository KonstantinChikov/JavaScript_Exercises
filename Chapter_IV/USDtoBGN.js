// Ex. I --> Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). 
// Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.

function USDtoBGN(input){
    let dollars = Number(input[0]);
    let leva = dollars * 1.79549; 

    console.log(leva);
}

 USDtoBGN([13])