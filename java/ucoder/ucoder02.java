import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class ucoder02{
    public static void main(String[] args) {
        quadrado();
    }
    
    //1007
    public static void numeroDeEuler(){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        double euler = 1;
        int d = 1;
        for (int i=1; i<=n; i++){
            d = d * i;
            euler += 1.0/d;
        }
        System.out.println(euler);
    }

    //1009
    public static Map<String, int[][]> readInput(){
        Scanner scanner = new Scanner(System.in);
        Map<String, int[][]> cases = new HashMap<>();
        while(scanner.hasNext()){
            String line = scanner.nextLine();
            if (line.length() == 1){
                int[][] matrix = getMatrix(line, scanner);
                cases.put(line, matrix);
            }
        }
        scanner.close();
        return cases;
    }
    public static int[][] getMatrix(String caso, Scanner scanner){
        // Scanner scanner = new Scanner(System.in);
        // String caso = scanner.nextLine();
        String[][] rows = new String[4][4];
        rows[0] = scanner.nextLine().split(" ");
        rows[1] = scanner.nextLine().split(" ");
        rows[2] = scanner.nextLine().split(" ");
        rows[3] = scanner.nextLine().split(" ");
        int[][] matrix = new int[4][4];
        for (int i=0; i<4; i++){
            for (int j=0; j<4; j++){
                matrix[i][j] = Integer.parseInt(rows[i][j]);
            }
        }
        // Map<String, int[][]> cases = new HashMap<>();
        // cases.put(caso, matrix);
        return matrix;
    }

    public static void result(String caso, int[][] matrix){
        int row3 = -1;
        int row1 = -1;
        int line3 = -1;
        int line1 = -1;
        for (int i=0; i<4; i++){
            if (matrix[i][0] + matrix[i][1] + matrix[i][2] + matrix[i][3] == 3){
                row3 = i + 1;
            }
            if (matrix[0][i] + matrix[1][i] + matrix[2][i] + matrix[3][i] == 3){
                line3 = i + 1;
            }
            if (matrix[i][0] + matrix[i][1] + matrix[i][2] + matrix[i][3] == 1){
                row1 = i + 1;
            }
            if (matrix[0][i] + matrix[1][i] + matrix[2][i] + matrix[3][i] == 1){
                line1 = i + 1;
            }
        }
        if (row3 == -1){
            System.out.printf("Caso %s: CORRETO%n", caso);
        }else{
            System.out.printf("Caso %s: MOVER CANGURU DE (%s,%s) PARA (%s,%s)%n", caso, row3, line3, row1, line1);
        }
    }

    public static void cangurus(){
        Map<String, int[][]> maps = new HashMap<>();
        maps = readInput();
        for(Map.Entry<String, int[][]> entry : maps.entrySet()){
            result(entry.getKey(), entry.getValue());
        }
    }

    //1010
    public static int preco(){
        Scanner scanner = new Scanner(System.in);
        int qtd = scanner.nextInt();
        scanner.nextLine();
        int soma = 0;
        for (int i=1; i<=qtd; i++){
            String[] item = scanner.nextLine().split(" ");
            soma += Integer.parseInt(item[0])*Integer.parseInt(item[1]);
        }
        return soma;
    }

    public static String troco (int pagamento, int preco){
        if (pagamento < preco){
            return("DINHEIRO INSUFICIENTE");
        }else if (pagamento == preco) {
            return("0");
        }else{
            return(Integer.toString(pagamento - preco));
        }
    }

    public static void valorTroco(){
        Scanner scanner = new Scanner(System.in);
        int casos = scanner.nextInt();
        ArrayList<String> msg = new ArrayList<>();
        for (int i=1; i<=casos; i++){
            int preco = preco();
            int pagamento = scanner.nextInt();
            msg.add(troco(pagamento, preco));
        }
        for (String s : msg){
            System.out.println(s);
        }
    }

    //1035
    public static void fechadura(){
        Scanner scanner = new Scanner(System.in);
        String[] goal = scanner.nextLine().split(" ");
        String[] pins = scanner.nextLine().split(" ");
        int[] diffs = new int[Integer.parseInt(goal[0])];
        for (int i=0; i<pins.length; i++){
            diffs[i] = Integer.parseInt(pins[i]) - Integer.parseInt(goal[1]);
        }
        int N = Integer.parseInt(goal[0]);
        int moviments = 0;
        for (int i = 0; i < N - 1; i++) {
            if (diffs[i] != 0) {
                int adjust = diffs[i];
                diffs[i] -= adjust;
                diffs[i+1] -= adjust;
                moviments += Math.abs(adjust);
            }
        }
        moviments += Math.abs(diffs[N - 1]);
        System.out.println(moviments);
    }
    
    //1036
    public static Boolean verEscada(String[][] matrix){
        int zeroIndex = -2;
        for (int i = 0; i < matrix.length; i++){
            int lineIndex = -1;
            for (int j = 0; j < matrix[i].length; j++){
                if (matrix[i][j].equals('0')){
                    lineIndex = j;
                }else{
                    break;
                }
            }
            if (zeroIndex == -1 && lineIndex > zeroIndex){
                zeroIndex = lineIndex;
            }else if (lineIndex > zeroIndex){
                zeroIndex = lineIndex;
            }else if (lineIndex <= zeroIndex){
                return false;
            }
        }
        return true;
    }

    public static void matrizEscada(){
        Scanner scanner = new Scanner(System.in);
        String[] dimensions = scanner.nextLine().split(" ");
        String[][] matrix = new String[Integer.parseInt(dimensions[0])][Integer.parseInt(dimensions[1])];
        for (int i=0; i<Integer.parseInt(dimensions[0]); i++){
            String[] newLine = scanner.nextLine().split(" ");
            matrix[i] = newLine;
        }
        if (verEscada(matrix)){
            System.out.println("S");
        }else{
            System.out.println("N");
        }
    }

    //1038
    public static void quadrado(){
        Scanner scanner = new Scanner(System.in);
        int dimension = scanner.nextInt();
        int[][] matrix = new int[dimension][dimension];
        String[][] tempMatrix = new String[dimension][dimension];
        scanner.nextLine();
        for (int i = 0; i < dimension; i++){
            tempMatrix[i] = scanner.nextLine().split(" ");
        }
        for (int i = 0; i < dimension; i++){
            for (int j = 0; j < dimension; j++){
                matrix[i][j] = Integer.parseInt(tempMatrix[i][j]);
            }
        }
        int[] sumLines = new int[dimension];
        int[] sumCols = new int[dimension];
        for (int line = 0; line < dimension; line++){
            for (int row = 0; row < dimension; row++){
                sumLines[line] += matrix[line][row];
                sumCols[row] += matrix[line][row];
            }
        }
        int differentLine = -1;
        int differentRow = -1;
        int somaOriginal = -1;
        int somaLaura = -1;
        for (int i = 0; i < dimension; i++){
            if ( sumLines[i] != sumLines[(i+1)%dimension] && sumLines[i] != sumLines[(i+2)%dimension]){
                differentLine = i;
                somaLaura = sumLines[i];
            }else{
                somaOriginal = sumLines[i];
            }
            if (sumCols[i] != sumCols[(i+1)%dimension] && sumCols[i] != sumCols[(i+2)%dimension]){
                differentRow = i;
            }
        }
        int numLaura = matrix[differentLine][differentRow];
        int numOriginal = Math.abs(somaLaura - somaOriginal - numLaura);
        System.out.printf("%s %s%n", numOriginal, numLaura);
    }

    
}