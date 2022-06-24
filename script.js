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

// BÔNUS
// PARTE I
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
const battleMembers = { mage, warrior, dragon };

// REQUISITO 1
const dragonAttack = (dragon) => {
    const minDmg = 15;
    const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
    return dragonDmg;
  };

// REQUISITO 2
const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = minDmg * warrior.weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    return warriorDamage;
  };

// REQUISITO 3
const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDamage;
      return turnStats;
    }
    return turnStats;
  };

// PARTE II
const gameActions = {
    // REQUISITO 1
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    // REQUISITO 2
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.damageDealt;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    // REQUISITO 3
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    // REQUISITO 4
    turnResults: () => battleMembers,
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());

