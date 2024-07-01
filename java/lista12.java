

public class lista12{
    public static void main(String[] args) {
        System.out.println(verbing("play").equals("playing"));    // playing
        System.out.println(verbing("going").equals("goingly"));   // goingly
        System.out.println(verbing("be").equals("be"));      // be
        System.out.println("---------------");
        System.out.println(not_bad("This dinner is not that bad!")); // This dinner is good!
        System.out.println(not_bad("The movie is not bad."));        // The movie is good.
        System.out.println(not_bad("This is bad, not good."));       // This is bad, not good.
        System.out.println("-------");
        System.out.println(inicio_final("abcde", "fghij").equals("abcfghdeij")); // abcfghdeij
        System.out.println(inicio_final("abcd", "efgh").equals("abefcdgh"));   // abefcdgh
        System.out.println(inicio_final("abc", "def").equals("abdecf"));     // abdefc
        System.out.println("--------");
        System.out.println(zeros_finais(10010) == 1);   // 1
        System.out.println(zeros_finais(908007000) == 3); // 3
        System.out.println(zeros_finais(123456) == 0);  // 0
        System.out.println("--------");
        System.out.println(conta2(20) == 2);  // 2 (2 and 12)
        System.out.println(conta2(30) == 13);  // 13 (2, 12, 20-29)
        System.out.println(conta2(100) == 20); // 20 (2, 12, 20-29, 32, 42, 52, 62, 72, 82, 92)
        System.out.println("-----------");
        System.out.println(pot2(65) == 16);  // 16
        System.out.println(pot2(1) == 0);   // 0
        System.out.println(pot2(12) == 7);  // 7 (2^7 = 128)
    }

    // # G. verbing
    // # Dada uma string, caso seu comprimento seja pelo menos 3,
    // # adiciona 'ing' no final
    // # Caso a string já termine em 'ing', acrescentará 'ly'.
    public static String verbing(String s){
        if (s.length() < 3){
            return s;
        }
        if (!s.endsWith("ing")){
            return s + "ing";
        }
        return s + "ly";
    }

    // # H. not_bad
    // # Dada uma string, procura a primeira ocorrência de 'not' e 'bad'
    // # Se 'bad' aparece depois de 'not' troca 'not' ... 'bad' por 'good'
    // # Assim 'This dinner is not that bad!' retorna 'This dinner is good!'
    public static String not_bad(String frase){
        int bad = frase.indexOf("bad");
        int not = frase.indexOf("not");
        if (bad > not){
            return frase.substring(0, not) + "good" + frase.substring(bad + 3);
        }
        return frase;
    }

    // # I. inicio_final
    // # Divida cada string em dois pedaços.
    // # Se a string tiver um número ímpar de caracteres
    // # o primeiro pedaço terá um caracter a mais,
    // # Exemplo: 'abcde', divide-se em 'abc' e 'de'.
    // # Dadas 2 strings, a e b, retorna a string
    // # a_inicio + b_inicio + a_final + b_final
    public static String inicio_final (String a, String b){
        String a_inicio = a.substring(0, a.length()/2 + 1);
        String a_final = a.substring(a.length()/2 + 1);
        if (a.length() % 2 == 0){
            a_inicio = a.substring(0, a.length()/2);
            a_final = a.substring(a.length()/2);
        }
        String b_inicio = b.substring(0, b.length()/2 + 1);
        String b_final = b.substring(b.length()/2 + 1);
        if (b.length() % 2 == 0){
            b_inicio = b.substring(0, b.length()/2);
            b_final = b.substring(b.length()/2);
        }
        return a_inicio + b_inicio + a_final + b_final;
    }

    // # J. zeros finais
    // # Verifique quantos zeros há no final de um número inteiro positivo
    // # Exemplo: 10010 tem 1 zero no fim e 908007000 possui três
    public static int zeros_finais(int n){
        int count = 0;
        while (n % 10 == 0){
            count += 1;
            n = n/10;
        }
        return count;
    }
 

    // # K. conta 2
    // # Verifique quantas vezes o dígito 2 aparece entre 0 e n-1
    // # Exemplo: para n = 20 o dígito 2 aparece duas vezes entre 0 e 19
    public static int conta2(int n){
        int count = 0;
        for (int i=0; i<n; i++){
            String str = Integer.toString(i);
            for (char c : str.toCharArray()){
                if (c == '2'){
                    count += 1;
                }
            }
        }
        return count;
    }


    // # L. inicio em potencia de 2
    // # Dado um número inteiro positivo n retorne a primeira potência de 2
    // # que tenha o início igual a n
    // # Exemplo: para n = 65 retornará 16 pois 2**16 = 65536
    public static int pot2 (int n){
        String strn = Integer.toString(n);
        int exp = 0;
        while (true){
            int pot2 = (int) Math.pow(2, exp);
            if (Integer.toString(pot2).startsWith(strn)){
                return exp;
            }
            exp += 1;
        }   
    }
}