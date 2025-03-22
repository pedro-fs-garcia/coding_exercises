// função malloc aloca memória heap conforme solicitação
// malloc recebe um número de bytes, aloca esse tamanho de memória no heap e retorna um ponteiro para esses bytes
#include <stdio.h>
#include <stdlib.h>

int main(){
    int *array = (int*) malloc(10 * sizeof(int)); // alocar memória para um array de 10 inteiros
    // 10 * sizeof(int) calcula o número total de bytes necessário para armazenar 10 inteiros.
    // (int*) faz o casting do ponteiro retornado por malloc para um ponteiro do tipo int.

    if (array == NULL){
        printf("Erro ao alocar memória!\n");
        return 1;
    }

    printf("endereço do array: %p\n", array);

    // agora vocÊ pode usar o ponteiro array como um array normal
    for (int i = 0; i < 10; i++) {
        array[i] = i * 2;
    }
    for (int i = 0; i<10; i++){
        printf("endereço do item: %p ", array + i);
        
        printf("- valor: %d ", *(array + i));
        printf("- valor: %d\n", array[i]);
    }
    printf("\n");

    // ao terminar de usar a memória alocada, deve-se liberar a memória
    free(array);
};

