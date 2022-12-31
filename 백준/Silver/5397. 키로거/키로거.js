const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

for (let i = 0; i < N; i++) {
  let text = arr[i].split("");
  let front = [];
  let back = [];

  for (let j = 0; j < text.length; j++) {
    switch (text[j]) {
      case "<":
        if (front.length > 0) {
          back.push(front.pop());
        }
        break;
      case ">":
        if (back.length > 0) {
          front.push(back.pop());
        }
        break;
      case "-":
        if (front.length > 0) {
          front.pop();
        }
        break;

      default:
        front.push(text[j]);
        break;
    }
  }
  console.log(front.join("") + back.reverse().join(""));
}
