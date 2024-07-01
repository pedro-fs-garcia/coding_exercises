public class lista11{
    public static void main(String[] args) {
        System.out.println(donuts(5).equals("Número de donuts: 5")); // true
        System.out.println(donuts(23).equals("Número de donuts: muitos")); // true
        System.out.println(donuts(10).equals("Número de donuts: muitos")); // true
        System.out.println(donuts(0).equals("Número de donuts: 0")); // true
        System.out.println(donuts(9).equals("Número de donuts: 9")); // true
        System.out.println("----------------");
        System.out.println(pontas("palmeiras").equals("paas")); // true
        System.out.println(pontas("abc").equals("abbc")); // true
        System.out.println(pontas("a").equals("")); // true
        System.out.println(pontas("abcd").equals("abcd")); // true
        System.out.println(pontas("").equals("")); // true
        System.out.println("-------------");
        System.out.println(fixa_primeiro("abacate").equals("ab*c*te")); // true
        System.out.println(fixa_primeiro("banana").equals("banana")); // true
        System.out.println(fixa_primeiro("ana").equals("an*")); // true
        System.out.println(fixa_primeiro("aaa").equals("a**")); // true
        System.out.println(fixa_primeiro("abracadabra").equals("abr*c*d*br*")); // true
        System.out.println("----------------");
        System.out.println(mistura2("mix", "pod").equals("pox mid")); // true
        System.out.println(mistura2("dog", "dinner").equals("dig donner")); // true
        System.out.println(mistura2("hello", "world").equals("wollo herld")); // true
        System.out.println(mistura2("java", "code").equals("cova jade")); // true
        System.out.println(mistura2("ab", "cd").equals("cd ab")); // true
        System.out.println("----------");
        System.out.println(palindrome("asa")); // true
        System.out.println(!palindrome("casa")); // false
        System.out.println(palindrome("racecar")); // true
        System.out.println(palindrome("abcba")); // true
        System.out.println(!palindrome("abcd")); // false
        System.out.println("----------");
        System.out.println(busca("ana e mariana gostam de banana", "ana") == 4); // true
        System.out.println(busca("banana", "ana") == 2); // true
        System.out.println(busca("aaa", "aa") == 2); // true
        System.out.println(busca("abcabcabc", "abc") == 3); // true
        System.out.println(busca("aaaaa", "aa") == 4); // true
    }

    // # A. donuts
    // # Para um inteiro n retorna uma string na forma 'Número de donuts: <n>'
    // # onde n é o valor passado como argumento.
    // # Caso n >= 10 devo retornar 'muitos' em lugar do número.
    // # donuts(5) returns 'Número de donuts: 5'
    // # donuts(23) returns 'Número de donuts: muitos'
    public static String donuts(int n){
        if (n<10){
            return "Número de donuts: " + n;
        }else{
            return "Número de donuts: muitos";
        }
    }

    // # B. pontas
    // # Dada uma string s, retorna uma string com as duas primeiras e as duas
    // # últimas letras da string original s
    // # Assim 'palmeiras' retorna 'paas'
    // # No entanto, se a string tiver menos que 2 letras, retorna uma string vazia
    public static String pontas (String s){
        if(s.length() < 2){
            return "";
        }
        return s.substring(0, 2) + s.substring(s.length()-2);
    }

    // # C. fixa_primeiro
    // # Dada uma string s, retorna uma string onde todas as ocorrências
    // # do primeiro caracter são trocados por '*', exceto para o primeiro
    // # Assim 'abacate' retorna 'ab*c*te'
    // # Dica: use s.replace(stra, strb)
    public static String fixa_primeiro(String s){
        char primeiro = s.charAt(0);
        s = s.replace(primeiro, '*');
        return primeiro + s.substring(1);
    }

    // # D. mistura2
    // # Sejam duas strings a e b
    // # Retorno uma string '<a> <b>' separada por um espaço
    // # com as duas primeiras letras trocadas de cada string 
    // #   'mix', pod' -> 'pox mid'
    // #   'dog', 'dinner' -> 'dig donner'
    public static String mistura2(String a, String b){
        String inicio_a = a.substring(0,2);
        String inicio_b = b.substring(0,2);
        String a_resto = a.substring(2);
        String b_resto = b.substring(2);
        return inicio_b + a_resto + " " + inicio_a + b_resto;
    }

    // # E. palindrome
    // # Verifique se uma string é palíndrome
    // #   palindrome('asa') True
    // #   palindrome('casa') False 
    public static boolean palindrome (String s){
        StringBuilder reverse = new StringBuilder();
        int len = s.length()-1;
        for (int i=0; i<=len; i++){
            reverse.append(s.charAt(len-i));
        }
        return s.equals(reverse.toString());
    }   

    // # F. busca
    // # Verifique quantas ocorrências de uma palavra há numa frase
    // # frase = 'ana e mariana gostam de banana'
    // # palavra = 'ana'
    // # busca ('ana e mariana gostam de banana', 'ana') == 4
    public static int busca (String frase, String palavra){
        int count = 0;
        for (int i = 0; i <= frase.length()-palavra.length(); i++){
            if (frase.substring(i, i+palavra.length()).equals(palavra)){
                count += 1;
            }
        }
        return count;
    }
}