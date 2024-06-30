import java.util.Scanner;

public class hello_world {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        int x = 10;
        double y = 3.14;
        String z = "hello";
        System.out.printf("x = %d\ny = %.2f\nz = %s%n", x, y, z);

        variables();
        swapVariables();
        // takeInput();
        arithmetics();
    }

    public static void variables(){
        int inteiro = 10;
        System.out.printf("my number is " + inteiro);

        long numero = 1234365743562542435L;
        System.out.println(numero);

        float pi = 3.14f;
        System.out.println(pi);

        boolean human = false;
        System.out.println(human);

        char symbol = '@';
        System.out.println(symbol);

        String str = "pedro";
        System.out.println(str);        
    }

    public static void swapVariables(){
        String x = "water";
        String y = "ades";
        System.out.println("x: " + x);
        System.out.println("y: " + y);
        String temp = x;
        x = y;
        y = temp;
        System.out.println("x: " + x);
        System.out.println("y: " + y);
    }

    public static void takeInput(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("What is your name? ");
        String name = scanner.nextLine();

        System.out.println("How old are you? ");
        int age = scanner.nextInt();
        System.out.println("Hello " + name);
        System.out.println("You are " + age + " years old");

        scanner.nextLine();
        System.out.println("What food do you like?");
        String food = scanner.nextLine();
        System.out.println("You like " + food);
    }

    public static void arithmetics(){
        int x = 2;
        int y = 6;
        x += 1;
        y++;
        System.out.println(x+y);
        System.out.println(x-y);
        System.out.println(x*y);
        System.out.println(x/y);
        double z = 2/6;
        System.out.println(z);
        System.out.println(x%y);
    }

}
