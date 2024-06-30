
// # A. dormir
// # dia_semana é True para dias na semana
// # feriado é True nos feriados
// # você pode ficar dormindo quando é feriado ou não é dia semana
// # retorne True ou False conforme você vá dormir ou não
function dormir(feriado, dia_semana){
    return (feriado || !dia_semana);
}

// # B. alunos_problema
// # temos dois alunos a e b
// # a_sorri e b_sorri indicam se a e b sorriem
// # temos problemas quando ambos estão sorrindo ou ambos não estão sorrindo
// # retorne True quando houver problemas
function alunos_problema(a_sorri, b_sorri){
    return (a_sorri == b_sorri);
}

// # C. soma_dobro
// # dados dois números inteiros retorna sua soma
// # porém se os números forem iguais retorna o dobro da soma
// # soma_dobro(1, 2) -> 3
// # soma_dobro(2, 2) -> 8
function soma_dobro(a, b){
    if (a == b){
        return (a + b)*2;
    }else{
        return a + b;
    }
}

// # D. diff21
// # dado um inteiro n retorna a diferença absoluta entre n e 21
// # porém se o número for maior que 21 retorna dobro da diferença absoluta
// # diff21(19) -> 2
// # diff21(25) -> 8
// # dica: abs(x) retorna o valor absoluto de x
function diff21(n){
    if (n > 21){
        return 2*Math.abs(n - 21);
    }else{
        return Math.abs(n - 21);
    }
}

// # E. papagaio
// # temos um papagaio que fala alto
// # hora é um parâmetro entre 0 e 23
// # temos problemas se o papagaio estiver falando
// # antes da 7 ou depois das 20
function papagaio(falando, hora){
    return falando && (hora < 7 || hora > 20);
 }

// # F. dez
// # dados dois inteiros a e b
// # retorna True se um dos dois é 10 ou a soma é 10
function dez(a, b){
    if (a==10 || b == 10 || a+b == 10){
        return true;
    }
    return false;
}

// # G. dista10
// # seja um inteiro n
// # retorna True se a diferença absoluta entre n e 100 ou n e 200
// # for menor ou igual a 10
// # dista10(93) -> True
// # dista10(90) -> True
// # dista10(89) -> False
function dista10(n){
    return Math.abs(n-100) <= 10 || Math.abs(n-200) <= 10;
}

// # H. apaga
// # seja uma string s e um inteiro n
// # retorna uma nova string sem a posição n
// # apaga('kitten', 1) -> 'ktten'
// # apaga('kitten', 4) -> 'kittn'
function apaga(s, n){
    return s.slice(0,n) + s.slice(n+1)
}

// # I. troca
// # seja uma string s
// # se s tiver tamanho <= 1 retorna ela mesma
// # caso contrário troca a primeira e última letra
function troca(s){
    if (s.length > 1){
        return s[s.length - 1] + s.slice(1, -1) + s[0];
    }
    return s;
}



function runTests() {
    // Testando dormir
    if (dormir(true, true) !== true) return false;
    if (dormir(true, false) !== true) return false;
    if (dormir(false, true) !== false) return false;
    if (dormir(false, false) !== true) return false;

    // Testando alunos_problema
    if (alunos_problema(true, true) !== true) return false;
    if (alunos_problema(false, false) !== true) return false;
    if (alunos_problema(true, false) !== false) return false;
    if (alunos_problema(false, true) !== false) return false;

    // Testando soma_dobro
    if (soma_dobro(1, 2) !== 3) return false;
    if (soma_dobro(2, 2) !== 8) return false;
    if (soma_dobro(3, 3) !== 12) return false;
    if (soma_dobro(3, 4) !== 7) return false;

    // Testando diff21
    if (diff21(19) !== 2) return false;
    if (diff21(25) !== 8) return false;

    // Testando papagaio
    if (papagaio(true, 6) !== true) return false;
    if (papagaio(true, 21) !== true) return false;
    if (papagaio(false, 6) !== false) return false;
    if (papagaio(true, 7) !== false) return false;

    // Testando dez
    if (dez(5, 5) !== true) return false;
    if (dez(10, 2) !== true) return false;
    if (dez(3, 7) !== true) return false;
    if (dez(1, 2) !== false) return false;

    // Testando dista10
    if (dista10(93) !== true) return false;
    if (dista10(90) !== true) return false;
    if (dista10(89) !== false) return false;

    // Testando apaga
    if (apaga('kitten', 1) !== 'ktten') return false;
    if (apaga('kitten', 4) !== 'kittn') return false;

    // Testando troca
    if (troca('kitten') !== 'nittek') return false;
    if (troca('a') !== 'a') return false;
    if (troca('ab') !== 'ba') return false;

    return true;
}
console.log(runTests());