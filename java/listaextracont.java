import java.util.*;

public class listaextracont {
    public static void main(String[] args) {
        System.out.println(josephus(50, 3));
        erastotenes(30);
        System.out.println(fib());
        System.out.println(fib2());
        homemcalc();
        quadrados(31);
    }

    //problema de josephus
    public static int josephus (int n, int m){
        if(n == 1){
            return 1;
        }
        List<Integer> circulo = new ArrayList<>();
        int index = 0;
        for (int i=1; i<=n;i++){
            circulo.add(i);
        }
        while (circulo.size() > 1){
            index = (index + m - 1) % circulo.size();
            circulo.remove(index);
        }
        return circulo.get(0);
    }   

    //crivo de erastotenes
    public static void erastotenes (int n){
        boolean[] isPrime = new boolean[n + 1];
        List<Integer> values = new ArrayList<>();
        for (int i=2; i<=n; i++){
            isPrime[i] = true;
        }
        for (int i=0; i<=n; i++){
            values.add(i);
        }
        for (int i=2; i*i<=n; i++){
            if (isPrime[i]){
                for (int j=2; j<=n; j++){
                    if (values.get(j) % i == 0 && values.get(j) != i){
                        isPrime[j] = false;
                    }
                }
            }
        }
        List<Integer> primes = new ArrayList<>();
        for (int i=0; i<=n; i++){
            if (isPrime[i]){
                primes.add(values.get(i));
            }
        }
        System.out.println(primes);
    }

    //soma dos numeros de fibonacci até 4000000 e que sejam pares
    public static int fib (){
        int soma = 2;
        List<Integer> fibonacci = new ArrayList<>();
        fibonacci.add(1);
        fibonacci.add(2);
        int f = 0;
        while (f <= 4000000){
            f = fibonacci.get(fibonacci.size()-1) + fibonacci.get(fibonacci.size()-2);
            fibonacci.add(f);
            if (f % 2 == 0){
                soma += f;
            }
        }
        return soma;
    }

    public static int fib2 (){
        int soma = 2;
        int f1 = 1;
        int f2 = 2;
        while (f2 <= 4000000){
            int f = f2 + f1;
            f1 = f2;
            f2 = f;
            if (f % 2 == 0){
                soma += f;
            }
        }
        return soma;
    }

    //homem que calculava
    public static void homemcalc (){
        int arroz = 0;
        for (int i=0; i<=63; i++){
            arroz += Math.pow(2, i);
        }
        System.out.println(arroz);
    }

    //quadrados de azulejos
    public static int maiorLado (double n){
        int lado = 0;
        while (Math.pow(lado, 2) <= n) {
            if (Math.pow(lado+1, 2) > n){
                return lado;
            }
            lado++;
        }
        return lado;
    }

    public static void quadrados (double n){
        HashMap<Integer, Integer> resultado = new HashMap<>();
        while(n > 0){
            int maior_lado = maiorLado(n);
            int maior = maiorLado(n);
            int count = 0;
            while (maior_lado == maior){
                count += 1;
                n = n - Math.pow(maiorLado(n), 2);
                maior = maiorLado(n);
            }
            resultado.put(maior_lado, count);
        }
        for (Map.Entry<Integer, Integer> entry : resultado.entrySet()){
            int key = entry.getKey();
            int value = entry.getValue();
            System.out.printf("%s quadrado(s) de lado %s%n", value, key);
        }
    }
}