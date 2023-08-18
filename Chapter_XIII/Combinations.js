// Ex. III --> Напишете функция, която изчислява колко решения в естествените числа (включително и нулата) има уравнението:
//                      x1 + x2 + x3 = n
//                      Числото n е цяло число и се въвежда от конзолата. 

function Combinations(input){
    let n = Number(input[0]);
    let validCounter = 0;

    for(let x1 = 0; x1 <= n; x1++){
        for(let x2 = 0; x2 <= n; x2++){
            for(let x3 = 0; x3 <= n; x3++){

                if((x1 + x2 + x3) === n ){
                    validCounter++;
                }

            }
        }
    }
    console.log(validCounter);
}

Combinations([25])