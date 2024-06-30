// # A. multstring
// # seja uma string s e um inteiro positivo n
// # retorna uma string com n cópias da string original
// # multstring('Hi', 2) -> 'HiHi'
function multistring(s, n){
    return s.repeat(n);
}

// # B. string_splosion
// # string_splosion('Code') -> 'CCoCodCode'
// # string_splosion('abc') -> 'aababc'
// # string_splosion('ab') -> 'aab'
function string_splosion(s){
    let str = ""
    for (var i = 0; i <= s.length; i++){
        str += s.slice(0, i)
    }
    return str
}

// # C. array_count9
// # conta quantas vezes aparece o 9 numa lista nums
function array_count9(nums){
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 9){
            count ++;
        }
    }
    return count;
}

// # D. array_front9
// # verifica se pelo menos um dos quatro primeiros é nove
// # array_front9([1, 2, 9, 3, 4]) -> True
// # array_front9([1, 2, 3, 4, 9]) -> False
// # array_front9([1, 2, 3, 4, 5]) -> False
function array_front9(nums){
    for (let i = 0; i < 4; i++){
        if (nums[i] == 9){
            return true;
        }
    }
    return false;
}


// # E. hello_name
// # seja uma string name
// # hello_name('Bob') -> 'Hello Bob!'
// # hello_name('Alice') -> 'Hello Alice!'
// # hello_name('X') -> 'Hello X!'
function hello_name(name){
    return "hello "+name+"!";
}


// # F. make_tags
// # make_tags('i', 'Yay'), '<i>Yay</i>'
// # make_tags('i', 'Hello'), '<i>Hello</i>'
// # make_tags('cite', 'Yay'), '<cite>Yay</cite>'
function make_tags(tag, str){
    return "<"+tag+">"+str+"</"+tag+">"
}


// # G. extra_end
// # seja um string s com no mínimo duas letras
// # retorna três vezes as duas últimas letras
// # extra_end('Hello'), 'lololo'
// # extra_end('ab'), 'ababab'
// # extra_end('Hi'), 'HiHiHi'
function extra_end(s){
    return s.slice(s.length-2).repeat(3);
}


// # H. first_half
// # seja uma string s
// # retorna a primeira metade da string
// # first_half('WooHoo') -> 'Woo'
// # first_half('HelloThere') -> 'Hello'
// # first_half('abcdef') -> 'abc'
function first_half(s){
    return s.slice(0, s.length/2);
}

// # I. sem_pontas
// # seja uma string s de pelo menos dois caracteres
// # retorna uma string sem o primeiro e último caracter
// # without_end('Hello') -> 'ell'
// # without_end('python') -> 'ytho'
// # without_end('coding') -> 'odin'
function sem_pontas(s){
    return s.slice(1, s.length - 1);
}

// # J. roda2
// # rodar uma string s duas posições
// # a string possui pelo menos 2 caracteres
// # left2('Hello') -> 'lloHe'
// # left2('Hi') -> 'Hi'
function roda2(s){
    if (s.length <= 2){
        return s;
    }
    return s.slice(2)+s.slice(0,2);
}

console.log(multistring('Hi', 2)); // 'HiHi'
console.log(multistring('Hello', 3)); // 'HelloHelloHello'
console.log(multistring('A', 5)); // 'AAAAA'
console.log(string_splosion('Code')); // Deve imprimir 'CCoCodCode'
console.log(string_splosion('abc')); // Deve imprimir 'aababc'
console.log(string_splosion('ab')); // Deve imprimir 'aab'
console.log(array_count9([1, 9, 9, 3, 9])); // Deve imprimir 3
console.log(array_count9([1, 2, 3, 4]));    // Deve imprimir 0
console.log(array_count9([9, 2, 9, 9, 5])); // Deve imprimir 3
console.log(array_front9([1, 2, 9, 3, 4])); // Deve imprimir true
console.log(array_front9([1, 2, 3, 4, 9])); // Deve imprimir false
console.log(array_front9([1, 2, 3, 4, 5])); // Deve imprimir false
console.log(hello_name('Bob'));   // Deve imprimir 'Hello Bob!'
console.log(hello_name('Alice')); // Deve imprimir 'Hello Alice!'
console.log(hello_name('X'));     // Deve imprimir 'Hello X!'
console.log(make_tags('i', 'Yay'));   // Deve imprimir '<i>Yay</i>'
console.log(make_tags('i', 'Hello')); // Deve imprimir '<i>Hello</i>'
console.log(make_tags('cite', 'Yay')); // Deve imprimir '<cite>Yay</cite>'
console.log(extra_end('Hello')); // Deve imprimir 'lololo'
console.log(extra_end('ab'));    // Deve imprimir 'ababab'
console.log(extra_end('Hi'));    // Deve imprimir 'HiHiHi'
console.log(first_half('WooHoo'));    // Deve imprimir 'Woo'
console.log(first_half('HelloThere')); // Deve imprimir 'Hello'
console.log(first_half('abcdef'));    // Deve imprimir 'abc'
console.log(sem_pontas('Hello'));   // Deve imprimir 'ell'
console.log(sem_pontas('python'));  // Deve imprimir 'ytho'
console.log(sem_pontas('coding'));  // Deve imprimir 'odin'
console.log(roda2('Hello'));   // Deve imprimir 'lloHe'
console.log(roda2('Hi'));      // Deve imprimir 'Hi'
console.log(roda2('coding'));  // Deve imprimir 'dingco'

