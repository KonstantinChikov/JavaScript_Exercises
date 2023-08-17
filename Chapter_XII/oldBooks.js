// Ex. I --> Ани отива до родния си град след много дълъг период извън страната. 
// Прибирайки се вкъщи тя вижда старата библиотека на баба си и си спомня за любимата си книга. 
// Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). 
// Докато Ани не намери любимата си книга или не провери всички в библиотеката, 
// програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). 
// Книгите в библиотеката са свършили щом получите текст "No More Books".

//o· Ако не открие книгата да се отпечата на два реда:
//      -> "The book you search is not here!"
//      ->"You checked {брой} books."

//o· Ако открие книгата си се отпечатва един ред:
//      -> "You checked {брой} books and found it."

function oldBooks(input){
    let searchBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let nextBookName = input[index];

    while(nextBookName !== "No More Books"){
        if(nextBookName === searchBook){
            bookIsFound = true;
            break;
        }
        index++;
        nextBookName = input[index]
    }

    if(bookIsFound){
        console.log(`You checked ${index -1} books and found it.`);
    }else if(!bookIsFound){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"])
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])