import java.util.Scanner;

public class lista2{
    public static void main(String[] args){
        sete();
    }

    public static void um(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("digite o primeiro lado do triangulo");
        float lado1 = scanner.nextFloat();
        System.out.println("digite o segundo lado do triangulo");
        float lado2 = scanner.nextFloat();
        System.out.println("digite o terceiro lado do triangulo");
        float lado3 = scanner.nextFloat();
        if (lado3 > lado1+lado2 || lado2 > lado1+lado2 || lado1 > lado2+lado3){
            System.out.println("Triângulo não existe");
        }else if (lado3 == lado2 && lado2 == lado1) {
            System.out.println("triângulo equilátero");
        }else if (lado3 == lado2 || lado3==lado1 || lado2 == lado1) {
            System.out.println("triangualo isósceles");
        }else{
            System.out.println("triangulo escaleno");
        }
    }

    public static void tres(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("peso: ");
        float peso = scanner.nextFloat();
        float excesso = 0;
        float multa = 0;
        if (peso > 50){
            excesso = peso-50;
            multa = excesso*4;
        }
        System.out.printf("multa: %.2f reais%n", multa);
        System.out.printf("excesso: %.2f reais%n", excesso);
    }

    public static void quatrocinco(){
        Scanner scanner = new Scanner (System.in);
        System.out.println("digite tres numeros inteiros");
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        int num3 = scanner.nextInt();
        if (num1 >= num2 && num1 >= num3){
            System.out.printf("maior numero: %s%n", num1);
        }else if(num2>=num3 && num2>=num1){
            System.out.printf("maior numero: %s%n", num2);
        }else{
            System.out.printf("maior numero: %s%n", num3);
        }
        if (num1 <= num2 && num1<=num3){
            System.out.printf("menor numero: %s%n", num1);
        }else if (num2 <= num1 && num2<=num3){
            System.out.printf("menor numero: %S%n", num2);
        }else{
            System.out.printf("menor numero: %s%n", num3);
        }
    }

    public static void seis(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("indira o pagamento e o numero de horas trabalhadas");
        float pagamento = scanner.nextFloat();
        int horas = scanner.nextInt();
        float bruto = pagamento*horas;
        float ir = bruto*11/100;
        float inss = bruto*8/100;
        float sindicato = bruto*5/100;
        float liq = bruto - ir - inss - sindicato;
        System.out.printf("salario bruto: %s%nir: %s%ninss: %s%nsindicato: %s%nliquido: %s%n", bruto, ir, inss, sindicato, liq);
    }

    public static void sete(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira a area que será pintada:");
        double area = scanner.nextDouble();
        double cobertura = area/3;
        int latas = (int) Math.ceil(cobertura/18);
        System.out.printf("numero de latas: %s", latas);
    }
}