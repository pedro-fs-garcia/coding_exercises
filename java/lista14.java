import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class lista14{
    public static void main(String[] args) {
        System.out.println(anagrama("aberto", "rebato")); // True
        System.out.println(anagrama("amor", "ramo"));     // True
        System.out.println(anagrama("aba", "baba"));      // False
        System.out.println("--------");
        System.out.println(cripto("ana e mariana gostam de banana")); // "an e aimnr agmost de abn"
        System.out.println(cripto("hello world")); // "ehlo dlwor"
        System.out.println(cripto("java programming")); // "ajv agimnoprr"
        System.out.println("---------");
        int[] polinomio1 = {3, 2, 5, 2};
        int[] polinomio2 = {1, 0, 0, 0};
        int[] polinomio3 = {0, 1, 2, 3};
        System.out.println(derivada(polinomio1)); // [2, 10, 6]
        System.out.println(derivada(polinomio2)); // [0, 0, 0]
        System.out.println(derivada(polinomio3)); // [1, 4, 9]
        int[] n1 = {3, 1, 5};
        int[] n2 = {5, 9, 2};
        List<Integer> resultado = invertidos(n1, n2);
        System.out.println(resultado); // Saída esperada: [8, 0, 8]
    }

    // # D. Dada uma lista de números retorna uma lista sem os elementos repetidos
    public static List<Integer> norep(int[] lista){
        List<Integer> no_rep = new ArrayList<>();
        for (int n : lista){
            if (!no_rep.contains(n)){
                no_rep.add(n);
            }
        }
        return no_rep;
    }

    public static Set<String> norep2 (String[] lista){
        Set<String> no_rep = new HashSet<>(Arrays.asList(lista));
        return no_rep;
    }

    // # E. Cripto desafio!!
    // # Dada uma frase, você deve retirar todas as letras repetidas das palavras
    // # e ordenar as letras que sobraram
    // # Exemplo: 'ana e mariana gostam de banana' vira 'an e aimnr agmost de abn'
    // # Dicas: tente transformar cada palavra em um conjunto,
    // # depois tente ordenar as letras e montar uma string com o resultado.
    // # Utilize listas auxiliares se facilitar
    public static String cripto(String str) {
        StringBuilder result = new StringBuilder();
        String[] palavras = str.split(" ");
        for (String palavra : palavras) {
            Set<Character> no_rep = new HashSet<>();
            for (int i = 0; i < palavra.length(); i++) {
                no_rep.add(palavra.charAt(i));
            }
            List<Character> sortedList = new ArrayList<>(no_rep);
            Collections.sort(sortedList);
            for (Character c : sortedList) {
                result.append(c);
            }
            result.append(" ");
        }
        return result.toString().trim();
    }

    // # F. Derivada de um polinômio
    // # Os coeficientes de um polinômio estão numa lista na ordem do seu grau.
    // # Você deverá devolver uma lista com os coeficientes da derivada.
    // # Exemplo: [3, 2, 5, 2] retorna [2, 10, 6]
    // # A derivada de 3 + 2x + 5x^2 + 2x^3 é 2 + 10x + 6x^2
    public static List<Integer> derivada (int[] nums){
        List<Integer> drv = new ArrayList<>();
        for (int i=1; i<nums.length; i++){
            drv.add(nums[i]*i);
        }
        return drv;
    }

    // # G. Soma em listas invertidas
    // # [3, 1, 5] + [5, 9, 2] = [8, 0, 8]
    // # pode supor que n1 e n2 tem o mesmo número de dígitos
    // # Não vale converter a lista em número para somar diretamente
    public static List<Integer> invertidos (int[] n1, int[] n2){
        List<Integer> result = new ArrayList<>();
        int vaium = 0;
        for (int i=0; i<n1.length; i++){
            result.add((n1[i] + n2[i])%10 + vaium);
            vaium = (n1[i]+n2[i])/10;
        }
        if(vaium > 0){
            result.add(vaium);
        }
        return result;
    }

    // # H. Anagrama
    // # Verifique se duas palavras são anagramas,
    // # isto é são uma é permutação das letras da outra
    // # anagrama('aberto', 'rebato') = True
    // # anagrama('amor', 'ramo') = True
    // # anagrama('aba', 'baba') = False
    public static boolean anagrama(String a, String b){
        char[] chara = a.toCharArray();
        char[] charb = b.toCharArray();
        Arrays.sort(chara);
        Arrays.sort(charb);
        return Arrays.equals(chara, charb);
    }

}