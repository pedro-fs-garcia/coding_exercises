

public class lista6{
    public static void main(String[] args) {
        System.out.println(A(false, false)); // true
        System.out.println(A(true, false));  // false
        System.out.println(A(false, true));  // true
        System.out.println(A(true, true));   // true
        System.out.println("_________________________");
        System.out.println(B(true, true));   // true
        System.out.println(B(false, false)); // true
        System.out.println(B(true, false));  // false
        System.out.println(B(false, true));  // false
        System.out.println(C(1, 2)); // 3
        System.out.println(C(2, 2)); // 8
                // Testando o método D
        System.out.println(D(19)); // 2
        System.out.println(D(25)); // 8
        System.out.println(E(true, 6));   // true
        System.out.println(E(true, 7));   // false
        System.out.println(E(true, 21));  // true
        System.out.println(E(false, 6));  // false
        System.out.println(E(false, 21)); // false
        System.out.println("-------------------------");
        System.out.println(F(9, 10));  // true
        System.out.println(F(2, 8));   // true
        System.out.println(F(5, 5));   // true
        System.out.println(F(2, 3));   // false
        System.out.println(F(10, 0));  // true
        System.out.println("----------------------");
                // Testando o método G
        System.out.println(G(93));  // true
        System.out.println(G(90));  // true
        System.out.println(G(89));  // false
        System.out.println(G(200)); // true
        System.out.println(G(210)); // true
        System.out.println(H("kitten", 1)); // ktten
        System.out.println(H("kitten", 4)); // kittn
        System.out.println(I("code")); // eodc
        System.out.println(I("a"));    // a
        System.out.println(I("ab"));   // ba
    }
        // # A. dormir
        // # dia_semana é True para dias na semana
        // # feriado é True nos feriados
        // # você pode ficar dormindo quando é feriado ou não é dia semana
        // # retorne True ou False conforme você vá dormir ou não
    public static boolean A(boolean dia_semana, boolean feriado){
        return !dia_semana || feriado;
    }
        // # B. alunos_problema
        // # temos dois alunos a e b
        // # a_sorri e b_sorri indicam se a e b sorriem
        // # temos problemas quando ambos estão sorrindo ou ambos não estão sorrindo
        // # retorne True quando houver problemas
    public static boolean B(boolean aSorri, boolean bSorri){
        return aSorri == bSorri;
    }

        // # C. soma_dobro
        // # dados dois números inteiros retorna sua soma
        // # porém se os números forem iguais retorna o dobro da soma
        // # soma_dobro(1, 2) -> 3
        // # soma_dobro(2, 2) -> 8
    public static int C(Integer x, Integer y){
        if (x == y) {
            return 2*(x+y);
        }else{
            return x + y;
        }
    }

        // # D. diff21
        // # dado um inteiro n retorna a diferença absoluta entre n e 21
        // # porém se o número for maior que 21 retorna dobro da diferença absoluta
        // # diff21(19) -> 2
        // # diff21(25) -> 8
        // # dica: abs(x) retorna o valor absoluto de x
    public static int D(Integer n){
        if (n > 21){
            return 2*Math.abs(n - 21);
        }else{
            return Math.abs(n-21);
        }
    }

        // # E. papagaio
        // # temos um papagaio que fala alto
        // # hora é um parâmetro entre 0 e 23
        // # temos problemas se o papagaio estiver falando
        // # antes da 7 ou depois das 20
    public static boolean E(boolean papagaio, int hora){
        return papagaio && (hora < 7 || hora > 20);
    }

        // # F. dez
        // # dados dois inteiros a e b
        // # retorna True se um dos dois é 10 ou a soma é 10
    public static boolean F(int a, int b){
        return a == 10 || b == 10 || a+b == 10;
    }

        // # G. dista10
        // # seja um inteiro n
        // # retorna True se a diferença absoluta entre n e 100 ou n e 200
        // # for menor ou igual a 10
        // # dista10(93) -> True
        // # dista10(90) -> True
        // # dista10(89) -> False
    public static boolean G(int n){
        return Math.abs(n-100) <= 10 || Math.abs(n-200) <= 10;
    }

        // # H. apaga
        // # seja uma string s e um inteiro n
        // # retorna uma nova string sem a posição n
        // # apaga('kitten', 1) -> 'ktten'
        // # apaga('kitten', 4) -> 'kittn'
    public static String H(String s, int n){
        return s.substring(0, n) + s.substring(n+1);
    }

        // # I. troca
        // # seja uma string s
        // # se s tiver tamanho <= 1 retorna ela mesma
        // # caso contrário troca a primeira e última letra
        // # troca('code') -> 'eodc'
        // # troca('a') -> 'a'
        // # troca('ab') -> 'ba'
    public static String I(String s){
        if (s.length() <= 1){
            return s;
        }else{
            String prim = s.substring(0,1);
            String ult = s.substring(s.length()-1);
            return ult + s.substring(1, s.length()-1) + prim;
        }
    }
}