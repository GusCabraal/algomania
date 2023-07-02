// function solution(str_to_validate) {
//   const myArray = [];
//   for (let i = 0; i < str_to_validate.length; i++) {
//     if (
//       str_to_validate[i] == "(" ||
//       str_to_validate[i] == "[" ||
//       str_to_validate[i] == "{"
//     ) {
//       myArray.push(str_to_validate[i]);
//     } else if (
//       str_to_validate[i] == "]" &&
//       myArray[myArray.length - 1] == "["
//     ) {
//       myArray.pop();
//     } else if (
//       str_to_validate[i] == "}" &&
//       myArray[myArray.length - 1] == "{"
//     ) {
//       myArray.pop();
//     } else if (
//       str_to_validate[i] == ")" &&
//       myArray[myArray.length - 1] == "("
//     ) {
//       myArray.pop();
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(solution("]"));

function solutionTwo(str_to_validate) {
  stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str_to_validate.length; i++) {
    if (mapping.hasOwnProperty(str_to_validate[i])) {
      if (stack.length && mapping[str_to_validate[i] === stack.pop()]) {
      }
      continue;
    }
    stack.push(str_to_validate[i]);
  }
  return stack.length === 0;
}

console.log(solutionTwo("[(){}[]()]"));
