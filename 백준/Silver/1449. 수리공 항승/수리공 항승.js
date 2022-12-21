const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [NL, arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const coord = new Array(1001);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < coord.length; j++) {
    if (arr[i] === j) {
      coord[j] = 0;
    }
  }
}

let ans = 0;
let x = 0;

while (x <= 1000) {
  if (coord[x] === 0) {
    ans += 1;
    x += NL[1];
  } else {
    x += 1;
  }
}

console.log(ans);
