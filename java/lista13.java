import java.util.*;

public class lista13{
    public static void main(String[] args) {
        // Testes para fim_igual
        String[] lista1 = {"aba", "xyz", "aa", "x", "bbb"};
        System.out.println(fim_igual(lista1) == 3); // Deve retornar 3
        
        String[] lista2 = {"apple", "banana", "cherry", "dad"};
        System.out.println(fim_igual(lista2) == 1); // Deve retornar 1
        
        String[] lista3 = {"aa", "bb", "cc", "dd"};
        System.out.println(fim_igual(lista3) == 4); // Deve retornar 4
        
        String[] lista4 = {"abc", "def", "ghi"};
        System.out.println(fim_igual(lista4) == 0); // Deve retornar 0

        // Testes para x_antes
        String[] ordenar1 = {"mix", "xyz", "apple", "xanadu", "aardvark"};
        System.out.println(x_antes(ordenar1)); // Deve retornar [xanadu, xyz, aardvark, apple, mix]
        
        String[] ordenar2 = {"apple", "xray", "banana", "xenon", "kiwi"};
        System.out.println(x_antes(ordenar2)); // Deve retornar [xenon, xray, apple, banana, kiwi]
        
        String[] ordenar3 = {"xavier", "xenon", "xylophone", "xenon", "apple"};
        System.out.println(x_antes(ordenar3)); // Deve retornar [xavier, xenon, xenon, xylophone, apple]
        
        String[] ordenar4 = {"xyz", "xy", "x", "abc"};
        System.out.println(x_antes(ordenar4)); // Deve retornar [x, xy, xyz, abc]
    }
    // # A. fim_igual
    // # Dada uma lista de strings, retorna o número de strings
    // # com tamanho >= 2 onde o primeiro e o último caracteres são iguais
    // # Exemplo: ['aba', 'xyz', 'aa', 'x', 'bbb'] retorna 3
    public static int fim_igual(String[] lista){
        int count = 0;
        for (String s : lista){
            if (s.charAt(0) == s.charAt(s.length() - 1) && s.length() >= 2){
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
    public static List<String> x_antes(String[] ordenar){
        List<String> firstx = new ArrayList<>();
        List<String> notx = new ArrayList<>();
        for (String str : ordenar){
            if (str.startsWith("x")){
                firstx.add(str);
            }else{
                notx.add(str);
            }
        }
        Collections.sort(firstx);
        Collections.sort(notx);
        firstx.addAll(notx);
        return firstx;
    }

    // def last(a): #esta def serve para a letra C
    // return

    // # C. sort_last
    // # Dada uma lista de tuplas não vazias retorna uma tupla ordenada
    // # por ordem crescente do último elemento 
    // # Exemplo [(1, 7), (1, 3), (3, 4, 5), (2, 2)] retorna
    // # [(2, 2), (1, 3), (3, 4, 5), (1, 7)]
    // # Dica: use key=função que você definiu e que retorna o último elemento


}