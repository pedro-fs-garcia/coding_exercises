def dec2bin(n):
    p = []
    while n:
        p.append(n%2)
        n = n // 2
    while len(p): print(p.pop(), end = " ")

dec2bin(18)
print("\n")

