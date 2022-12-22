const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");
let [n, m] = input.split(" ").map((e) => +e),
  graph = [],
  visited = new Array(n + 1).fill(false);

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

inputs.forEach((el) => {
  let [a, b] = el.split(" ").map((e) => +e);
  graph[a].push(b);
  graph[b].push(a);
});

let cnt = 0;

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    DFS(i);
    cnt++;
  }
}

console.log(cnt);

function DFS(v) {
  if (visited[v] == true) return;
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (visited[graph[v][i]] == false) {
      DFS(graph[v][i]);
    }
  }
}
