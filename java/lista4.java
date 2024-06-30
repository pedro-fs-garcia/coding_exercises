import java.util.*;

public class lista4{
    public static void main(String[] args) {
        cinco();
    }

    public static void um(){
        Random random = new Random();
        int[] sorteados = new int[10];
        for (int i = 0; i<10; i++){
            int n = random.nextInt(10)+1;
            sorteados[i] = n;
        }
        System.out.println(Arrays.toString(sorteados));
        int maior = 0;
        int menor = 11;
        for (int n : sorteados){
            if(n>maior){
                maior = n;
            }
            if (n< menor){
                menor = n;
            }
        }
        System.out.printf("Maior numero: %s%n", maior);
        System.out.printf("menor numero: %s%n", menor);
    }

    public static void dois(){
        Random random = new Random();
        List<Integer> geral = new ArrayList<>();
        List<Integer> par = new ArrayList<>();
        List<Integer> impar = new ArrayList<>();
        for (int i=0; i<20; i++){
            int n = random.nextInt(100)+1;
            geral.add(n);
        }
        System.out.println(geral);
        for (int n : geral){
            if (n%2 == 0){
                par.add(n);
            }else{
                impar.add(n);
            }
        }
        System.out.println(par);
        System.out.println(impar);
    }

    public static void tres(){
        Random random = new Random();
        List<Integer> v1 = new ArrayList<>();
        List<Integer> v2 = new ArrayList<>();
        List<Integer> v3 = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            int n1 = random.nextInt(100)+1;
            v1.add(n1);
            n1 = random.nextInt(100)+1;
            v2.add(n1);    
        }
        for (int i = 0; i < 10; i++) {
            v3.add(v1.get(i));
            v3.add(v2.get(i));
        }
        System.out.println(v1);
        System.out.println(v2);
        System.out.println(v3);
    }

    public static void quatro(){
        String statement = "The Python Software Foundation and the global Python community welcome and encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. We want our community to be more diverse: whoever you are, and whatever your background, we welcome you.";
        String letras = "python";
        List<String> palavrasPython = new ArrayList<>();

        String[] palavras = statement.split("\\s+");
        for (String palavra : palavras){
            palavra = palavra.replaceAll("[^a-zA-Z]", "").toLowerCase();

            if (letras.indexOf(palavra.charAt(0)) != -1 || letras.indexOf(palavra.charAt(palavra.length()-1)) != -1){
                palavrasPython.add(palavra);
            }
        }
        System.out.println(palavrasPython);
    }

    public static void cinco(){
        String statement = "The Python Software Foundation and the global Python community welcome and encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. We want our community to be more diverse: whoever you are, and whatever your background, we welcome you.";
        String letras = "python";
        List<String> palavrasPython = new ArrayList<>();
        String[] palavras = statement.split("\\s+");
        for (String palavra : palavras){
            palavra = palavra.replaceAll("[^a-zA-Z]", "").toLowerCase();

            boolean isPythonLetter = false;
            for (char c : palavra.toCharArray()){
                if (letras.indexOf(c) != -1){
                    isPythonLetter = true;
                    break;
                }
            }
            if (isPythonLetter){
                palavrasPython.add(palavra);
            }
        }
        System.out.println(palavrasPython);
    }

}