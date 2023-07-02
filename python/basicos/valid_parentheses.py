def solution_one(str_to_validate:str):
    my_array = []
    for letter in str_to_validate:
        if letter == '(' or letter == '[' or letter == '{':
            my_array.append(letter)
        elif len(my_array) == 0:
            return False
        elif letter == ']' and my_array[-1] == '[':
            my_array.pop()
        elif letter == '}' and my_array[-1] == '{':
            my_array.pop()
        elif letter == ')' and my_array[-1] == '(':
            my_array.pop()
        else:
            return False
    return True


print(solution_one(']'))


def solution_two(str_to_validate:str):
    stack = []

    mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for s in str_to_validate:
        if s in mapping:
            if len(stack) and mapping[s] == stack.pop():
                continue
        stack.append(s)
    return len(stack) == 0

print(solution_two(']'))