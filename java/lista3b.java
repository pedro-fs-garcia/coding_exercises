import java.util.*;

public class lista3b{
    public static void main(String[] args) {
        System.out.println(triangular(120));
        System.out.println(triangular(12));
        System.out.println(triangular(60));
        System.out.println(triangular(1200));
        troco(45);
        System.out.println(primo(111));
        System.out.println(primo(10));
        System.out.println(primo(2));
        System.out.println(primo(6));
        System.out.println(primo(431));
        System.out.println(primo(547));
        System.out.println(primo(783));
        System.out.println(primo(321));
        System.out.println(fatoresPrimos(449));
        System.out.println(fatoresPrimos(444));
        System.out.println(fatoresPrimos(111));
        System.out.println(fatoresPrimos(1024));
        System.out.println(fatoresPrimos(6509));
        System.out.println(fatoresPrimos(87));
        System.out.println(fatoresPrimos2(449));
        System.out.println(fatoresPrimos2(444));
        System.out.println(fatoresPrimos2(111));
        System.out.println(fatoresPrimos2(1024));
        System.out.println(fatoresPrimos2(6509));
        System.out.println(fatoresPrimos2(87));
        System.out.println(invert(1234));
        System.out.println(invert2(1234));
    }

    public static boolean triangular (int n){
        for (int i=0; i<n; i++){
            if (i * (i+1) * (i+2) == n){
                return true;
            }
        }
        return false;
    }

    public static void troco (int conta){
        int[] notas = {50, 20, 10, 5, 2, 1};
        // int index = 0;
        // while (conta > 0){
        //     int nota = conta/notas[index];
        //     System.out.printf("%s notas de %s%n", nota, notas[index]);
        //     conta = conta % notas[index];
        //     index += 1;
        // }
        for (int nota : notas){
            if (conta / nota > 0){
                System.out.printf("%s notas de %s%n", conta/nota, nota);
                conta = conta%nota;
            }
        }
    }

    public static boolean primo (int n){
        if (n == 2){
            return true;
        }
        for (int i=2; i<Math.sqrt(n)+1; i++){
            if (n % i == 0){
                return false;
            }
        }
        return true;
    }

    public static List<Integer> fatoresPrimos (int n){
        List<Integer> fatores = new ArrayList<>();
        if (primo(n)){
            fatores.add(1);
            fatores.add(n);
            return fatores;
        }
        for (int i = 1; i<=n; i++){
            if (n % i == 0 && primo(i)){
                fatores.add(i);
            }
        }
        return fatores;
    }

    public static HashMap fatoresPrimos2 (int n){
        HashMap<Integer, Integer> fatores = new HashMap<>();
        if (primo(n)){
            fatores.put(n, 1);
            return fatores;
        }
        for (int i=2; i <= n; i++){
            if(primo(i) && n%i==0){
                int mult = 0;
                while (n % i == 0){
                    mult += 1;
                    n = n/i;
                }
                fatores.put(i, mult);
            }
        }
        return fatores;
    }

    public static int invert (int n){
        String strn = Integer.toString(n);
        StringBuilder rev = new StringBuilder();
        for (int i=0; i<strn.length(); i++){
            rev.append(strn.charAt(strn.length()-i-1));
        }
        return Integer.parseInt(rev.toString());
    }

    public static int invert2 (int n){
        String strn = Integer.toString(n);
        StringBuilder strb = new StringBuilder();
        for (char c : strn.toCharArray()){
            strb.append(c);
        }
        strb.reverse();
        return Integer.parseInt(strb.toString());
    }
}
