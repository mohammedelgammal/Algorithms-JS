function findLongestWordLength(str) {
  let words = str.split(" "),
      lengths = [];
  words.forEach(word => lengths.push(word.length));
  return Math.max(...lengths);
}