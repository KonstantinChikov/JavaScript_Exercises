// Ex. II

function mountainRun(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForAMeter = Number(input[2]);

    let timeNeeded = (distance * timeForAMeter) + ((distance/50)*30);

    if(record <= timeNeeded){
        console.log(`"No! He was ${(timeNeeded - record).toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes! The new record is ${(timeNeeded).toFixed(2)} seconds.`);
    }
}

mountainRun(["5554.36", "1340", "3.23"])