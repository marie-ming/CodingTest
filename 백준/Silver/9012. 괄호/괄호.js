const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let stack = [];
  let ans = "YES";
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      stack.push(1);
    } else if (input[i][j] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        ans = "NO";
        break;
      }
    }
  }
  if (stack.length > 0) {
    ans = "NO";
  }
  console.log(ans);
}
