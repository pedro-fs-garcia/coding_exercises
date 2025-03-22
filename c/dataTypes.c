#include <stdio.h>

int soma(int a, int b);
void dataTypes();
void pessoa();

int main(){
    printf("%d\n", soma(12, 3));
    dataTypes();
    pessoa();
    return 0;
}

int soma(int a, int b){
    int s = a + b;
    return s;
}

void dataTypes(){
    int i = -10;
    float f = 10.0;
    double d = 10.0;
    char c = 'C';
    char ch[] = "Hello";
    printf("int: %d - 2 ou 4 bytes, armazena números inteiros\n", i);
    printf("float: %f - 4 bytes, 6 a 7 dígitos decimais\n", f);
    printf("double: %lf - 8 bytes, 15 dígitos decimais\n", d);
    printf("char: %c - 1 byte, valores ASCII\n", c);
    printf("[]: %s - array de caracteres\n", ch);
    printf("---------------\n");

    short int sh = 100;
    long int lg = 1000000;
    int vetor[5] = {1, 2, 3, 4, 5};
    int matriz[2][3] = {{1, 2, 3}, {4, 5, 6}};
    printf("short int: %hd - 2 bytes, armazena números inteiros menores\n", sh);
    printf("long int: %ld - 4 ou 8 bytes, armazena números inteiros maiores\n", lg);
    printf("vetor: ");
    for (int j = 0; j < 5; j++) {
        printf("%d ", vetor[j]);
    }
    printf("- array de inteiros\n");
    printf("matriz: ");
    for (int j = 0; j < 2; j++) {
        for (int k = 0; k < 3; k++) {
            printf("%d ", matriz[j][k]);
        }
    }
    printf("- matriz de inteiros\n");
}

void pessoa(){
    struct Pessoa {
        char nome[10];
        int idade;
        float altura;
    };
    
    struct Pessoa p1 = {"Pedro", 27, 1.83};
    printf("Nome: %s, Idade: %d, Altura: %.2f\n", p1.nome, p1.idade, p1.altura);

}

void lista(){
    struct Node {
        int valor;
        struct Node* p;
    };
}