const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");
const [N, M, K] = input[0]
  .split(" ")
  .map((v) => +v)
  .map(Number);
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

//음식물 위치
let trash = Array.from(Array(N), () => Array(M).fill(0));
for (let i = 0; i < K; i++) {
  const y = arr[i][0];
  const x = arr[i][1];
  trash[y - 1][x - 1] = 1;
}

let ans = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let visited = Array.from(Array(N), () => Array(M).fill(false));
let result = 1;

const DFS = (y, x) => {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (
      ny >= 0 &&
      nx >= 0 &&
      ny < N &&
      nx < M &&
      !visited[ny][nx] &&
      trash[ny][nx] === 1
    ) {
      result += 1;
      DFS(ny, nx);
    }
  }

  return;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (trash[i][j] === 1) {
      DFS(i, j);
      ans.push(result);
      result = 1;
    }
  }
}

console.log(Math.max(...ans));
