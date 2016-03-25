function countWords(inputWords) {
  return inputWords.reduce(function (total, word) {
    total[word] = ++total[word] || 1;
    return total;
  }, {});
}

module.exports = countWords;