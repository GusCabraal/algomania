function solution(numbers, target_sum) {
  // Insira a sua solução aqui... :-)
  const sorted_numbers = numbers.sort((a, b) => a - b);
  let first_index = 0;
  let last_index = numbers.length - 1;

  while (first_index < last_index) {
    const menor = sorted_numbers[first_index];
    const maior = sorted_numbers[last_index];
    if (menor + maior > target_sum) {
      last_index -= 1;
    } else if (menor + maior < target_sum) {
      first_index += 1;
    } else {
      return [menor, maior];
    }
  }
  return [];
}

console.log(solution([4, 1, 2, -2, 11, 15, 1, -1, -6, -4], -100));
