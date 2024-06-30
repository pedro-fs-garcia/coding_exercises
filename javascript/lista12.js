// # G. verbing
// # Dada uma string, caso seu comprimento seja pelo menos 3,
// # adiciona 'ing' no final
// # Caso a string já termine em 'ing', acrescentará 'ly'.
function verbing(s){
    if (s.length < 3){
        return s;
    }else{
        if (s.endsWith("ing")){
            return s+"ly";
        }
        return s+"ing";
    }
}

// # H. not_bad
// # Dada uma string, procura a primeira ocorrência de 'not' e 'bad'
// # Se 'bad' aparece depois de 'not' troca 'not' ... 'bad' por 'good'
// # Assim 'This dinner is not that bad!' retorna 'This dinner is good!'
function not_bad(s){
    let i_not = s.indexOf("not");
    let i_bad = s.indexOf("bad");
    if (i_not < i_bad){
        return s.slice(0, i_not)+"good"+s.slice(i_bad+3);
    }else{
        return s;
    }
}

// # I. inicio_final
// # Divida cada string em dois pedaços.
// # Se a string tiver um número ímpar de caracteres
// # o primeiro pedaço terá um caracter a mais,
// # Exemplo: 'abcde', divide-se em 'abc' e 'de'.
// # Dadas 2 strings, a e b, retorna a string
// # a_inicio + b_inicio + a_final + b_final
function inicio_final(a, b){
    let a_inicio = a.slice(0, Math.floor(a.length/2 + 0.5));
    let a_fim = a.slice(Math.floor(a.length/2 + 0.5));
    let b_inicio = b.slice(0, Math.floor(b.length/2+0.5));
    let b_fim = b.slice(Math.floor(b.length/2+0.5));
    return a_inicio + b_inicio + a_fim + b_fim;
}

// # J. zeros finais
// # Verifique quantos zeros há no final de um número inteiro positivo
// # Exemplo: 10010 tem 1 zero no fim e 908007000 possui três
function zeros_finais(n){
    let count = 0;
    while (n % 10 == 0){
        count += 1;
        n = n/10
    }
    return count;
}

// # K. conta 2
// # Verifique quantas vezes o dígito 2 aparece entre 0 e n-1
// # Exemplo: para n = 20 o dígito 2 aparece duas vezes entre 0 e 19
function conta2(n){
    let count = 0;
    for (number=0; number<n; number++){
        for (let digito of number.toString()){
            if(digito === "2"){
                count += 1;
            }
        }
    }
    return count;
}

// # L. inicio em potencia de 2
// # Dado um número inteiro positivo n retorne a primeira potência de 2
// # que tenha o início igual a n
// # Exemplo: para n = 65 retornará 16 pois 2**16 = 65536
function pot2(n){
    let exp = 0;
    while (true){
        if (String(2**exp).startsWith(String(n))){
            return exp;
        }
        exp += 1;
    }
}

console.log(verbing('go')); // Deve retornar 'going'
console.log(verbing('swim')); // Deve retornar 'swimming'
console.log(verbing('walk')); // Deve retornar 'walking'
console.log(verbing('jumping')); // Deve retornar 'jumpingly'
console.log(verbing('be')); // Deve retornar 'be'
console.log(verbing('ing')); // Deve retornar 'ing'

console.log(not_bad('This dinner is not that bad!')); // 'This dinner is good!'
console.log(not_bad('This movie is not so bad.')); // 'This movie is good.'
console.log(not_bad('This dinner is bad, not good!')); // 'This dinner is bad, not good!'
console.log(not_bad('This dinner is good, not bad!')); // 'This dinner is good, not bad!'
console.log(not_bad('It\'s not bad at all.')); // 'It's good at all.'
console.log(not_bad('not bad, not bad at all')); // 'good at all'
console.log(not_bad('It\'s not that great, but not bad.')); // 'It's not that great, but good.'

console.log(inicio_final('abcde', 'fghij')); // 'abcfghdejij'
console.log(inicio_final('Kitten', 'Donut')); // 'KitDonutenut'
console.log(inicio_final('Hello', 'There')); // 'HelThelloere'
console.log(inicio_final('abc', 'xyz')); // 'abxycz'
console.log(inicio_final('abcdef', 'xyz')); // 'abcxyzdefz'
console.log(zeros_finais(10010)); // Deve retornar 1
console.log(zeros_finais(908007000)); // Deve retornar 3
console.log(zeros_finais(100)); // Deve retornar 2
console.log(zeros_finais(12345)); // Deve retornar 0
console.log(zeros_finais(1000000)); // Deve retornar 6
console.log("-----------")
console.log(conta2(20));  // Deve retornar 2
console.log(conta2(555));   // Deve retornar 216
console.log(conta2(999)); // Deve retornar 300
console.log("´´´´´´´´´´´´´´´´´´´´")
console.log(pot2(65));  // Deve retornar 16 (2**16 = 65536)
console.log(pot2(1));   // Deve retornar 0 (2**0 = 1)
console.log(pot2(2));   // Deve retornar 1 (2**1 = 2)
console.log(pot2(3));   // Deve retornar 5 (2**5 = 32)
console.log(pot2(12));  // Deve retornar 7 (2**7 = 128)
console.log(pot2(10));  // Deve retornar 10 (2**10 = 1024)
console.log("=====")
console.log(pot2(7)); // 46
//console.log(pot2(133)); //316
console.log(pot2(1024)); //10