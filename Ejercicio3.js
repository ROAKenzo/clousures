const readline = require("readline");

let flag = false;

const createGame = () => {
  let secret = Math.round(Math.random() * (100 - 1) + 1);
  
  return (number) => {
    if (Number(number) === secret) {
      console.log("Lo adivinaste, felicitaciones!");
      flag = true;
    }
    if (number > secret) {
      console.log("Muy alto!");
    }
    if (number < secret) {
      console.log("Muy bajo!");
    }
  };
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`Presiona enter para jugar`, () => {
      console.log(`El juego ha empezado, debes adivinar el número secreto`);
      resolve();
    });
  });
};
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question(`Escribe un número:  `, (intento) => {
      const guess = createGame();
      guess(intento);
      resolve();
    });
  });
};

const main = async () => {
  await question1();
  while (flag === false) {
    await question2();
  }
  rl.close();
};

main();
