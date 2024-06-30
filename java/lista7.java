

public class lista7{
    public static void main(String[] args) {
        System.out.println(A("Hi", 2)); // HiHi
        System.out.println(A("Hello", 3)); // HelloHelloHello
        System.out.println(A("Java", 5)); // JavaJavaJavaJavaJava
        System.out.println(B("Code")); // CCoCodCode
        System.out.println(B("abc"));  // aababc
        System.out.println(B("ab"));   // aab
        
        int[] nums1 = {1, 2, 9};
        int[] nums2 = {9, 9, 9, 9, 9};
        int[] nums3 = {1, 2, 3, 4, 5};
        System.out.println(C(nums1)); // 1
        System.out.println(C(nums2)); // 5
        System.out.println(C(nums3)); // 0
        int[] nums4 = {1, 2, 9, 3, 4};
        int[] nums5 = {1, 2, 3, 4, 9};
        int[] nums6 = {1, 2, 3, 4, 5};
        System.out.println(D(nums4)); // true
        System.out.println(D(nums5)); // false
        System.out.println(D(nums6)); // false
        System.out.println(E("Bob"));    // Hello Bob!
        System.out.println(E("Alice"));  // Hello Alice!
        System.out.println(E("X"));      // Hello X!
        System.out.println(G("Hello")); // lololo
        System.out.println(G("ab"));    // ababab
        System.out.println(G("Hi"));    // HiHiHi
        System.out.println(H("WooHoo"));     // Woo
        System.out.println(H("HelloThere")); // Hello
        System.out.println(H("abcdef"));     // abc
        System.out.println(I("Hello"));    // ell
        System.out.println(I("python"));   // ytho
        System.out.println(I("coding"));   // odin
        System.out.println(J("Hello"));    // lloHe
        System.out.println(J("Hi"));       // Hi
        System.out.println(J("Pedro"));
    }

    //     # A. multstring
    // # seja uma string s e um inteiro positivo n
    // # retorna uma string com n cópias da string original
    // # multstring('Hi', 2) -> 'HiHi'
    public static String A(String s, int n){
        return s.repeat(n);
    }

    // # B. string_splosion
    // # string_splosion('Code') -> 'CCoCodCode'
    // # string_splosion('abc') -> 'aababc'
    // # string_splosion('ab') -> 'aab'
    public static String B(String s){
        String str = "";
        for (int i=0; i<=s.length(); i++){
            str += s.substring(0,i);
        }
        return str;
    }

    // # C. array_count9
    // # conta quantas vezes aparece o 9 numa lista nums
    public static int C(int[] nums){
        int count = 0;
        for (int n : nums){
            if(n == 9){
                count += 1;
            }
        }
        return count;
    }

    // # D. array_front9
    // # verifica se pelo menos um dos quatro primeiros é nove
    // # array_front9([1, 2, 9, 3, 4]) -> True
    // # array_front9([1, 2, 3, 4, 9]) -> False
    // # array_front9([1, 2, 3, 4, 5]) -> False
    public static boolean D(int[] nums){
        if (nums.length >= 4){
            for (int i=0; i<4; i++){
                if(nums[i] == 9){
                    return true;
                }
            }
        }else{
            for (int i=0; i<nums.length; i++){
                if (nums[i] == 9){
                    return true;
                }
            }
        }
        return false;
    }


    // # E. hello_name
    // # seja uma string name
    // # hello_name('Bob') -> 'Hello Bob!'
    // # hello_name('Alice') -> 'Hello Alice!'
    // # hello_name('X') -> 'Hello X!'
    public static String E(String name){
        return "Hello " + name + "!";
    }

    // # F. make_tags
    // # make_tags('i', 'Yay'), '<i>Yay</i>'
    // # make_tags('i', 'Hello'), '<i>Hello</i>'
    // # make_tags('cite', 'Yay'), '<cite>Yay</cite>'


    // # G. extra_end
    // # seja um string s com no mínimo duas letras
    // # retorna três vezes as duas últimas letras
    // # extra_end('Hello'), 'lololo'
    // # extra_end('ab'), 'ababab'
    // # extra_end('Hi'), 'HiHiHi'  
    public static String G(String s){
        return s.substring(s.length() - 2).repeat(3);
    }


    // # H. first_half
    // # seja uma string s
    // # retorna a primeira metade da string
    // # first_half('WooHoo') -> 'Woo'
    // # first_half('HelloThere') -> 'Hello'
    // # first_half('abcdef') -> 'abc'
    public static String H(String s){
        return s.substring(0, s.length()/2);
    }

    // # I. sem_pontas
    // # seja uma string s de pelo menos dois caracteres
    // # retorna uma string sem o primeiro e último caracter
    // # without_end('Hello') -> 'ell'
    // # without_end('python') -> 'ytho'
    // # without_end('coding') -> 'odin'
    public static String I(String s){
        return s.substring(1, s.length()-1);
    }

    // # J. roda2
    // # rodar uma string s duas posições
    // # a string possui pelo menos 2 caracteres
    // # left2('Hello') -> 'lloHe'
    // # left2('Hi') -> 'Hi'
    public static String J(String s){
        return s.substring(2) + s.substring(0, 2);
    }
}