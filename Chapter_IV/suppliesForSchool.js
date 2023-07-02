// Ex. V --> Учебната година вече е започнала и отговорничката на 10"Б" клас - Ани трябва да купи определен брой пакетчета с химикали,
// пакетчета с маркери, както и препарат за почистване на дъска. 
// Тя е редовна клиентка на една книжарница, затова има намаление за нея, 
// което представлява някакъв процент от общата сума. 
// Напишете програма, която изчислява колко пари ще трябва да събере Ани, 
// за да плати сметката, като имате предвид следния ценоразпис:

//• Пакет химикали - 5.80 лв.
//• Пакет маркери - 7.20 лв.
//• Препарат - 1.20 лв (за литър)

function suppliesForSchool(input){
    let numberOfPenPackages = Number(input[0]);
    let numberOfMarkerPackages = Number(input[1]);
    let litersOfCleaner = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let cost = (numberOfPenPackages * 5.80) + (numberOfMarkerPackages * 7.20) + (litersOfCleaner * 1.20);
    let discount = discountPercentage / 100;
    let total = cost - (cost * discount);

    console.log(total);
}

suppliesForSchool([2, 3, 4, 25])