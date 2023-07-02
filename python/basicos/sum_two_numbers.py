def solution(numbers:list[int], target_sum:int):
  numbers.sort()
  first_index = 0
  last_index = len(numbers) - 1

  while first_index < last_index:
    menor = numbers[first_index]
    maior = numbers[last_index]
    if menor + maior > target_sum:
      last_index -= 1
    elif menor + maior < target_sum:
      first_index += 1
    else: 
      return [menor, maior]
  return False


print(solution([4, 1, 2, -2, 11, 15, 1, -1, -6, -4], -10))

