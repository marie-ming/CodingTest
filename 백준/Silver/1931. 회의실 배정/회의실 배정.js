const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

//1) 먼저 끝나는 회의
//2) 끝나는 시간이 같다면, 먼저 시작하는 회의
const schedule = arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let ans = 0;
let recentEnd = 0;

schedule.forEach(([start, end]) => {
  //전에 진행된 회의가 끝나기 전에 시작되면 다음으로
  if (start < recentEnd) {
    return;
  }
  //아니면 진행
  ans++;
  recentEnd = end;
});

console.log(ans);
