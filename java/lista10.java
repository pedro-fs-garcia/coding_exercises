
import java.util.ArrayList;



public class lista10{
    public static void main(String[] args) {
        System.out.println(near_ten(12));  // Saída esperada: True
        System.out.println(near_ten(17));  // Saída esperada: False
        System.out.println(near_ten(19));  // Saída esperada: True
        System.out.println(lone_sum(1, 2, 3)); // 6
        System.out.println(lone_sum(3, 2, 3)); // 2
        System.out.println(lone_sum(3, 3, 3)); // 0
        System.out.println(luck_sum(1, 2, 3)); // 6
        System.out.println(luck_sum(1, 2, 13)); // 3
        System.out.println(luck_sum(1, 13, 3)); // 1
        System.out.println(double_char("The"));       // Esperado: "TThhee"
        System.out.println(double_char("AAbb"));      // Esperado: "AAAAbbbb"
        System.out.println(double_char("Hi-There"));  // Esperado: "HHii--TThheerree"
        System.out.println(count_hi("abc hi ho"));  // Esperado: 1
        System.out.println(count_hi("ABChi hi"));   // Esperado: 2
        System.out.println(count_hi("hihi"));       // Esperado: 2
        System.out.println("Teste 1: cat_dog(\"catdog\") -> " + cat_dog("catdog"));
        System.out.println("Teste 2: cat_dog(\"catcat\") -> " + cat_dog("catcat"));
        System.out.println("Teste 3: cat_dog(\"1cat1cadodog\") -> " + cat_dog("1cat1cadodog"));
        System.out.println("Teste 1: count_code(\"aaacodebbb\") -> " + count_code("aaacodebbb"));
        System.out.println("Teste 2: count_code(\"codexxcode\") -> " + count_code("codexxcode"));
        System.out.println("Teste 3: count_code(\"cozexxcope\") -> " + count_code("cozexxcope"));
        // Teste 1: "Hiabc", "abc" -> True
        System.out.println("Teste 1: end_other(\"Hiabc\", \"abc\") -> " + end_other("Hiabc", "abc"));
        // Teste 2: "AbC", "HiaBc" -> True
        System.out.println("Teste 2: end_other(\"AbC\", \"HiaBc\") -> " + end_other("AbC", "HiaBc"));
        // Teste 3: "abc", "abXabc" -> True
        System.out.println("Teste 3: end_other(\"abc\", \"abXabc\") -> " + end_other("abc", "abXabc"));
        // Teste 1: [2, 1, 2, 3, 4] -> 3
        int[] nums1 = {2, 1, 2, 3, 4};
        System.out.println("Teste 1: count_evens([2, 1, 2, 3, 4]) -> " + count_evens(nums1));

        // Teste 2: [2, 2, 0] -> 3
        int[] nums2 = {2, 2, 0};
        System.out.println("Teste 2: count_evens([2, 2, 0]) -> " + count_evens(nums2));

        // Teste 3: [1, 3, 5] -> 0
        int[] nums3 = {1, 3, 5};
        System.out.println("Teste 3: count_evens([1, 3, 5]) -> " + count_evens(nums3));
        
        int[] nums4 = {1, 2, 2, 1};
        System.out.println("Teste 1: sum13([1, 2, 2, 1]) -> " + sum13(nums4));

        // Teste 2: [1, 1] -> 2
        int[] nums5 = {1, 1};
        System.out.println("Teste 2: sum13([1, 1]) -> " + sum13(nums5));

        // Teste 3: [1, 2, 2, 1, 13] -> 6
        int[] nums6 = {1, 2, 2, 1, 13};
        System.out.println("Teste 3: sum13([1, 2, 2, 1, 13]) -> " + sum13(nums6));

        // Teste 4: [13, 1, 2, 3, 4] -> 0
        int[] nums7 = {13, 1, 2, 3, 4};
        System.out.println("Teste 4: sum13([13, 1, 2, 3, 4]) -> " + sum13(nums7));

        int[] nums8 = {1, 2, 2};
        System.out.println("Teste 1: has22([1, 2, 2]) -> " + has22(nums8));

        // Teste 2: [1, 2, 1, 2] -> False
        int[] nums9 = {1, 2, 1, 2};
        System.out.println("Teste 2: has22([1, 2, 1, 2]) -> " + has22(nums9));

        // Teste 3: [2, 1, 2] -> False
        int[] nums10 = {2, 1, 2};
        System.out.println("Teste 3: has22([2, 1, 2]) -> " + has22(nums10));

        ArrayList<Integer> lista1 = new ArrayList<>();
        lista1.add(2);
        lista1.add(4);
        lista1.add(6);
        lista1.add(8);

        ArrayList<Integer> lista2 = new ArrayList<>();
        lista2.add(1);
        lista2.add(3);
        lista2.add(5);
        lista2.add(7);

        ArrayList<Integer> lista3 = new ArrayList<>();
        lista3.add(10);
        lista3.add(15);
        lista3.add(20);
        lista3.add(25);

        // Testando casos de teste
        System.out.println(soma_na_lista(10, lista1)); // Esperado: true (4 + 6 = 10)
        System.out.println(soma_na_lista(8, lista1));  // Esperado: true (2 + 6 = 8)
        System.out.println(soma_na_lista(7, lista1));  // Esperado: false (nenhum par soma para 7)
        System.out.println(soma_na_lista(8, lista2));  // Esperado: true (1 + 7 = 8)
        System.out.println(soma_na_lista(12, lista2)); // Esperado: true
        System.out.println(soma_na_lista(35, lista3)); // Esperado: true (10 + 25 = 35)
        System.out.println(soma_na_lista(30, lista3)); // Esperado: true (10 + 20 = 30)
        System.out.println(soma_na_lista(18, lista3)); // Esperado: false (nenhum par soma para 18)

                // Testes para casos em que é possível montar a fila
        System.out.println("Testes para casos em que é possível montar a fila:");
        System.out.println("fila_tijolos(3, 1, 8) -> " + tijolos(3, 1, 8));  // Esperado: true
        System.out.println("fila_tijolos(3, 2, 10) -> " + tijolos(3, 2, 10));  // Esperado: true
        System.out.println("fila_tijolos(5, 0, 5) -> " + tijolos(5, 0, 5));  // Esperado: true

        // Testes para casos em que não é possível montar a fila
        System.out.println("\nTestes para casos em que não é possível montar a fila:");
        System.out.println("fila_tijolos(1, 1, 9) -> " + tijolos(1, 1, 9));  // Esperado: false
        System.out.println("fila_tijolos(1, 2, 7) -> " + tijolos(1, 2, 7));  // Esperado: false
        System.out.println("fila_tijolos(3, 1, 11) -> " + tijolos(3, 1, 11));  // Esperado: false
    }

//     # A. near_ten 
//     # Seja um n não negativo,
//     # retorna True se o número está a distância de
//     # pelo menos dois de um múltiplo de dez.
//     # near_ten(12) -> True
//     # near_ten(17) -> False
//     # near_ten(19) -> True
    public static boolean near_ten(int n){
        return n%10 <= 2 || n%10 >= 8;
    }


//     # B. lone_sum
//     # Soma maluca: some os números inteiros a, b, e c
//     # Se algum número aparecer repetido ele não conta na soma
//     # lone_sum(1, 2, 3) -> 6
//     # lone_sum(3, 2, 3) ->2
//     # lone_sum(3, 3, 3) -> 0
    public static int lone_sum(int a, int b, int c) {
        int sum = 0;
        // Verificar se a não é repetido
        if (a != b && a != c) {
            sum += a;
        }
        // Verificar se b não é repetido
        if (b != a && b != c) {
            sum += b;
        }
        // Verificar se c não é repetido
        if (c != a && c != b) {
            sum += c;
        }
        return sum;
    }
        
//     # C. luck_sum #
//     # Soma três inteiros a, b, c
//     # Se aparecer um 13 ele não conta e todos os da
//     #sua direita também
//     # lucky_sum(1, 2, 3) -> 6
//     # lucky_sum(1, 2, 13) -> 3
//     # lucky_sum(1, 13, 3) -> 1
    public static int luck_sum(int a, int b, int c){
        int[] nums = {a, b, c};
        int soma = 0;
        for (int n: nums){
            if (n==13){
                break;
            }
            soma += n;
        }
        return soma;
    }

//     # D. double_char #
//     # retorna os caracteres da string original duplicados
//     # double_char('The') -> 'TThhee'
//     # double_char('AAbb') -> 'AAAAbbbb'
//     # double_char('Hi-There') -> 'HHii--TThheerree'
    public static String double_char(String s){
        StringBuilder str = new StringBuilder();
        for (int i=0; i<s.length(); i++){
            str.append(s.charAt(i)).append(s.charAt(i));
        }
        return str.toString();
    }

//     # E. count_hi #
//     # conta o número de vezes que aparece a string 'hi'
//     # count_hi('abc hi ho') -> 1
//     # count_hi('ABChi hi') -> 2
//     # count_hi('hihi') -> 2
    public static int count_hi (String s){
        int count = 0;
        for (int i=0; i<=s.length() - 2; i++){
            if (s.substring(i, i+2).equals("hi")){
                count+=1;
            }
        }
        return count;
    }


//     # F. cat_dog #
//     # verifica se o aparece o mesmo número de vezes 'cat' e 'dog'
//     # cat_dog('catdog') -> True
//     # cat_dog('catcat') -> False
//     # cat_dog('1cat1cadodog') -> True
    public static boolean cat_dog(String s){
        int count_cat = 0;
        int count_dog = 0;
        for (int i=0; i<=s.length()-3 ; i++){
            if (s.substring(i, i+3).equals("cat")){
                count_cat += 1;
            }
            if (s.substring(i, i+3).equals("dog")){
                count_dog += 1;
            }
        }
        return count_cat == count_dog;
    }

//     # G. count_code #
//     # conta quantas vezes aparece 'code'
//     # a letra 'd' pode ser trocada por outra qualquer
//     # assim 'coxe' ou 'coze' também são contadas como 'code'
//     # count_code('aaacodebbb') -> 1
//     # count_code('codexxcode') -> 2
//     # count_code('cozexxcope') -> 2
    public static int count_code(String s){
        int count = 0;
        for (int i=0; i<=s.length()-3; i++){
            if(s.substring(i, i+2).equals("co") && s.substring(i+3, i+4).equals("e")){
                count += 1;
            }
        }
        return count;
    }


//     # H. end_other #
//     # as duas strings devem ser convertidas para minúsculo via lower()
//     # depois disso verifique que no final da string b ocorre a string a
//     # ou se no final da string a ocorre a string b
//     # end_other('Hiabc', 'abc') -> True
//     # end_other('AbC', 'HiaBc') -> True
//     # end_other('abc', 'abXabc') -> True
    public static boolean end_other(String a, String b){
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a.endsWith(b) || b.endsWith(a);
    }

//     # I. count_evens
//     # conta os números pares da lista
//     # count_evens([2, 1, 2, 3, 4]) -> 3
//     # count_evens([2, 2, 0]) -> 3
//     # count_evens([1, 3, 5]) -> 0
    public static int count_evens (int[] nums){
        int count = 0;
        for (int n: nums){
            if(n % 2 == 0){
                count += 1;
            }
        }
        return count;
    }

//     # J. sum13 #
//     # retorna a soma dos números de uma lista
//     # 13 dá azar, você deverá ignorar o 13 e todos os números à sua direita
//     # sum13([1, 2, 2, 1]) -> 6
//     # sum13([1, 1]) -> 2
//     # sum13([1, 2, 2, 1, 13]) -> 6
//     # sum13([13, 1, 2, 3, 4]) -> 0
    public static int sum13(int[] nums){
        int soma = 0;
        for (int n: nums){
            if (n==13){
                break;
            }
            soma += n;
        }
        return soma;
    }

//     # K. has22 #
//     # Verifica se na lista de números inteiros aparecem dois 2 consecutivos
//     # has22([1, 2, 2]) -> True
//     # has22([1, 2, 1, 2]) -> False
//     # has22([2, 1, 2]) -> False
    public static boolean has22(int[] nums){
        for (int i=0; i<nums.length-1; i++){
            if (nums[i] == nums [i+1] && nums[i] == 2){
                return true;
            }
        }
        return false;
    }

//     # L. soma_na_lista #
//     # Verifica se um número é soma de dois elementos distintos de uma lista
//     # soma_na_lista(5, [1, 2, 3, 4]) -> True
//     # soma_na_lista(9, [1, 2, 3, 4]) -> False
//     # soma_na_lista(0, [1, 2, 3, 4]) -> False
//     # soma_na_lista(8, [1, 2, 3, 4]) -> False
//     # soma_na_lista(4, [2, 2, 2, 2]) -> False
//     # soma_na_lista(4, [2, 2, 1, 3]) -> True
    public static boolean soma_na_lista(int x, ArrayList<Integer> lista){
        for (int n : lista){
            if (lista.contains(x-n)){
                return true;
            }           
        }
        return false;
    }

//     # M.Difícil: Fila de tijolos sem usar loops #
//     # queremos montar uma fila de tijolos de um tamanho denominado meta
//     # temos tijolos pequenos (tamanho 1) e tijolos grandes (tamanho 5)
//     # retorna True se for possível montar a fila de tijolos
//     # é possível uma solução sem usar for ou while
//     # fila_tijolos(3, 1, 8) -> True
//     # fila_tijolos(3, 1, 9) -> False
//     # fila_tijolos(3, 2, 10) -> True
    public static boolean tijolos(int peq, int gra, int meta){
        return gra*5+peq >= meta && peq >= meta%5;
    }
}