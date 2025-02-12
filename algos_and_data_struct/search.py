#linear serarch:
import math

#linear search
def linear_search(haystack:list[int], needle:int):
    for i in range(len(haystack)):
        if haystack[i] == needle:
            return True
    return False

#binary search
def binary_search(haystack:list[int], needle:int):
    high = len(haystack)
    low = 0
    while low <= high:
        index = (low + high)//2
        if haystack[index] == needle:
            return index
        elif haystack[index] > needle:
            high = index
        elif haystack[index] < needle:
            low = index + 1
    return -1

#jump search
def jump_search(haystack:list[int], needle:int):
    jump = int(math.sqrt(len(haystack)))
    last_good_index = 0
    while last_good_index < len(haystack) and haystack[min (jump + last_good_index, len(haystack)) -1] < needle:
        last_good_index += jump
        if last_good_index >= len(haystack):
            return -1
    for i in range(last_good_index, min(last_good_index + jump, len(haystack))):
        if haystack[i] == needle:
            return i
    return -1

# arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
# print(jump_search(arr, 70))   # Saída esperada: 6
# print(jump_search(arr, 25))   # Saída esperada: -1
# print(jump_search(arr, 100))  # Saída esperada: 9
# print(jump_search(arr, 10))   # Saída esperada: 0

#interpolation search
def interpolation_search(haystack:list[int], needle:int):
    low = 0
    high = len(haystack) - 1
    while low <= high and haystack[low] <= needle <= haystack[high]:
        if haystack[low] == haystack[high]:
            if haystack[low] == needle:
                return low
            else:
                return -1

        # Fórmula de interpolação
        pos = low + ((needle - haystack[low]) * (high - low)) // (haystack[high] - haystack[low])

        if haystack[pos] == needle:
            return pos
        elif haystack[pos] < needle:
            low = pos + 1
        else:
            high = pos - 1
    return -1

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
print(jump_search(arr, 70))   # Saída esperada: 6
print(jump_search(arr, 25))   # Saída esperada: -1
print(jump_search(arr, 100))  # Saída esperada: 9
print(jump_search(arr, 10))   # Saída esperada: 0
