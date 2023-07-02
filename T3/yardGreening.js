// Ex. IX --> Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях, 
// като по този начин създаде уютна обстановка и комфорт на гостите си. За целта е наела фирма.
// Напишете програма, която изчислява необходимате сума, 
// които Божидара ще трябва да заплати на фирмата изпълнител на проекта. 
// Цената на един кв. м. е 7.61 лв със ДДС. Понеже нейният двор е доста голям, 
// фирмата изпълнител предлага 18% отстъпка от крайната цена.

function yardGreening(input){
    let sqrArea = Number(input[0])
    //cost for 1 sqr.m is 7.61 & we have 18% discount
    
    let initialCost = sqrArea * 7.61;
    let discount = initialCost * 0.18
    let totalCost = initialCost - discount;

    console.log(`The final price is: ${totalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["1220"])