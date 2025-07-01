size = [int(i) for i in input().split()]

terreno = []
for i in range(size[0]):
    linha = [i for i in input().split()]
    terreno.append(linha)

def validaTerreno(terreno:list):
    for i in range(size[0]):
        for j in range(size[1]):
            if terreno[i][j] == "A":
                try:
                    if terreno[i+1][j] in "BD" or terreno[i-1][j] in "BD" or terreno[i][j+1] in "BD" or terreno[i][j-1] in "BD":
                        return "F"
                except IndexError:
                    pass
            elif terreno[i][j] == "B":
                try:
                    if terreno[i+1][j] in "AC" or terreno[i-1][j] in "AC" or terreno[i][j+1] in "AC" or terreno[i][j-1] in "AC":
                        return "F"
                except IndexError:
                    pass
            elif terreno[i][j] == "C":
                try:
                    if terreno[i+1][j] in "B" or terreno[i-1][j] in "B" or terreno[i][j+1] in "B" or terreno[i][j-1] in "B":
                        return "F"
                except IndexError:
                    pass
            elif terreno[i][j] == "D":
                try:
                    if terreno[i+1][j] in "A" or terreno[i-1][j] in "A" or terreno[i][j+1] in "A" or terreno[i][j-1] in "A":
                        return "F"
                except IndexError:
                    pass
    return "V"

print(validaTerreno(terreno))