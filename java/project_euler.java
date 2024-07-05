import java.util.*;

public class project_euler{
    public static void main(String[] args) {
        // System.out.println(largestPrimeFactor(13195));
        // System.out.println(largestPrimeFactor(60085147));
        // System.out.println(largestPalindromeProduct());
        // System.out.println(smallestMultiple20());
        // System.out.printf("a diferença das somas de quadras é %s%n", sumSquareDif());
        // System.out.println(nthPrime(10001));
        // System.out.println(specialPythagoreanTriplet());
        // System.out.println(summationOfPrimes(2000000));
        // System.out.println(highlyDivisibleTriangNumber(500));


    }

    public static int largestPrimeFactor(int n){
        List<Integer> factors = lista3b.fatoresPrimos(n);
        int largest = 0;
        for (int f : factors){
            if (f > largest){
                largest = f;
            }
        }
        return largest;
    }

    public static int largestPalindromeProduct(){
        int max = 0;
        for (int i=100; i< 1000; i++){
            for (int j=100; j<1000; j++){
                int s = i*j;
                if (s > max && lista11.palindrome(String.valueOf(s))){
                    max = s;
                }
            }
        }
        return max;
    }

    public static int mdc (int num1, int num2){
        int r;
        while ((num1 % num2) > 0){
            r = num1%num2;
            num1 = num2;
            num2 = r;
        }
        return num2;
    }

    public static int mmc (int a, int b){
        return a*(b/mdc(a, b));
    }

    public static int smallestMultiple20(){
        int n = 1;
        for (int i = 2; i<= 20; i++){
            n = mmc(n, i);
        }
        return n;
    }

    public static int sumSquareDif(){
        int squareOfSum = 0;
        int sumOfSquare = 0;
        for (int i=1; i<= 100; i++){
            sumOfSquare += i*i;
            squareOfSum += i;
        }
        squareOfSum = squareOfSum * squareOfSum;
        return sumOfSquare - squareOfSum;
    }

    public static int nthPrime(int n){
        int count = 0;
        int number = 1;
        while (count < n){
            number += 1;
            if (lista3b.primo(number)){
                count += 1;
            }
        }
        return number;
    }

    public static boolean pythagoreanTriplet (int a, int b, int c){
        boolean scale = false;
        boolean pythagorean = false;
        if (a < b && b < c){
            scale = true;
        }
        if (a*a + b*b == c*c){
            pythagorean = true;
        }
        return scale && pythagorean;
    }

    public static int specialPythagoreanTriplet (){
        for (int i=1; i<=1000; i++){
            for (int j=1; j<=1000; j++){
                int k = 1000-i-j;
                if (pythagoreanTriplet(i, j, k) && i+j+k == 1000){
                    return i*j*k;
                }
            }
        }
        return 0;
    }

    //10
    public static long summationOfPrimes(int n){
        int number = 2;
        long sum = 0l;
        while (number < n){
            if (lista3b.primo(number)){
                sum += number;
            }
            number += 1;
        }
        return sum;
    }

    //12
    public static int numberOfDivisors(long n) {
        int count = 0;
        long sqrt = (long) Math.sqrt(n);
        for (long i = 1; i <= sqrt; i++) {
            if (n % i == 0) {
                count += 2;
            }
        }
        if (sqrt * sqrt == n) {
            count--;
        }
        return count;
    }

    public static long highlyDivisibleTriangNumber(int d) {
        long n = 1;
        long triangle = 1;
        while (numberOfDivisors(triangle) <= d) {
            n++;
            triangle = n * (n + 1) / 2;
        }
        return triangle;
    }

    //14


}