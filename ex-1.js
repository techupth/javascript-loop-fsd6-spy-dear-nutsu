// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
let newScores = [];

for (let item of scores) {
  item = item - 10;
  newScores.push(item);
}

console.log(newScores);
