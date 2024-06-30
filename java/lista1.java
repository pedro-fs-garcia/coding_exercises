import java.util.Scanner;

public class lista1{
    public static void main(String[] args) {
        dez();
    }

    public static void um(){
        Scanner num = new Scanner(System.in);
        System.out.println("insira um número:");
        int n1 = num.nextInt();
        System.out.println("insira um número:");
        int n2 = num.nextInt();
        System.out.println("soma:\n" + (n1 + n2));
    }

    public static void dois(){
        Scanner valor = new Scanner(System.in);
        System.out.println("insira um vlor em metros: ");
        int metros = valor.nextInt();
        System.out.println(metros*1000 + " mm");

    }

    public static void tres(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira um valor em horas:");
        int horas = scanner.nextInt();
        System.out.println("Insira um valor em minutos:");
        int min = scanner.nextInt();
        System.out.println("Insira um valor em segundos:");
        int sec = scanner.nextInt();
        sec = sec + min*60 + horas*60*60;
        System.out.println(sec + "segundos");
    }

    public static void quatro(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o valor do salario: ");
        double sal = scanner.nextDouble();
        System.out.println("digite a porcentagem do aumento:");
        double aumento = scanner.nextDouble();
        System.out.printf("novo salário: %.2f%n", (sal*(1+aumento/100)));
    }

    public static void cinco(){
        Scanner scanner = new Scanner (System.in);
        System.out.println("Digite o valor do produto: ");
        float preco = scanner.nextFloat();
        System.out.println("digite o valor do desconto:");
        float desconto = scanner.nextFloat();
        System.out.printf("preco com desconto: %.2f%n", (preco-preco*desconto/100));
    }

    public static void seis(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("velocidade: ");
        float vel = scanner.nextFloat();
        System.out.println("distancia: ");
        float dist = scanner.nextFloat();
        System.out.printf("tempo de viagem: %.2f%n", (dist/vel));
    }
    
    public static void sete(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("digite uma temperatura em celcius");
        float celsius = scanner.nextFloat();
        float far = celsius*9/5 + 32;
        System.out.printf("%.2f%n graus Fahrenheit", far);
    }

    public static void nove(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("distancia:");
        float dist = scanner.nextFloat();
        System.out.println("dias:");
        int dias = scanner.nextInt();
        System.out.printf("preço final: %.2f%n", (dias*60 + 0.15*dist));
    }

    public static void dez(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("quantidade de cigarros por dia:");
        int cig = scanner.nextInt();
        System.out.println("anos fumando");
        int anos = scanner.nextInt();
        System.out.printf("tempo de vida reduzido em: %s%n", 10*cig*365*anos/(6*24));
    }
}