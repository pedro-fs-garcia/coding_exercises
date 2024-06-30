// # A. first_last6
// # verifica se 6 é o primeiro ou último elemento da lista nums
// # first_last6([1, 2, 6]) -> True
// # first_last6([6, 1, 2, 3]) -> True
// # first_last6([3, 2, 1]) -> False
function first_last6(nums){
    return nums[0] == 6 || nums[nums.length-1] == 6;
}

// # B. same_first_last #
// # retorna True se a lista nums
// # possui pelo menos um elemento
// # e o primeiro elemento é igual
// # ao último
// # same_first_last([1, 2, 3]) -> False
// # same_first_last([1, 2, 3, 1]) -> True
// # same_first_last([1, 2, 1]) -> True
function same_first_last(nums){
    return nums.length >= 1 && nums[0] == nums[nums.length -1];
}

// # C. common_end #
// # Dada duas listas a e b verifica se os dois primeiros são
// # iguais ou os dois últimos são iguais
// # suponha que as listas tenham pelo menos um elemento
function common_end(a, b){
    return a[0] == b[0] || a[a.length -1] == b[b.length - 1];
}


// # D. maior_ponta #
// # Dada uma lista não vazia, cria uma nova lista onde todos
// # os elementos são o maior das duas pontas
// # obs.: não é o maior de todos, mas entre as duas pontas
// # maior_ponta([1, 2, 3]) -> [3, 3, 3]
// # maior_ponta([1, 3, 2]) -> [2, 2, 2]
function maior_ponta(nums){
    let result = [];
    let ponta = Math.max(nums[0], nums[nums.length-1]);
    for (i = 0; i < nums.length; i++){
        result.push(ponta);
    }
    return result;
}


// # E. sum2 #
// # Dada uma lista de inteiros de qualquer tamanho
// # retorna a soma dos dois primeiros elementos
// # se a lista tiver menos de dois elementos, soma o que for possível
function sum2(nums){
    if (nums.length > 1){
        return nums[0] + nums[1];
    }
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// # F. middle_way #
// # sejam duas listas de inteiros a e b
// # retorna uma lista de tamanho 2 contendo os elementos do
// # meio de a e b, suponha que as listas tem tamanho ímpar
// # middle_way([1, 2, 3], [4, 5, 6]) -> [2, 5]
// # middle_way([7, 7, 7], [3, 8, 0]) -> [7, 8]
// # middle_way([5, 2, 9], [1, 4, 5]) -> [2, 4]
function middle_way(a, b){
    return [a[Math.floor(a.length/2)], b[Math.floor(b.length/2)]];
}

// # G. date_fashion
// # você e sua namorada(o) vão a um restaurante
// # eu e par são as notas das suas roupas de 0 a 10
// # quanto maior a nota mais chique vocês estão vestidos
// # o resultado é se vocês conseguiram uma mesa no restaurante:
// # 0=não 1=talvez e 2=sim
// # se a nota da roupa de um dos dois for menor ou igual a 2
// # vocês não terão direito à uma mesa (0)
// # se as notas são maiores, então caso um dos dois esteja
// # bem chique (nota >= 8) então a resposta é sim (2)
// # caso contrário a resposta é talvez (1)
// # date_fashion(5, 10) -> 2
// # date_fashion(5, 2) -> 0
// # date_fashion(5, 5) -> 1
function date_fashion(eu, par){
    if (eu <= 2 || par <= 2){
        return 0;
    }else if(eu >= 8 || par >= 8){
        return 2;
    }else{
        return 1;
    }
}

// # H. squirrel_play
// # os esquilos na FATEC brincam quando a temperatura está entre 60 e 90
// # graus Fahreneit (são estrangeiros e o termômetro é diferente rs)
// # caso seja verão, então a temperatura superior é 100 no lugar de 90
// # retorne True caso os esquilos brinquem
// # squirrel_play(70, False) -> True
// # squirrel_play(95, False) -> False
// # squirrel_play(95, True) -> True
function squirrel_play(temp, verao){
    if (verao && 60 < temp && temp< 100){
        return true;
    }else if (!verao && 60 < temp && temp < 90){
        return true;
    }else{
        return false;
    }
}

// # I. pego_correndo
// # você foi pego correndo
// # o resultado será:
// # sem multa = 0
// # multa média = 1
// # multa grave = 2
// # velocidade <= 60 sem multa
// # velocidade entre 61 e 80 multa média
// # velocidade maior que 81 multa grave (cidade do interior)
// # caso seja seu aniversário a velocidade pode ser 5 km/h maior em todos os casos
// # pego_correndo(60, False) -> 0
// # pego_correndo(65, False) -> 1
// # pego_correndo(65, True) -> 0 
function pego_correndo(vel, aniv){
    if (aniv && vel <= 65){
        return 0;
    }else if (aniv && vel <= 85){
        return 1;
    }else if (!aniv && vel <= 60){
        return 0;
    }else if (!aniv && vel <= 80){
        return 1;
    }else{
        return 2;
    }
}

// # J. alarm_clock #
// # day: 0=domingo, 1=segunda, 2=terça, ..., 6=sábado
// # vacation = True caso você esteja de férias
// # o retorno é uma string que diz quando o despertador tocará
// # dias da semana '07:00'
// # finais de semana '10:00'
// # a menos que você esteja de férias, neste caso:
// # dias da semana '10:00'
// # finais de semana 'off'
// # alarm_clock(1, False) -> '7:00'
// # alarm_clock(5, False) -> '7:00'
// # alarm_clock(0, False) -> '10:00'
function alarm_clock(day, vacation){
    if (vacation && [0,6].includes(day)){
        return "off";
    }else if ((vacation && ![0,6].includes(day)) || (!vacation && [0,6].includes(day)) ){
        return "10:00";
    }else {
        return "07:00";
    }
}


console.log(first_last6([1, 2, 6]));     // Deve imprimir true
console.log(first_last6([6, 1, 2, 3]));  // Deve imprimir true
console.log(first_last6([3, 2, 1]));     // Deve imprimir false
console.log(same_first_last([1, 2, 3]));     // Deve imprimir false
console.log(same_first_last([1, 2, 3, 1]));  // Deve imprimir true
console.log(same_first_last([1, 2, 1]));     // Deve imprimir true
console.log(common_end([1, 2, 3], [7, 3]));       // Deve imprimir true (últimos elementos são iguais)
console.log(common_end([1, 2, 3], [7, 3, 2, 1])); // Deve imprimir false (nenhum dos elementos comparados são iguais)
console.log(common_end([1, 2, 3], [1, 4, 5]));    // Deve imprimir true (primeiros elementos são iguais)
console.log(common_end([1], [1]));                // Deve imprimir true (primeiro e último elementos são iguais)
console.log(common_end([1, 2], [2, 1]));          // Deve imprimir false (nenhum dos elementos comparados são iguais)
console.log(maior_ponta([1, 2, 3])); // [3, 3, 3]
console.log(maior_ponta([1, 3, 2])); // [2, 2, 2]
console.log(maior_ponta([4, 5, 6, 7, 8, 9])); // [9, 9, 9, 9, 9, 9]
console.log(maior_ponta([10, 20, 5])); // [10, 10, 10]
console.log(sum2([1, 2, 3, 4])); // 3 (1 + 2)
console.log(sum2([1])); // 1
console.log(sum2([])); // 0
console.log(sum2([5, 10])); // 15 (5 + 10)
console.log(middle_way([1, 2, 3], [4, 5, 6])); // [2, 5]
console.log(middle_way([7, 7, 7], [3, 8, 0])); // [7, 8]
console.log(middle_way([5, 2, 9], [1, 4, 5])); // [2, 4]
console.log(date_fashion(5, 10)); // 2
console.log(date_fashion(5, 2));  // 0
console.log(date_fashion(5, 5));  // 1
console.log(date_fashion(8, 5));  // 2
console.log(date_fashion(2, 7));  // 0
console.log(date_fashion(7, 8));  // 2
console.log(date_fashion(3, 3));  // 1
console.log(squirrel_play(70, false)); // true
console.log(squirrel_play(95, false)); // false
console.log(squirrel_play(95, true));  // true
console.log(pego_correndo(60, false)); // 0
console.log(pego_correndo(65, false)); // 1
console.log(pego_correndo(65, true));  // 0
console.log(pego_correndo(81, false)); // 2
console.log(pego_correndo(86, true));  // 2
console.log(alarm_clock(1, false)); // '7:00'
console.log(alarm_clock(5, false)); // '7:00'
console.log(alarm_clock(0, false)); // '10:00'
console.log(alarm_clock(6, true));  // 'off'
console.log(alarm_clock(2, true));  // '10:00'
console.log(alarm_clock(0, true));  // 'off'