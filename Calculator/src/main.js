// input.js
const readline = require('readline');
const { add, subtract, multiply, divide } = require('./calculator');

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
      if(op === '+'){
        result = add(x, y);
      }else if(op === '-'){
        result = subtract(x, y);
      }else if(op === '*'){ 
        result = multiply(x, y);
      }else if(op === '/'){
        result = divide(x, y);
      }    
      
      console.log('결과:', result);
      rl.close();
    });
  });
});
