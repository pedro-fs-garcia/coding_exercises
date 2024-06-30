import java.util.Scanner;

public class lista3{
    public static void main(String[] args){
        cinco();
    }

    public static void um(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("insira uma nota de 0 a 10: ");
        int nota = scanner.nextInt();
        while (nota > 10 || nota < 0){
            System.out.println("insira uma nota de 0 a 10: ");
            nota = scanner.nextInt();
        }
    }

    public static void dois(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira o nome e senha");
        String nome = scanner.nextLine();
        String senha = scanner.nextLine();
        while (nome.equals(senha)){
            System.out.println("nome e senha não podem ser iguais");
            nome = scanner.nextLine();
            senha = scanner.nextLine();
        }
    }

    public static void tres(){
        int popa = 80000;
        int popb = 200000;
        int ano = 0;
        while (popa <= popb){
            popa += popa*3/100;
            popb += popb*1.5/100;
            ano++;
        }
        System.out.printf("%s anos", ano);
    }

    public static void quatro(){
        Scanner scanner = new Scanner(System.in);
        int fib = scanner.nextInt();
        int count = 2;
        int f1 = 1;
        int f2 = 1;
        int f = 0;
        if (fib<=2){
            System.out.println(1);
        }else{
            while (count < fib){
            f = f1 + f2;
            f1 = f2;
            f2 = f;
            count++;
            }
            System.out.println(f);
        }
    }

    public static void cinco(){
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        int r;
        while ((num1 % num2) > 0){
            r = num1%num2;
            num1 = num2;
            num2 = r;
        }
        System.out.println(num2);
    }
}