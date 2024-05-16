// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;

minScore = scores[scores.length - 1];

for (let score of scores) {
  console.log(minScore);

  if (score < minScore) {
    minScore = score;
  }
}

console.log(minScore);
