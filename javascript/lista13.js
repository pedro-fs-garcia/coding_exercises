// # A. fim_igual
// # Dada uma lista de strings, retorna o número de strings
// # com tamanho >= 2 onde o primeiro e o último caracteres são iguais
// # Exemplo: ['aba', 'xyz', 'aa', 'x', 'bbb'] retorna 3
function fim_igual(l){
    let count = 0;
    for (let item of l){
        if (item.length >= 2 && item[0]===item[item.length-1]){
            count += 1;
        }
    }
    return count;
}

// # B. x_antes
// # Dada uma lista de strings retorna uma lista onde
// # todos os elementos que começam com x ficam sorteados antes 
// # Ex.: ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] retorna
// # ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
// # Dica: monte duas listas separadas e junte-as no final
function x_antes(list){
    let x = [];
    let nx = [];
    for (let str of list){
        if (str.startsWith("x")){
            x.push(str);
        }else{
            nx.push(str);
        }
    }
    x.sort();
    nx.sort();
    return x.concat(nx);
}

// # C. sort_last
// # Dada uma lista de tuplas não vazias retorna uma tupla ordenada
// # por ordem crescente do último elemento 
// # Exemplo [(1, 7), (1, 3), (3, 4, 5), (2, 2)] retorna
// # [(2, 2), (1, 3), (3, 4, 5), (1, 7)]
// # Dica: use key=função que você definiu e que retorna o último elemento




console.log(fim_igual(['aba', 'xyz', 'aa', 'x', 'bbb'])); // Deve retornar 3
console.log(fim_igual(['abc', 'def', 'ghi', 'aa', 'a'])); // Deve retornar 1
console.log(fim_igual(['abcd', 'efgh', 'ijkl']));         // Deve retornar 0
console.log(fim_igual(['a', 'b', 'c', 'd', 'e']));        // Deve retornar 0
console.log(fim_igual(['wow', 'noon', 'radar', 'level']));// Deve retornar 4
console.log(fim_igual([]));                               // Deve retornar 0
console.log(x_antes(['mix', 'xyz', 'apple', 'xanadu', 'aardvark'])); 