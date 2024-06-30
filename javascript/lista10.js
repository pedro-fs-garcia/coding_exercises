// # A. near_ten 
// # Seja um n não negativo,
// # retorna True se o número está a distância de
// # no máximo dois de um múltiplo de dez.
// # near_ten(12) -> True
// # near_ten(17) -> False
// # near_ten(19) -> True
function near_ten(n){
    return n % 10 <= 2 || n % 10 >= 8;
}


// # B. lone_sum
// # Soma maluca: some os números inteiros a, b, e c
// # Se algum número aparecer repetido ele não conta na soma
// # lone_sum(1, 2, 3) -> 6
// # lone_sum(3, 2, 3) ->2
// # lone_sum(3, 3, 3) -> 0
function lone_sum(a, b, c){
    let soma = 0; 
    if (a!=b && a!=c){
        soma += a;
    }
    if ( b != a && b!= c){
        soma += b;
    }
    if (c!= a && c!=b){
        soma += c
    }
    return soma;
}
    
// # C. luck_sum #
// # Soma três inteiros a, b, c
// # Se aparecer um 13 ele não conta e todos os da
// #sua direita também
// # lucky_sum(1, 2, 3) -> 6
// # lucky_sum(1, 2, 13) -> 3
// # lucky_sum(1, 13, 3) -> 1
function luck_sum (a, b, c){
    let soma = 0;
    let nums = [a, b, c]
    for (let n of nums){
        if (n == 13){
            break;
        }
        soma += n;
    }
    return soma;
}

// # D. double_char #
// # retorna os caracteres da string original duplicados
// # double_char('The') -> 'TThhee'
// # double_char('AAbb') -> 'AAAAbbbb'
// # double_char('Hi-There') -> 'HHii--TThheerree'
function double_char(s){
    let str = "";
    for (let char of s){
        str += char.repeat(2);
    }
    return str;
}

// # E. count_hi #
// # conta o número de vezes que aparece a string 'hi'
// # count_hi('abc hi ho') -> 1
// # count_hi('ABChi hi') -> 2
// # count_hi('hihi') -> 2
function count_hi(s){
    let count = 0;
    for (i=0; i<s.length-1; i++){
        if (s.slice(i, i+2) == "hi"){
            count += 1;
        }
    }
    return count;
}

// # F. cat_dog #
// # verifica se o aparece o mesmo número de vezes 'cat' e 'dog'
// # cat_dog('catdog') -> True
// # cat_dog('catcat') -> False
// # cat_dog('1cat1cadodog') -> True
function cat_dog(s){
    let cat = 0;
    let dog = 0;
    for (let i=0; i< s.length-2; i++){
        if (s.slice(i, i+3) == "cat"){
            cat += 1;
        }
        if (s.slice(i, i+3) == "dog"){
            dog += 1;
        }
    }
    return cat == dog;
}

// # G. count_code #
// # conta quantas vezes aparece 'code'
// # a letra 'd' pode ser trocada por outra qualquer
// # assim 'coxe' ou 'coze' também são contadas como 'code'
// # count_code('aaacodebbb') -> 1
// # count_code('codexxcode') -> 2
// # count_code('cozexxcope') -> 2
function count_code(s){
    let count = 0;
    for (let i=0; i<s.length-3; i++){
        if (s.slice(i, i+2) === "co" && s[i+3] === "e"){
            count += 1;
        }
    }
    return count;
}

// # H. end_other #
// # as duas strings devem ser convertidas para minúsculo via lower()
// # depois disso verifique que no final da string b ocorre a string a
// # ou se no final da string a ocorre a string b
// # end_other('Hiabc', 'abc') -> True
// # end_other('AbC', 'HiaBc') -> True
// # end_other('abc', 'abXabc') -> True
function end_other(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a.endsWith(b) || b.endsWith(a);
}

// # I. count_evens
// # conta os números pares da lista
// # count_evens([2, 1, 2, 3, 4]) -> 3
// # count_evens([2, 2, 0]) -> 3
// # count_evens([1, 3, 5]) -> 0
function count_evens(nums){
    let count = 0;
    for (let n of nums){
        if (n % 2 === 0){
            count += 1;
        }
    }
    return count;
}

// # J. sum13 #
// # retorna a soma dos números de uma lista
// # 13 dá azar, você deverá ignorar o 13 e todos os números à sua direita
// # sum13([1, 2, 2, 1]) -> 6
// # sum13([1, 1]) -> 2
// # sum13([1, 2, 2, 1, 13]) -> 6
// # sum13([13, 1, 2, 3, 4]) -> 0
function sum_13(nums){
    let soma = 0;
    for (let n of nums){
        if (n === 13){
            break;
        }
        soma += n;
    }
    return soma;
}

// # K. has22 #
// # Verifica se na lista de números inteiros aparecem dois 2 consecutivos
// # has22([1, 2, 2]) -> True
// # has22([1, 2, 1, 2]) -> False
// # has22([2, 1, 2]) -> False
function has_22(nums){
    for (i=0; i<nums.length-1 ; i++){
        if (nums[i] === 2 && nums[i+1] == 2){
            return true;
        }
    }
    return false;
}

// # L. soma_na_lista #
// # Verifica se um número é soma de dois elementos distintos de uma lista
// # soma_na_lista(5, [1, 2, 3, 4]) -> True
// # soma_na_lista(9, [1, 2, 3, 4]) -> False
// # soma_na_lista(0, [1, 2, 3, 4]) -> False
// # soma_na_lista(8, [1, 2, 3, 4]) -> False
// # soma_na_lista(4, [2, 2, 2, 2]) -> False
// # soma_na_lista(4, [2, 2, 1, 3]) -> True
function soma_na_lista(n, nums){
    for (let i=0; i<nums.length; i++){
        for (let j=0; j<nums.length; j++){
            if (nums[i] != nums[j] && nums[i]+nums[j]===n){
                return true
            }
        }
    }
    return false;
}

// # M.Difícil: Fila de tijolos sem usar loops #
// # queremos montar uma fila de tijolos de um tamanho denominado meta
// # temos tijolos pequenos (tamanho 1) e tijolos grandes (tamanho 5)
// # retorna True se for possível montar a fila de tijolos
// # é possível uma solução sem usar for ou while
// # fila_tijolos(3, 1, 8) -> True
// # fila_tijolos(3, 1, 9) -> False
// # fila_tijolos(3, 2, 10) -> True
function fila_tijolos(n_peq, n_gra, meta){
    return n_gra*5 + n_peq >= meta && n_peq >= meta%5;
}


console.log(near_ten(12)); // True
console.log(near_ten(17)); // False
console.log(near_ten(19)); // True
console.log(near_ten(20)); // True
console.log(near_ten(22)); // True
console.log(near_ten(23)); // False
console.log(near_ten(29)); // True
console.log(lone_sum(1, 2, 3)); // 6
console.log(lone_sum(3, 2, 3)); // 2
console.log(lone_sum(3, 3, 3)); // 0
console.log(lone_sum(1, 1, 2)); // 2
console.log(lone_sum(1, 2, 2)); // 1
console.log(lone_sum(2, 1, 1)); // 2
console.log("-------------")
console.log(luck_sum(1, 2, 3)); // 6
console.log(luck_sum(1, 2, 13)); // 3
console.log(luck_sum(1, 13, 3)); // 1
console.log(luck_sum(13, 2, 3)); // 0
console.log(luck_sum(5, 5, 5)); // 15
console.log(luck_sum(5, 13, 5)); // 5
console.log(luck_sum(5, 5, 13)); // 10
console.log(luck_sum(13, 13, 13)); // 0
console.log(double_char('The'));      // 'TThhee'
console.log(double_char('AAbb'));     // 'AAAAbbbb'
console.log(double_char('Hi-There')); // 'HHii--TThheerree'
console.log(count_hi('abc hi ho'));  // 1
console.log(count_hi('ABChi hi'));   // 2
console.log(count_hi('hihi'));       // 2
console.log(cat_dog('catdog'));         // True
console.log(cat_dog('catcat'));         // False
console.log(cat_dog('1cat1cadodog'));   // True
console.log(count_code('aaacodebbb'));     // 1
console.log(count_code('codexxcode'));     // 2
console.log(count_code('cozexxcope'));     // 2
console.log(count_code('coxe'));           // 1
console.log(count_code('codecoae'));       // 2
console.log(end_other('Hiabc', 'abc'));   // Saída: true
console.log(end_other('AbC', 'HiaBc'));   // Saída: true
console.log(end_other('abc', 'abXabc'));  // Saída: true
console.log(count_evens([2, 1, 2, 3, 4])); // Saída: 3
console.log(count_evens([2, 2, 0]));       // Saída: 3
console.log(count_evens([1, 3, 5]));       // Saída: 0
console.log(sum_13([1, 2, 2, 1]));     // Saída: 6
console.log(sum_13([1, 1]));           // Saída: 2
console.log(sum_13([1, 2, 2, 1, 13])); // Saída: 6
console.log(sum_13([13, 1, 2, 3, 4])); // Saída: 0
console.log(has_22([1, 2, 2]));     // Saída: true
console.log(has_22([1, 2, 1, 2]));  // Saída: false
console.log(has_22([2, 1, 2]));     // Saída: false
console.log("----------------------------")
console.log(soma_na_lista(5, [1, 2, 3, 4]));   // Saída: true
console.log(soma_na_lista(9, [1, 2, 3, 4]));   // Saída: false (nenhuma combinação soma 12)
console.log(soma_na_lista(0, [1, 2, 3, 4]));    // Saída: false
console.log(soma_na_lista(8, [1, 2, 3, 4]));    // Saída: false (nenhuma combinação soma 5)
console.log(soma_na_lista(4, [2,2,2,2])); //false
console.log(soma_na_lista(4, [2, 2, 1, 3]));//true 
console.log("------------------------------")
console.log(fila_tijolos(3, 1, 8));   // Saída: true
console.log(fila_tijolos(3, 1, 9));   // Saída: false
console.log(fila_tijolos(3, 2, 10));  // Saída: true


