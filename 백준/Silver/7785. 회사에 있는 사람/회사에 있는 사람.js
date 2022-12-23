const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr]  = fs.readFileSync(filePath).toString().trim().split("\n").map((el) => el.split(" "));

let set = new Set();

for (let i = 0; i < arr.length; i++) {
  if (arr[i][1] === "enter") {
    set.add(arr[i][0]);
  } else {
    set.delete(arr[i][0]);
  }
}

console.log(...[...set].sort().reverse());