import java.util.Arrays;
public class lista9{
    public static void main(String[] args) {
        System.out.println(A(new int[]{1, 2, 6}));       // True
        System.out.println(A(new int[]{6, 1, 2, 3}));    // True
        System.out.println(A(new int[]{3, 2, 1}));       // False
        System.out.println(B(new int[]{1, 2, 3}));      // False
        System.out.println(B(new int[]{1, 2, 3, 1}));   // True
        System.out.println(B(new int[]{1, 2, 1}));      // True
        System.out.println(C(new int[]{1, 2, 3}, new int[]{7, 3}));     // True
        System.out.println(C(new int[]{1, 2, 3}, new int[]{7, 3, 2}));  // False
        System.out.println(C(new int[]{1, 2, 3}, new int[]{1, 3}));     // True
        System.out.println(Arrays.toString(D(new int[]{1, 2, 3})));  // [3, 3, 3]
        System.out.println(Arrays.toString(D(new int[]{1, 3, 2})));  // [2, 2, 2]
        int[] nums1 = {1, 2, 3};
        int[] nums2 = {5};
        int[] nums3 = {};
        System.out.println("Soma dos dois primeiros elementos de nums1: " + E(nums1));  // Saída esperada: 3
        System.out.println("Soma dos dois primeiros elementos de nums2: " + E(nums2));  // Saída esperada: 5
        System.out.println("Soma dos dois primeiros elementos de nums3: " + E(nums3));  // Saída esperada: 0
        
        int[] a1 = {1, 2, 3};
        int[] b1 = {4, 5, 6};
        int[] result1 = F(a1, b1);
        System.out.println("Resultado: [" + result1[0] + ", " + result1[1] + "]");  // Saída esperada: [2, 5]

        int[] a2 = {7, 7, 7};
        int[] b2 = {3, 8, 0};
        int[] result2 = F(a2, b2);
        System.out.println("Resultado: [" + result2[0] + ", " + result2[1] + "]");  // Saída esperada: [7, 8]

        int[] a3 = {5, 2, 9};
        int[] b3 = {1, 4, 5};
        int[] result3 = F(a3, b3);
        System.out.println("Resultado: [" + result3[0] + ", " + result3[1] + "]");  // Saída esperada: [2, 4]

        System.out.println(G(5, 10));  // Saída esperada: 2
        System.out.println(G(5, 2));   // Saída esperada: 0
        System.out.println(G(5, 5));   // Saída esperada: 1
        System.out.println(H(70, false));  // Saída esperada: True
        System.out.println(H(95, false));  // Saída esperada: False
        System.out.println(H(95, true));   // Saída esperada: True
        System.out.println(J(1, false));  // Saída esperada: "07:00"
        System.out.println(J(5, false));  // Saída esperada: "07:00"
        System.out.println(J(0, false));  // Saída esperada: "10:00"
        System.out.println(J(2, true));   // Saída esperada: "10:00"
        System.out.println(J(0, true));   // Saída esperada: "off"
    }

    // # A. first_last6
    // # verifica se 6 é o primeiro ou último elemento da lista nums
    // # first_last6([1, 2, 6]) -> True
    // # first_last6([6, 1, 2, 3]) -> True
    // # first_last6([3, 2, 1]) -> False
    public static boolean A(int[] nums){
        return nums[0] == 6 || nums[nums.length - 1] == 6;
    }

    // # B. same_first_last #
    // # retorna True se a lista nums
    // # possui pelo menos um elemento
    // # e o primeiro elemento é igual
    // # ao último
    // # same_first_last([1, 2, 3]) -> False
    // # same_first_last([1, 2, 3, 1]) -> True
    // # same_first_last([1, 2, 1]) -> True
    public static boolean B(int[] nums){
        return nums.length >= 1 && (nums[0] == nums[nums.length -1]);
    }

    // # C. common_end #
    // # Dada duas listas a e b verifica se os dois primeiros são
    // # iguais ou os dois últimos são iguais
    // # suponha que as listas tenham pelo menos um elemento
    // # common_end([1, 2, 3], [7, 3]) -> True
    // # common_end([1, 2, 3], [7, 3, 2]) -> False
    // # common_end([1, 2, 3], [1, 3]) -> True
    public static boolean C(int[] a, int[] b){
        return a[0]==b[0] || a[a.length-1] == b[b.length-1];
    }

    // # D. maior_ponta #
    // # Dada uma lista não vazia, cria uma nova lista onde todos
    // # os elementos são o maior das duas pontas
    // # obs.: não é o maior de todos, mas entre as duas pontas
    // # maior_ponta([1, 2, 3]) -> [3, 3, 3]
    // # maior_ponta([1, 3, 2]) -> [2, 2, 2]
    public static int[] D(int[] lista){
        int maior = Math.max(lista[0], lista[lista.length-1]);
        int[] nova = new int[lista.length];
        Arrays.fill(nova, maior);
        return nova;
    }

    // # E. sum2 #
    // # Dada uma lista de inteiros de qualquer tamanho
    // # retorna a soma dos dois primeiros elementos
    // # se a lista tiver menos de dois elementos, soma o que for possível
    public static int E(int[] nums){
        int soma = 0;
        if (nums.length >= 1){
            soma += nums[0];
            if (nums.length >= 2){
                soma += nums[1];
            }
        }
        return soma;
    }

    // # F. middle_way #
    // # sejam duas listas de inteiros a e b
    // # retorna uma lista de tamanho 2 contendo os elementos do
    // # meio de a e b, suponha que as listas tem tamanho ímpar
    // # middle_way([1, 2, 3], [4, 5, 6]) -> [2, 5]
    // # middle_way([7, 7, 7], [3, 8, 0]) -> [7, 8]
    // # middle_way([5, 2, 9], [1, 4, 5]) -> [2, 4]
    public static int[] F (int[] a, int[] b){
        // return new int[] {a[a.length/2], b[b.length/2]};
        int[] lista = new int[2];
        lista[0] = a[a.length/2];
        lista[1] = b[b.length/2];
        return lista;
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
    public static int G(int eu, int par){
        if (eu <= 2 || par <= 2){
            return 0;
        }else if (eu >= 8 || par >= 8){
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
    public static boolean H(int temperatura, boolean verao){
        if (verao){
            return temperatura > 60 && temperatura < 100;
        }else{
            return temperatura > 60 && temperatura < 90;
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
    public static int I(int vel, boolean aniv){
        if (aniv){
            vel -= 5;
        }
        if (vel>60 && vel<=80){
            return 1;
        } else if (vel > 80){
            return 2;
        }else{
            return 0;
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
    public static String J(int dia, boolean ferias){
        if (ferias){
            if (dia == 0 || dia == 6){
                return "off";
            }else{
                return "10:00";
            }
        }else{
            if (dia == 0 || dia == 6){
                return "10:00";
            }else{
                return "07:00";
            }
        }
    }

}