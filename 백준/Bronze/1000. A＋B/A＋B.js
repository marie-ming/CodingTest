const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
input = input.split(" ").map(Number);
console.log(input[1] + input[0]);
