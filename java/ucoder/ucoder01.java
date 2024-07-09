import java.util.*;
public class ucoder01{
    public static void main(String[] args) {
        esquerdaVolver();
    }

    //1000
    public static void helloWorld(){
        System.out.println("Hello, World!");
    }

    //1001
    public static void somaSimples(){
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a+b);
    }

    //1002
    public static void fatorial(){
        Scanner scanner = new Scanner(System.in);
        long fact = 1;
        int n = scanner.nextInt();
        for (int i=1; i<=n; i++){
            fact = fact*i;
        }
        System.out.println(fact);
    }

    //1022
    public static void subtracaoSimples(){
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a-b);
    }

    //1023
    public static void multiplicacaoSimples1(){
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a*b);
    }

    //1024
    public static void divisaoSimples(){
        Scanner scanner = new Scanner(System.in);
        double a = scanner.nextDouble();
        double b = scanner.nextDouble();
        System.out.println(a/b);
    }

    //1025
    public static void divisaoSimples2(){
        Scanner scanner = new Scanner(System.in);
        double a = scanner.nextDouble();
        double b = scanner.nextDouble();
        System.out.printf("%.2f", a/b);
    }

    //1026
    public static void restoDivisao1(){
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a%b);
    }

    //1027
    public static void restoDivisao2(){
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(Math.max(a%b, b%a));
    }

    //1030
    public static Boolean checkSemente(Boolean[] papel){
        for (Boolean b : papel){
            if (b == false){
                return false;
            }
        }
        return true;
    }
    public static void semente(){
        Scanner scanner = new Scanner (System.in);
        String fita = scanner.nextLine();
        String index = scanner.nextLine();
        Boolean[] papel = new Boolean[Integer.parseInt(fita.split(" ")[0])];
        for (int i=0; i<papel.length; i++){
            papel[i] = false;
        }
        for (String s : index.split(" ")){
            papel[Integer.parseInt(s.strip())-1] = true;
        }
        int dias = 0;
        while(checkSemente(papel) == false){
            ArrayList<Integer> in = new ArrayList<>();
            for (int i=0; i<papel.length; i++){
                if (papel[i] == true && i>0 && i<papel.length-1){
                    in.add(i+1);
                    in.add(i-1);
                }else if(papel[i] == true && i==0){
                    in.add(i+1);
                }else if(papel[i]==true && i==papel.length-1){
                    in.add(i-1);
                }
            }
            for (int i : in){
                papel[i] = true;
            }
            dias += 1;
        }
        System.out.println(dias);
    }

    //1060
    public static void saldoVovo(){
        Scanner scanner = new Scanner(System.in);
        String inicio = scanner.nextLine();
        int periodo = Integer.parseInt(inicio.split(" ")[0]);
        int saldo = Integer.parseInt(inicio.split(" ")[1]);
        int menor = saldo;
        for (int i=1; i<=periodo; i++){
            int fluxo = scanner.nextInt();
            saldo += fluxo;
            if (saldo < menor){
                menor = saldo;
            }
        }
        System.out.println(menor);
    }

    //1061
    public static void tomadas(){
        Scanner scanner = new Scanner(System.in);
        String[] reguasStr = scanner.nextLine().split(" ");
    }

    //1062
    public static void distManhattan(){
        Scanner scanner = new Scanner(System.in);
        String[] coord = scanner.nextLine().split(" ");
        int deltax = Math.abs(Integer.parseInt(coord[0]) - Integer.parseInt(coord[2]));
        int deltay = Math.abs(Integer.parseInt(coord[1]) - Integer.parseInt(coord[3]));
        System.out.println(deltax+deltay);
    }

    //1073
    public static void viceCampeao(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        int[] pontos = new int[3];
        for (int i=0; i<3; i++){
            pontos[i] = Integer.parseInt(input[i]);
        }
        Arrays.sort(pontos);
        System.out.println(pontos[1]);
    }

    //1100
    public static void tridu(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        System.out.println(Math.max(Integer.parseInt(input[0]), Integer.parseInt(input[1])));
    }

    //1115
    public static void mobile(){
        Scanner scanner = new Scanner(System.in);
        int[] pesos = new int[4];
        for (int i=0; i<4; i++){
            pesos[i] = Integer.parseInt(scanner.nextLine().strip());
        }
        if (pesos[0]==pesos[1]+pesos[2]+pesos[3] && pesos[1]+pesos[2]==pesos[3] && pesos[1]==pesos[2]){
            System.out.println("S");
        }else{
            System.out.println("N");
        }
    }

    //1124
    public static void entradaSaida(){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.printf("O numero informado foi %s%n", n);
    }

    //1125
    public static void media(){
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        double media = 0;
        for (String s : input.split(" ")){
            media += Double.parseDouble(s);
        }
        media = media/4;
        System.out.println(media);
    }

    //1126
    public static void metroParaCentimetro(){
        Scanner scanner = new Scanner(System.in);
        int metros = scanner.nextInt();
        System.out.println(metros*1000);
    }

    //1127
    public static void areaCirculo(){
        Scanner scanner = new Scanner(System.in);
        String raiostr = scanner.nextLine();
        Double raio = Double.parseDouble(raiostr);
        System.out.printf("%.4f", 3.1415*raio*raio);
    }

    //1128
    public static void dobroAreaQuadrado(){
        Scanner scanner = new Scanner(System.in);
        int lado = scanner.nextInt();
        long area = lado*lado*lado*lado;
        System.out.println(area);
    }
    
    //1129
    public static void salariomensal(){
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        Double pagamento = Double.parseDouble(input.split(" ")[0]);
        Double horas = Double.parseDouble(input.split(" ")[1]);
        System.out.printf("%.2f%n", pagamento*horas);
    }

    //1130
    public static void farParaCel(){
        Scanner scanner = new Scanner(System.in);
        int far = scanner.nextInt();
        System.out.println((far-32)*5/9);
    }

    //1131
    public static void celParaFar(){
        Scanner scanner = new Scanner(System.in);
        int cel = scanner.nextInt();
        System.out.println(cel*9/5+32);
    }

    //1132
    public static void matSimples(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        Double[] nums = new Double[3];
        for (int i=0; i<3; i++){
            nums[i] = Double.parseDouble(input[i]);
        }
        System.out.printf("%.1f%n", nums[0]*nums[1]);
        System.out.printf("%.1f%n",3*nums[0]+nums[2]);
        System.out.printf("%.1f%n", Math.pow(nums[2], 3));
    }

    //1133
    public static void pesoIdeal(){
        Scanner scanner = new Scanner(System.in);
        Double altura = scanner.nextDouble();
        System.out.printf("%.2f%n", 72.7*altura-58);
    }

    //1134
    public static void pesoIdealII(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        if (input[2].equals("1")){
            System.out.printf("%.2f%n", Double.parseDouble(input[0])*62.1 - 44.7);
        }
        System.out.printf("%.2f%n", Double.parseDouble(input[0])*72.7 - 58);
    }

    //1135
    public static void pesca(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        int peso = Integer.parseInt(input[0]);
        int limite = Integer.parseInt(input[1]);
        if (peso > limite){
            System.out.println((peso-limite)*4);
        }else{
            System.out.println(0);
        }
    }

    //1136
    public static void latasTinta(){
        Scanner scanner = new Scanner (System.in);
        Double area = scanner.nextDouble();
        int latas = (int) Math.ceil(area/54);
        System.out.println(latas + " " + latas*80);
    }

    //1137
    public static void download(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        System.out.println(Integer.parseInt(input[0])*8/Integer.parseInt(input[1]));
    }

    //1138
    public static void maiorI(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        System.out.println(Math.max(Integer.parseInt(input[0]), Integer.parseInt(input[1])));
    }

    //1139
    public static void positivoNegativo(){
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        if(num>0){
            System.out.println("positivo");
        }else{
            System.out.println("negativo");
        }
    }

    //1140
    public static void vogalConsoante(){
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        if("aeiou".contains(input)){
            System.out.println("vogal");
        }else{
            System.out.println("consoante");
        }
    }

    //1141
    public static void aprovadoReprovado(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        Double media = (Double.parseDouble(input[0]) + Double.parseDouble(input[1]))/2;
        if (media < 7){
            System.out.println("REPROVADO");
        }else if (media == 10){
            System.out.println("APROVADO COM DISTINCAO");
        }else{
            System.out.println("APROVADO");
        }
    }

    //1142
    public static void maiorDeTres(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        int maior = Integer.parseInt(input[0]);
        for (int i=1; i<3; i++){
            if(Integer.parseInt(input[i]) > maior){
                maior = Integer.parseInt(input[i]);
            }
        }
        System.out.println(maior);
    }

    //1219
    public static void esquerdaVolver(){
        Scanner scanner = new Scanner(System.in);
        String n = scanner.nextLine();
        String comandos = scanner.nextLine();
        String[] direcao = {"N", "L", "S", "O"};
        int index = 0;
        for (char c : comandos.toCharArray()){
            if (c == 'E'){
                index += 3;
            }else if (c == 'D') {
                index += 1;
            }
        }
        System.out.println(direcao[index % 4]);
    }
}