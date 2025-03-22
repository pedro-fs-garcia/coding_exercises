#include <stdio.h>

void f1(char hello[]){
    printf("from f1: %d\n", &hello); // imprime o endereço em que a variável foi armazenada na memória
}

void main() {
    char hello[] = "Hello World!";
    printf("from main: %d\n", &hello);
    f1(hello);
    // serão impressos dois endereços distintos, pois a variável é duplicada a cada função que passa
    return;
}