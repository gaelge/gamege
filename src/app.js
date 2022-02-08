const prompt = require('prompt');
const colors = require('colors');
const _ = require('lodash');

prompt.message = colors.rainbow(">>>");
prompt.delimiter = colors.green(" ");

prompt.start();

const LEVEL_0 = 'Facile';
const LEVEL_1 = 'Moyen';
const LEVEL_2 = 'Difficile';

const greeting = async () => {
    console.log('### Bienvenue dans notre jeu du plus ou du moins ###');
}

const chooseLevel = async () => {
    let level = 0;
    do {
        console.log('*** Choisissez un niveau ***');
        console.log(`1 => ${LEVEL_0}`);
        console.log(`2 => ${LEVEL_1}`);
        console.log(`3 => ${LEVEL_2}`);
        const res = await prompt.get([{ name: 'choicedLevel', description: 'Veuillez entrer le numéro du niveau:'}]);
        level = res.choicedLevel;
    } while(level != 1 && level != 2 && level != 3);

    return level;
}

const randomMin = async () => {
    return _.random(500);
}

const randomMax = async (level, minNumber) => {
    if (level == 1) {
        return (minNumber + 20);
    } else if (level == 2) {
        return (minNumber + 100);
    } else {
        return (minNumber + 500);
    }
}

const chooseRandomNumber = async (minNumber, maxNumber) => {
    return _.random(minNumber, maxNumber);
}

const setAttemptCount = async (level) => {
    if (level == 1) {
        return 5;
    } else if (level == 2) {
        return 10;
    } else {
        return 20;
    }
}

const requestNumber = async (minNumber, maxNumber) => {
    const res = await prompt.get([{ name: 'requestedNumber', description: `Veuillez entrer un nombre compris entre ${minNumber} et ${maxNumber}:`}]);
    return _.toInteger(res.requestedNumber);
}

const calculStatus = async (requestedNumber, randomNumber) => {
    if (requestedNumber === randomNumber) {
        console.log('Bravo');
        return true;
    } else if (requestedNumber < randomNumber) {
        console.log("C'est un peu plus...");
    } else {
        console.log("C'est un peu moins...");
    }
    return false;
}

const game = async () => {
    greeting();
    const choicedLevel = await chooseLevel();
    const minNumber = await randomMin();
    const maxNumber = await randomMax(choicedLevel, minNumber);
    const randomNumber = await chooseRandomNumber(minNumber, maxNumber);
    let attemptCount = await setAttemptCount(choicedLevel);
    console.log(randomNumber);

    console.log(`*** Nombre de tentatives: ${attemptCount} ***`);
    while(attemptCount > 0) {
        const requestedNumber = await requestNumber(minNumber, maxNumber);
        const status = await calculStatus(requestedNumber, randomNumber);

        if (status) {
            break;
        } else {
            --attemptCount;
        }

        if (attemptCount != 0) {
            console.log(`*** Nombre de tentatives restantes: ${attemptCount} ***`);
        }
    }

    if (attemptCount === 0) {
        console.log('*** GAME OVER ***');
        console.log(`Le nombre mystère est: ${randomNumber}`);
    }
    
};

const start = async () => {
    await game();
};

start();

module.exports = {
    setAttemptCount
}