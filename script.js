let randomInd = require('./randomizer');

const obj = {
    verb1: ['do', 'learn', 'travel', 'succeed', 'forgive'],
    verb2: ['forget', 'cheat', 'leave', 'agree', 'ignore'],
    verb3: ['fighting', 'programming', 'working', 'traveling', 'building']
}

let array = [];

for (let key in obj) {
    let list = obj[key];
    let verb = list[randomInd(list.length)];
    array.push(verb);
}

const inspire = function () {
    console.log(`"The Best Way To ${array[0]} Is To ${array[1]} And Begin ${array[2]}.”`)
}

inspire();