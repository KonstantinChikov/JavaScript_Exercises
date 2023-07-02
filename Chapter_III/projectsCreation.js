// Ex. VII --> Напишете програма, която изчислява колко часа ще са необходими на един архитект, 
// за да изготви проектите на няколко строителни обекта. 
// Изготвянето на един проект отнема три часа.

function projectsCreation(input){
    let arcName = input[0];
    let projectCount = Number(input[1]);
    let hoursNeeded = projectCount * 3;

    console.log(`The architect ${arcName} will need ${hoursNeeded} hours to complete ${projectCount} project/s.`);
}

projectsCreation(["Konstantin", 12])