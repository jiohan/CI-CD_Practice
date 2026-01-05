// input.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('첫 번째 숫자: ', (a) => {
  rl.question('연산자(+ - * /): ', (op) => {
    rl.question('두 번째 숫자: ', (b) => {
      const x = Number(a);
      const y = Number(b);

      let result;
     // 연산자에 따라 계산 수행
      console.log('결과:', result);
      rl.close();
    });
  });
});
