// A. donuts
// # Para um inteiro n retorna uma string na forma 'Número de donuts: <n>'
// # onde n é o valor passado como argumento.
// # Caso n >= 10 devo retornar 'muitos' em lugar do número.
// # donuts(5) returns 'Número de donuts: 5'
// # donuts(23) returns 'Número de donuts: muitos'
function donuts(n){
    if (n >= 10){
        return "Número de donuts: muitos";
    }else{
        return `Número de donuts: ${n}`;
    }
}

// # B. pontas
// # Dada uma string s, retorna uma string com as duas primeiras e as duas
// # últimas letras da string original s
// # Assim 'palmeiras' retorna 'paas'
// # No entanto, se a string tiver menos que 2 letras, retorna uma string vazia
function pontas(s){
    if (s.length < 2){
        return "";
    }
    return s.slice(0,2)+s.slice(-2);
}

// # C. fixa_primeiro
// # Dada uma string s, retorna uma string onde todas as ocorrências
// # do primeiro caracter são trocados por '*', exceto para o primeiro
// # Assim 'abacate' retorna 'ab*c*te'
// # Dica: use s.replace(stra, strb) 
function fixa_primeiro(stra){
    let new_string = "";
    for (let i=0; i<stra.length; i++){
        if (stra[i] === stra[0]){
            new_string += "*";
            continue;
        }
        new_string += stra[i];
    }
    return stra[0] + new_string.slice(1);
}

// # D. mistura2
// # Sejam duas strings a e b
// # Retorno uma string '<a> <b>' separada por um espaço
// # com as duas primeiras letras trocadas de cada string 
// #   'mix', pod' -> 'pox mid'
// #   'dog', 'dinner' -> 'dig donner'
function mistura2(a, b){
    return `${b[0]+a.slice(1)} ${a[0]+b.slice(1)}`;
}

// # E. palindrome
// # Verifique se uma string é palíndrome
// #   palindrome('asa') True
// #   palindrome('casa') False 
function palindrome(s){
    return s === s.split('').reverse().join('');
}

// # F. busca
// # Verifique quantas ocorrências de uma palavra há numa frase
// # frase = 'ana e mariana gostam de banana'
// # palavra = 'ana'
// # busca ('ana e mariana gostam de banana', 'ana') == 4
function busca(s, palavra){
    let count = 0;
    for (let i=0; i<=s.length-palavra.length; i++){
        if (s.slice(i, i+palavra.length) === palavra){
            count += 1;
        }
    }
    return count;
}


console.log(pontas('palmeiras'));  // 'paas'
console.log(pontas('ab'));         // 'ab'
console.log(pontas('a'));          // ''
console.log(pontas('xyz'));        // 'xyyz'
console.log(pontas('hello'));      // 'helo'
console.log(fixa_primeiro('abacate'));   // 'ab*c*te'
console.log(fixa_primeiro('banana'));    // 'ban*na'
console.log(fixa_primeiro('maçã'));      // 'ma*'
console.log(fixa_primeiro('cachorro'));  // 'ca*h*rr*'
console.log(fixa_primeiro('elefante'));  // 'elefant*'
console.log(mistura2('mix', 'pod'));      // 'pox mid'
console.log(mistura2('dog', 'dinner'));   // 'dig donner'
console.log(mistura2('apple', 'banana')); // 'bpple aanana'
console.log(mistura2('cat', 'mouse'));    // 'mat couse'
console.log(mistura2('hello', 'world'));  // 'wello horld'
console.log(palindrome('asa')); // true
console.log(palindrome('casa')); // false
console.log(palindrome('radar')); // true
console.log(palindrome('level')); // true
console.log(palindrome('hello')); // false
console.log(busca('ana e mariana gostam de banana', 'ana')); // Deve retornar 4
console.log(busca('banana e mariana gostam de banana', 'banana')); // Deve retornar 2
console.log(busca('abacate, maracujá e banana', 'ca')); // Deve retornar 1
console.log(busca('python é uma linguagem muito legal', 'java')); // Deve retornar 0
console.log(busca('teste de busca de palavras', 'busca')); // Deve retornar 1



