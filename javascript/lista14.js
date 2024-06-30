// # D. Dada uma lista de números retorna uma lista sem os elementos repetidos
function norep(nums){
    let no_rep = [];
    for (let n of nums){
        if (!no_rep.includes(n)){
            no_rep.push(n);
        }
    }
    return no_rep;
}


// # E. Cripto desafio!!
// # Dada uma frase, você deve retirar todas as letras repetidas das palavras
// # e ordenar as letras que sobraram
// # Exemplo: 'ana e mariana gostam de banana' vira 'an e aimnr agmost de abn'
// # Dicas: tente transformar cada palavra em um conjunto,
// # depois tente ordenar as letras e montar uma string com o resultado.
// # Utilize listas auxiliares se facilitar
function cripto(frase){
    let n_frase = ""
    for (palavra of frase.split(" ")){
        setpalavra = Set(palavra);
        n_frase += Array.from(setpalavra).join("").sorted();
    }
    return n_frase;
}

// # F. Derivada de um polinômio
// # Os coeficientes de um polinômio estão numa lista na ordem do seu grau.
// # Você deverá devolver uma lista com os coeficientes da derivada.
// # Exemplo: [3, 2, 5, 2] retorna [2, 10, 6]
// # A derivada de 3 + 2x + 5x^2 + 2x^3 é 2 + 10x + 6x^2


// # G. Soma em listas invertidas
// # Colocamos os dígitos de dois números em listas ao contrário
// # 513 vira [3, 1, 5] e 295 vira [5, 9, 2]
// # [3, 1, 5] + [5, 9, 2] = [8, 0, 8]
// # pode supor que n1 e n2 tem o mesmo número de dígitos
// # Não vale converter a lista em número para somar diretamente


// # H. Anagrama
// # Verifique se duas palavras são anagramas,
// # isto é são uma é permutação das letras da outra
// # anagrama('aberto', 'rebato') = True
// # anagrama('amor', 'ramo') = True
// # anagrama('aba', 'baba') = False


console.log(norep([1, 2, 3, 3, 4, 5, 5, 5])); // Saída esperada: [1, 2, 3, 4, 5]
console.log(norep([7, 7, 7, 7, 7, 7])); // Saída esperada: [7]
console.log(norep([1, 2, 3, 4, 5])); // Saída esperada: [1, 2, 3, 4, 5]
console.log(norep([])); // Saída esperada: []
console.log(cripto('ana e mariana gostam de banana')); // Saída esperada: 'an e aimnr agmost de abn'
console.log(cripto('hello world')); // Saída esperada: 'ehlo dlrow'
console.log(cripto('programming is fun')); // Saída esperada: 'agimmnoprsu fns'