import random
#with open("hangman.txt", "w") as file:
#    file.write("gg")

def one():
    with open("hangman.txt", "r") as file:
        w = file.readlines()
    print(w)

def two():
    l = []
    for i in open("hangman.txt"):
        l.append(i)
    print(l)

def three():
    t = list(open("hangman.txt"))
    print(t)

def get_word():
    words = list(open("sowpods.txt"))
    p = random.choice(words)
    p.strip("\n")
    return p.removesuffix("\n")
