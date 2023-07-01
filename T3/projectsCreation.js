function projectsCreation(input){
    let arcName = input[0];
    let projectCount = Number(input[1]);
    let hoursNeeded = projectCount * 3;

    console.log(`The architect ${arcName} will need ${hoursNeeded} hours to complete ${projectCount} project/s.`);
}

projectsCreation(["Konstantin", 12])