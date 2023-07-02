def solution_one(string:str):
    reverse_string = string[::-1]
    return  string == reverse_string

print(solution_one('level'))


def solution_two(string:str):
    first_index = 0
    last_index = len(string) - 1
    while first_index < last_index:
        if string[first_index] == string[last_index]:
            first_index += 1
            last_index -= 1
        else:
            return False
    return True

print(solution_two('level'))


def solution_three(string:str):
    last_index = len(string) - 1
    for index, letter in enumerate(string):
        if letter != string[last_index - index]:
            return False
    return True



print(solution_three('level'))

def solution_four(string:str):
    rev_index = len(string) - 1
    for index in range(len(string)):
        if string[index] != string[rev_index]:
            return False
        rev_index -= 1
    return True



print(solution_four('level'))