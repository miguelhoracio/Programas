word = "lamInadAnimal";
console.log(word.charCodeAt(0));
function isPalindrome(word) {
  let en_medio = parseInt(word.length / 2) - 1;
  console.log(en_medio);
  count = 0;
  for (let j = 0; j < word.length; j++) {
    if (word.charCodeAt(j) < 92 && word.charCodeAt(j) > 64) {
      word[j] = String.fromCharCode(word.charCodeAt(j + 32));
    }
  }
  console.log(word);
  isPalin = true;
  for (let i = 0; i <= en_medio; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      isPalin = false;
    }
  }
  return isPalin;
}
if (isPalindrome(word)) {
  console.log("Is palindrome");
} else {
  console.log("Not palindrome");
}
