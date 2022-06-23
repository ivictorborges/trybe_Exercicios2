// REQUISITO 1
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const registre = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, Email:`${email}@trybe.com`};
}
console.log(newEmployees(registre));

// REQUISITO 2
const numberCheck = (myNumber, number) => { myNumber === number };

const lottery = (myNumber, callback) => {
    const number = Math.floor((Math.random()*5) + 1);
    return callback(myNumber, number) ? 'Luck day, you won !' : 'Try again !';
}
console.log(lottery(1, numberCheck));

// REQUISITO 3
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    }
    if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
};

const countPoints = (rightAnswerToCount, studentAnswerToCount, callback) => {
    let counter = 0;
    for (let i = 0; i < rightAnswerToCount.length; i += 1) {
        const returnedChecks = callback(rightAnswerToCount[i], studentAnswerToCount[i]);
        counter += returnedChecks;
    };
    return `Resultado final : ${counter} pontos !`;
};
console.log(countPoints(rightAnswers, studentAnswers, checkAnswers));
