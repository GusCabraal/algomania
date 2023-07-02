function solution(string) {
  let firstIndex = 0;
  let lastIndex = string.length - 1;
  while (firstIndex < lastIndex) {
    if (string[firstIndex] == string[lastIndex]) {
      firstIndex += 1;
      lastIndex -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(solution("level"));
