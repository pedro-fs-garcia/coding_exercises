#1
def ingresso(orcamento, pmenor, pmaior):
    total = 0
    poss = []

    for i in range(1, orcamento//pmenor):
        for j in range (1, orcamento//pmaior):
            if (pmenor*i + pmaior*j) == orcamento:
                poss.append([i,j])

    for x, y in poss:
        if x + y > total:
            total = x + y

    return total


#2
def romano():
    unid = [''] + 'I II III IV V VI VII VIII IX'.split()

    dez = [''] + 'X XX XXX XL L LX LXX LXXX XC'.split()

    cent = [''] + 'C CC CCC CD D DC DCC DCCC CM'.split()

    mil = [''] + 'M MM MMM'.split()


    decimal = 999
    m = decimal//1000
    decimal = decimal % 1000
    c = decimal //100
    decimal = decimal % 100
    d = decimal//10
    decimal = decimal % 10
    u = decimal

    print(mil[m]+cent[c]+dez[d]+unid[u])


#3
def calcula_pi(n):
    pi = 0
    count = 0
    d = 1
    sign = 1

    while count < 1000000:
        pi += 4/d*sign
        d += 2
        sign *= -1
        count += 1
    print(f"{pi:.{n}}")


#A. problema de josephus
def josephus(n,m):
    n = 50
    m=3
    circulo = []
    dead = []
    for i in range(1, n+1):
        circulo.append(i)
    print(circulo)

#B
import math
def erastotenes(m):
    values = [x for x in range (2, m+1)]
    n = 2
    while n <= int(math.sqrt(m)+1):
        for i in values:
            if i != n and i % n == 0:
                dex = values.index(i)
                del values[dex]
        n += 1
    return values


#C
def fib(n):
    f = [1, 2]
    s = 0
    while f[-1] <= n:
        f.append(f[-1]+f[-2])
    for i in f:
        if i % 2 != 0:
            s += i
    return s


#D. o homem que calculava
def total_arroz():
    tabuleiro = range(64)
    arroz = 0
    for i in tabuleiro:
        arroz += 2**i
    return arroz


#E. 
def quadrados(azulejos):
    dimensoes = []
    numero_quadrados = {}
    def prox_quadrado(azulejos):
        maior_quadrado = 0
        while maior_quadrado**2 <= azulejos:
            if (maior_quadrado+1)**2 > azulejos:
                return maior_quadrado
            maior_quadrado += 1
        return maior_quadrado
    
    while azulejos - prox_quadrado(azulejos) >= 1:
        dimensoes.append(prox_quadrado(azulejos))
        azulejos -= prox_quadrado(azulejos)**2
        if azulejos == 1:
            dimensoes.append(azulejos)
    
    for i in dimensoes:
        if i not in numero_quadrados:
            numero_quadrados[i] = dimensoes.count(i)

    resp = ""
    for i in numero_quadrados:
        resp += f"{numero_quadrados[i]} quadrado(s) de  lado {i}\n"
    return resp