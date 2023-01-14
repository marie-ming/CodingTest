const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [N, arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let lef_cnt = 0;
let rig_cnt = 0;
let lef_max = 0;
let rig_max = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] === 1) {
    lef_cnt++;
    if (lef_max < lef_cnt) {
      lef_max = lef_cnt;
    }
  } else if (lef_cnt > 0) {
    lef_cnt--;
  }

  if (arr[i] === 2) {
    rig_cnt++;
    if (rig_max < rig_cnt) {
      rig_max = rig_cnt;
    }
  } else if (rig_cnt > 0) {
    rig_cnt--;
  }
}
if (lef_max > rig_max) console.log(lef_max);
else if (lef_max < rig_max) console.log(rig_max);
else console.log(rig_max);