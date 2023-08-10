// Ex. VI --> Да се напише функция, която получава,
// изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу:

//  .__________.___.___.___.___.___.
//  |   буква  | a | e | i | o | u |
//  |----------|---|---|---|---|---|
//  | стойност | 1 | 2 | 3 | 4 | 5 |
//  |__________|___|___|___|___|___|

function vowelsSum(input){
    let userText = input[0];

    const vowelValues = {
        'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5
    };

    let sum = 0;

    for (let i = 0; i < userText.length; i++) {
        const c = userText[i].toLowerCase();
        if (vowelValues.hasOwnProperty(c)) {
            sum += vowelValues[c];
        }
    }

    console.log(sum);
}

vowelsSum(["hello"])