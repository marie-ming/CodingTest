const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let sum = 0;

input.forEach((el) => {
  sum = sum + el;
});

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - input[i] - input[j] === 100) {
      input.forEach((el) => {
        if (el !== input[i] && el !== input[j]) {
          console.log(el);
        }
      });
    }
  }
}
