const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

const oarr = arr[0].split("");
const numObj = [];
let startCode = 65;
const stack = [];

for (let i = 0; i < N; i++) {
  numObj[String.fromCharCode(startCode)] = Number(arr[i + 1]);
  startCode++;
}

const command = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

oarr.forEach((el) => {
  if ("A" <= el && "Z" >= el) {
    stack.push(numObj[el]);
  } else {
    const b = stack.pop();
    const a = stack.pop();
    stack.push(command[el](a, b));
  }
});

console.log(stack[0].toFixed(2));
