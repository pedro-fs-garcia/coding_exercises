import java.util.*;

public class listaextra {
    public static void main(String[] args) {
        System.out.println(ingressos(93, 7, 5));
        System.out.println(romanos(123));
        System.out.println(romanos(100));
        System.out.println(romanos(1));
        System.out.println(romanos(49));
        System.out.println(pi(1000000));
    }


    public static int ingressos (int orcamento, int pmaior, int pmenor){
        int resultado = 0;
        HashMap<Integer, Integer> possible = new HashMap<>();
        for (int i=0; i<orcamento/pmenor; i++){
            for (int j=0; j<orcamento/pmaior; j++){
                if (pmaior*j + pmenor*i == orcamento){
                    possible.put(i, j);
                }
            }
        }
        for (Map.Entry<Integer, Integer> en : possible.entrySet()) {
            int menor = en.getKey();
            int maior = en.getValue();
            if (maior + menor > resultado){
                resultado = maior + menor;
            }
        }
        return resultado;
    }


    public static String romanos (int n){
        String[] unidades = "_ I II III IV V VI VII VIII IX".split("\\s+");
        String[] dezenas = "_ X XX XXX XL L LX LXX LXXX CX".split("\\s+");
        String[] centenas = "_ C CC CCC CD D DC DCC DCCC CM".split("\\s+");
        String[] milhares = "_ M MM MMM".split("\\s+");
        int mil = n / 1000;
        n = n % 1000;
        int cent = n/100;
        n = n % 100;
        int dez = n/10;
        n = n % 10;
        int uni = n;
        return (milhares[mil] + centenas[cent] + dezenas[dez] + unidades[uni]).replace("_", "");
    }


    public static double pi (int n){
        double pi = 0;
        double signal = 1;
        for (double i=1; i<=n; i++){
            pi += 4*signal/(2*i - 1);
            signal = signal * -1; 
        }
        return pi;
    }
}