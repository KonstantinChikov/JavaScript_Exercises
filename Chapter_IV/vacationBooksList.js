// Ex. IV --> За лятната ваканция в списъка със задължителна литература на Жоро има определен брой книги. 
// Понеже Жоро предпочита да играе с приятели навън, 
// вашата задача е да му помогнете да изчисли колко часа на ден трябва да отделя, за да прочете необходимата литература.

function vacationBooksList(input){
    let totalNumberOfPages = Number(input[0]);
    let readPagesForAnHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let allNeededHours = totalNumberOfPages / readPagesForAnHour;
    let dailyNeededHours = allNeededHours / daysNeeded;

    console.log(dailyNeededHours);
}

vacationBooksList([212, 20, 2])