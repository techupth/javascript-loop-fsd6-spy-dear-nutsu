// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = scores[scores.length - 1];
// minScore = scores[0];

for (let score of scores) {
  console.log(minScore);

  if (score < minScore) {
    minScore = score;
  }
}

console.log(minScore);
