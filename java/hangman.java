
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class hangman{
    public static void main(String[] args) {
        System.out.println("Vamos nos enforcar!");
        playRound();
        while(playAgain()){
            playRound();
        }
        System.out.println("chega de nos enforcar!");
    }

    public static char getGuess (){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Chute uma letra");
        String newGuess = scanner.nextLine();
        while (newGuess.length() != 1 || !Character.isLetter(newGuess.charAt(0))){
            System.out.println("Insira uma única letra válida");
            newGuess = scanner.nextLine();
        }
        return newGuess.charAt(0);
    }

    public static String getWord (){
        String filePath = "words_ptbr.txt";
        String choice = new String();
        try {
            List<String> words = Files.readAllLines(Paths.get(filePath));
            Random random = new Random();
            choice = words.get(random.nextInt(words.size()));

        } catch (IOException e) {
            e.printStackTrace();
        }
        return choice.toLowerCase();
    }

    public static void display(String word, String correct) {
        for (char c : word.toCharArray()) {
            if (correct.contains(String.valueOf(c))) {
                System.out.printf("%s ", c);
            } else {
                System.out.print("_ ");
            }
        }
        System.out.println();
    }

    public static boolean checkGuess (String word, char guess){
        return word.contains(String.valueOf(guess));
    }

    public static boolean playAgain (){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Gostaria de continuar jogando (s / n)?");
        String ans = scanner.nextLine();
        while (ans.length() != 1 || (ans.toLowerCase().charAt(0)!='s' && ans.toLowerCase().charAt(0) != 'n')){
            System.out.println("insira s para continuar e n para parar");
            ans = scanner.nextLine();
        }
        return ans.contains("s");
    }

    public static void playRound (){
        String word = getWord();
        HashSet<Character> wordSet = new HashSet<>();
        for (char c : word.toCharArray()){
            wordSet.add(c);
        }
        StringBuilder correct = new StringBuilder();
        StringBuilder wrong = new StringBuilder();
        while (wrong.toString().length() < 8 && correct.toString().length() != wordSet.size()){
            System.out.printf("voce tem %s tentativas restantes%n", (8-wrong.length()));
            display(word, correct.toString());
            char newGuess = getGuess();
            while (correct.toString().contains(String.valueOf(newGuess)) || wrong.toString().contains(String.valueOf(newGuess))){
                System.out.printf("letras que voce ja tentou: %s%s%n", correct, wrong);
                newGuess = getGuess();
            }
            if (checkGuess(word, newGuess)){
                correct.append(newGuess);
            }else{
                wrong.append(newGuess);
            }
            System.out.println("==========================");
        }
        if(correct.length() == wordSet.size()){
            System.out.printf("Voce adivinhou a palavra %s!%n", word);
        }else{
            System.out.printf("Voce nao acertou a palavra %s!%n", word);
        }
    }
}