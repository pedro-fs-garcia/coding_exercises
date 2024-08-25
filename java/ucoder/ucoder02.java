import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
public class ucoder02{
    public static void main(String[] args) {
        penalties();
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

    //1041
    public static int getStreetPosition(String[] houses, String number){
        for (int i=0; i<houses.length; i++){
            if (houses[i].equals(number)){
                return i;
            }
        }
        return -1;
    }
    public static void carteiro(){
        Scanner scanner = new Scanner(System.in);
        String[] housesLetters = scanner.nextLine().split(" ");
        String[] houseNumbers = scanner.nextLine().split(" ");
        String[] letterNumbers = scanner.nextLine().split(" ");
        int[] positions = new int[letterNumbers.length];
        for (int i = 0; i < letterNumbers.length; i++){
            positions[i] = getStreetPosition(houseNumbers, letterNumbers[i]);
        }
        int time = positions[0];
        for (int i = 1; i<positions.length; i++){
            time += Math.abs(positions[i-1] - positions[i]);
        }
        System.out.println(time);
    }

    //1043
    public static void notas(){
        Scanner scanner = new Scanner(System.in);
        String numNotas = scanner.nextLine();
        String tempNotas = scanner.nextLine();
        ArrayList<Integer> notas = new ArrayList<>();
        for (String s : tempNotas.split(" ")){
            notas.add(Integer.parseInt(s));
        }
        int maiorNota = -1;
        int maiorFreq = 0;
        for (int nota : notas){
            int freq = Collections.frequency(notas, nota);
            if (freq > maiorFreq){
                maiorFreq = freq;
                maiorNota = nota;
            }else if (freq == maiorFreq && nota > maiorNota){
                maiorFreq = freq;
                maiorNota = nota;
            }
        }
        System.out.println(maiorNota);
    }

    //1037
    public static void decifra(){
        Scanner scanner = new Scanner(System.in);
        String[] alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        String[] key = scanner.nextLine().split("");
        String[] phrase = scanner.nextLine().split("");
        Map<String, String> keyToAlpha = new HashMap<>();
        for (int i = 0; i < alphabet.length; i++){
            keyToAlpha.put(key[i], alphabet[i]);
        }
        StringBuilder message = new StringBuilder();
        for (String s : phrase){
            message.append(keyToAlpha.get(s));
        }
        System.out.println(message);
    }

    //1031
    public static void letras(){
        Scanner scanner = new Scanner(System.in);
        String letter = scanner.nextLine();
        String[] phrase = scanner.nextLine().split(" ");
        Double contains = 0.0;
        Double len = Double.valueOf(phrase.length);
        for (String s : phrase){
            if (s.contains(letter)){
                contains += 1.0;
            }
        }
        System.out.printf("%.1f%n", contains/len * 100);
    }

    //1048
    public static void loteria(){
        Scanner scanner = new Scanner(System.in);
        String[] aposta = scanner.nextLine().split(" ");
        // String[] tempSorteados = scanner.nextLine().split(" ");
        List<String> sorteados = Arrays.asList(scanner.nextLine().split(" "));
        int corrects = 0;
        for (String s : aposta){
            if (sorteados.contains(s)){
                corrects += 1;
            }
        }
        String result = switch (corrects){
            case 6 -> "sena";
            case 5 -> "quina";
            case 4 -> "quadra";
            case 3 -> "terno";
            default -> "azar";
        };
        System.out.println(result);
    }

    //1052
    public static void volumeDaTv(){
        Scanner scanner = new Scanner(System.in);
        String[] inicio = scanner.nextLine().split(" ");
        String[] mudancas = scanner.nextLine().split(" ");
        int volInicial = Integer.parseInt(inicio[0]);
        int volFinal = volInicial;
        for (String s : mudancas){
            volFinal += Integer.parseInt(s);
            if (volFinal > 100){
                volFinal = 100;
            }else if (volFinal < 0){
                volFinal = 0;
            }
        }
        System.out.println(volFinal);
    }

    //1075
    public static void consecutivos(){
        Scanner scanner = new Scanner(System.in);
        int quant = scanner.nextInt();
        scanner.nextLine();
        String[] numeros = scanner.nextLine().split(" ");
        int finalCount = 1;
        for (int i = 0; i < quant-1; i++){
            int tempCount = 1;
            for (int j = i+1; j < quant; j++){
                if (numeros[i].equals(numeros[j])){
                    tempCount += 1;
                }else{
                    break;
                }
            }
            if (tempCount > finalCount){
                finalCount = tempCount;
            }
        }
        System.out.println(finalCount);
    }

    //1085
    public static void aniversario(){
        Scanner scanner = new Scanner(System.in);
        String[] malaquias = scanner.nextLine().split(" ");
        List<Boolean> results = new ArrayList<>();
        Boolean runLoop = true;
        while (runLoop) {
            String turma = scanner.nextLine();
            if (turma.equals("0 0")){
                runLoop = false;
                continue;
            }
            Boolean aniversario = false;
            for (int i = 0; i < Integer.parseInt(turma); i++){
                String[] info = scanner.nextLine().split(" ");
                if (info[0].equals(malaquias[0]) && info[1].equals(malaquias[1])){
                    aniversario = true;
                } else if(info[0].equals('0') && info[1].equals('0')){
                    runLoop = false;
                    break;
                }
            }
            results.add(aniversario);
        }
        for (Boolean b : results){
            if (b){
                System.out.println("S");
            }else{
                System.out.println("N");
            }
        }
    }

    //1107
    public static void jogoDeEstrategia(){
        Scanner scanner = new Scanner (System.in);
        String[] gameInfo = scanner.nextLine().split(" ");
        int numJogadores = Integer.parseInt(gameInfo[0]);
        String[] pontos = scanner.nextLine().split(" ");
        int[] pontosPorJogador = new int[numJogadores];
        for (int i=0; i<numJogadores; i++){
            for (int j=i; j<pontos.length; j += numJogadores){
                pontosPorJogador[i] += Integer.parseInt(pontos[j]);
            }
        }
        int winner = -1;
        int morePoints = -1;
        for (int i=0; i<pontosPorJogador.length; i++){
            if (pontosPorJogador[i] >= morePoints){
                winner = i+1;
                morePoints = pontosPorJogador[i];
            }
        }
        System.out.println(winner);
    }

    //1111
    public static void chocolateEmBarra(){
        Scanner scanner = new Scanner(System.in);
        int d = scanner.nextInt();
        scanner.nextLine();
        String[] coord1 = scanner.nextLine().split(" ");
        int[] c1 = {Integer.parseInt(coord1[0])-1, Integer.parseInt(coord1[1])-1};
        String[] coord2 = scanner.nextLine().split(" ");
        int[] c2 = {Integer.parseInt(coord2[0])-1, Integer.parseInt(coord2[1])-1};
        if (c1[0] >= 0 && c1[0] <= d/2-1 && c1[1]>=0 && c1[1] <= d-1 && c2[0] > d/2-1 && c2[0] <= d-1 && c2[1]>=0 && c2[1] <= d-1){
            System.out.println("S");
        }else if (c1[0] >= 0 && c1[0] <= d-1 && c1[1]>=0 && c1[1] <= d/2-1 && c2[0] >= 0 && c2[0] <= d-1 && c2[1]>d/2-1 && c2[1] <= d-1) {
            System.out.println("S");
        }else if (c2[0] >= 0 && c2[0] <= d/2-1 && c2[1]>=0 && c2[1] <= d-1 && c1[0] > d/2-1 && c1[0] <= d-1 && c1[1]>=0 && c1[1] <= d-1) {
            System.out.println("S");
        }else if(c2[0] >= 0 && c2[0] <= d/2-1 && c2[1] >= 0 && c2[1] <= d-1 && c1[0] > d/2-1 && c1[0] <= d-1 && c1[1] >= 0 && c1[1] <= d-1){
            System.out.println("S");
        }else{
            System.out.println("N");
        }
    }

    //1117
    public static void fitaColorida(){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();
        String[] input = scanner.nextLine().split(" ");
        int[] fita = new int[n];
        ArrayList<Integer> zeroIndexes = new ArrayList<>();
        for (int i = 0; i < n; i++){
            fita[i] = Integer.parseInt(input[i]);
            if (fita[i] == 0){
                zeroIndexes.add(i);
            }
        }
        System.out.println(zeroIndexes.toString());

        for (int i = 0; i < n; i++){
            int min = n;
            for (int j : zeroIndexes){
                if ((Math.abs(i - j)) < min){
                    min = Math.abs(i-j);
                }
            }
            if (min > 9){
                min = 9;
            }
            fita[i] = min;
        }
        String resp = "";
        for (int i = 0; i < n; i++){
            if (i == n-1){
                resp += Integer.toString(fita[i]);
            }
            else{
                resp += Integer.toString(fita[i]) + " ";
            }
        }
        System.out.println(resp);
    }

    // 1119
    public static void cobraCoral(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        String Verdadeira = "F";
        for (int i = 0; i < 2; i++){
            if (input[i].equals(input[i+2])){
                Verdadeira = "V";
            }
        }
        System.out.println(Verdadeira);
    }

    public static void cobraCoral2(){
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(" ");
        if (input[0].equals(input[3])){
            System.out.println("F");
        }else{
            System.out.println("V");
        }
    }

    //1120
    public static void quebraCabeca(){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();
        HashMap<String, String[]> pecas = new HashMap<>();
        for (int i = 0; i < n; i++){
            String[] input = scanner.nextLine().split(" ");
            String[] value = {input[1], input[2]};
            pecas.put(input[0], value);
        }
        StringBuilder resposta = new StringBuilder();
        String[] peca = pecas.get("0");
        String proximo = peca[1];
        resposta.append(peca[0]);
        while (!proximo.equals("1")){
            peca = pecas.get(proximo);
            resposta.append(peca[0]);
            proximo = peca[1];
        }
        System.out.println(resposta);
    }

    //1143
    public static void helloGalaxy(){
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> planetas = new ArrayList<>();
        int n = scanner.nextInt();
        while (n != 0){
            scanner.nextLine();
            String[][] matrix = new String[n][3];
            for (int i = 0; i < n; i++){
                matrix[i] = scanner.nextLine().split(" ");
            }
            int maisRecente = Integer.parseInt(matrix[0][1]) - Integer.parseInt(matrix[0][2]);
            String planeta = matrix[0][0];
            for (int i = 1; i < n; i++){
                int ano = Integer.parseInt(matrix[i][1]) - Integer.parseInt(matrix[i][2]);
                if (ano < maisRecente){
                    maisRecente = ano;
                    planeta = matrix[i][0];
                }
            }
            planetas.add(planeta);
            n = scanner.nextInt();
        }
        for (String planeta : planetas){
            System.out.println(planeta);
        }
    }

    //1144
    public static void perguntasFrequentes(){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();
        int[] resp = new int[n];
        int teste = 0;
        while (teste < n){
            String[] info = scanner.nextLine().split(" ");
            String[] perguntas = scanner.nextLine().split(" ");
            HashMap<String, Integer> counter = new HashMap<>();
            for (String s : perguntas){
                if (counter.containsKey(s)){
                    int count = counter.get(s) + 1;
                    counter.put(s, count);
                }else{
                    counter.put(s, 1);
                }
            }
            int c = 0;
            for (HashMap.Entry<String, Integer> entry : counter.entrySet()){
                int value = entry.getValue();
                if (value >= Integer.parseInt(info[1])){
                    c ++;
                }
            }
            resp[teste] = c;
            teste ++;
        }
        for (int i : resp){
            System.out.println(i);
        }
    }

    //1151
    public static void variacoes(){
        ArrayList<Character> chars = new ArrayList<>();
        chars.add('a');
        chars.add('e');
        chars.add('i');
        chars.add('o');
        chars.add('s');
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();
        String[] input = new String[n];
        for (int i = 0; i < n; i++){
            String in = scanner.nextLine();
            input[i] = in;
        }
        long[] resposta = new long[n];
        for (int i = 0; i < n; i++){
            long count = 1;
            for (char c : input[i].toLowerCase().toCharArray()){
                if (chars.contains(c)){
                    count = count * 3;
                }else{
                    count = count * 2;
                }
            }
            resposta[i] = count;
        }
        for (long r : resposta){
            System.out.println(r);
        }
    }

    //1156
    public static String calculoDano(int H, int at, int ad, int bt, int bd){
        int tempo = 0;
        while (H > 0){
            if (tempo % ad == 0 && tempo % bd == 0){
                H -= at;
                if (H <= 0){
                    return "Andre";
                }
                H -= bt;
                if (H <= 0){
                    return "Beto";
                }
            }else if (tempo % ad == 0){
                H -= at;
                if (H <= 0){
                    return "Andre";
                }
            }else if (tempo % bd == 0){
                H -= bt;
                if (H <= 0){
                    return "Beto";
                }
            }
            tempo += 1;
        }
        return null;
    }

    public static void ultimoDano(){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();
        int test = 0;
        String[] resp = new String[n];
        while (test < n){
            String[] input = scanner.nextLine().split(" ");
            int H = scanner.nextInt();
            scanner.nextLine();
            int at = Integer.parseInt(input[0]);
            int ad = Integer.parseInt(input[1]);
            int bt = Integer.parseInt(input[2]);
            int bd = Integer.parseInt(input[3]);
            resp[test] = calculoDano(H, at, ad, bt, bd);
            test++;
        }
        for (String r : resp){
            System.out.println(r);
        }
    }

    //1157
    public static void penalties(){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();
        String timeA = scanner.nextLine();
        String timeB = scanner.nextLine();
        int pontosA = 0;
        int chutesA = n;
        int pontosB = 0;
        int chutesB = n;
        int chute = 0;
        boolean fim = true;
        for (int i = 0; i < n; i++){
            if (timeA.charAt(i) == 'o'){
                pontosA += 1;
            }
            chutesA -= 1;
            chute += 1;
            if (Math.abs(pontosA - pontosB) > chutesB){
                System.out.println(chute);
                fim = false;
                break;
            }

            if (timeB.charAt(i) == 'o'){
                pontosB += 1;
            }
            chutesB -= 1;
            chute += 1;
            if(Math.abs(pontosA-pontosB) > chutesA){
                System.out.println(chute);
                fim = false;
                break;
            }
        }
        if (fim){
            if (pontosA == pontosB){
                System.out.println("Empate");
            }else{
                System.out.println(2*n);
            }
        }
    }
}