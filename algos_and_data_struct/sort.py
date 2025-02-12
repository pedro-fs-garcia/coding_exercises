#bubble sort
#compara um elemento com o proximo e muda de lugar se necessário. Na primeria rodada, o maior numero irá para o final
def bubble_sort(arr:list[int]):
    n = len(arr)
    for j in range(n):
        swapped = False
        for i in range(n - j - 1):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                swapped = True
        if not swapped:
            break

#selection sort
#percorre a lista em busca do menor numero e o passa para o começo
def selection_sort(arr:list[int]):
    n = len(arr)
    for i in range(n - 1):
        last_lower = i
        for j in range(i + 1, n):
            if arr[j] < arr[last_lower]:
                last_lower = j
        arr[i], arr[last_lower] = arr[last_lower], arr[i]

#insertion sort
#percorre a lista elemento por elemento, deslocando os valores maiores para frente até encontrar o local certo
def insertion_sort(arr: list[int]) -> list[int]:
    n = len(arr)

    for i in range(1, n):
        key = arr[i] 
        j = i - 1 

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    
    return arr

#quick sort



#merge sort