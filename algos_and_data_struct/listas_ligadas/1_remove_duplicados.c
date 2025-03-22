#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node {
    int data;
    struct Node* next;
};

int* criaVetorComDuplicatas(){
    int *vetor = (int*) malloc(10*sizeof(int)); 
    printf("endereço do vetor: %p\n", vetor);

    *vetor = 31;
    printf("\nendereço do primeiro elemento do vetor: %p\n", vetor);
    printf("valor armazenado no primeiro elemento do vetor: %d\n", *vetor);

    *(vetor + 1) = 42;
    printf("\nendereço do segundo elemento do vetor: %p\n", (vetor + 1));
    printf("valor armazenado no segundo elemento do vetor: %d\n", *(vetor + 1));
    
    *(vetor + 2) = 42;
    printf("\nendereço do terceiro elemento do vetor: %p\n", (vetor + 2));
    printf("valor armazenado no terceiro elemento do vetor: %d\n", *(vetor + 2));

    *(vetor + 3) = 98;
    printf("\nendereço do quartoo elemento do vetor: %p\n", (vetor + 3));
    printf("valor armazenado no  quarto elemento do vetor: %d\n", *(vetor + 3));

    *(vetor + 4) = 34;
    printf("endereço do quinto elemento do vetor: %p\n", (vetor + 4));
    printf("valor armazenado no quinto elemento do vetor: %d\n", *(vetor + 4));

    vetor[5] = 45;
    printf("endereço do sexto elemento do vetor: %p\n", (vetor + 5));
    printf("valor armazenado no sexto elemento do vetor: %d\n", *(vetor + 5));
    
    vetor[6] = 54;
    printf("endereço do setimo elemento do vetor: %p\n", &vetor[6]);
    printf("valor armazenado no setimo elemento do vetor: %d\n", vetor[6]);

    vetor[7] = 98;
    printf("endereço do oitavo elemento do vetor: %p\n", &vetor[7]);
    printf("valor armazenado no oitavo elemento do vetor: %d\n", vetor[7]);

    vetor[8] = 31;
    vetor[9] = 90;
    
    for (int i = 0; i < 10; i++){
        printf("%d ", vetor[i]);
    }
    printf("\n");
    // struct Node* head = malloc(sizeof(struct Node));
    return vetor;
};

void printVetor(int* vetor, int length){
    printf("\n[");
    for (int i = 0; i < length; i++) {
        printf("%d", vetor[i]);
        if (i < length - 1) {
            printf(", ");
        }
    }
    printf("]\n");
}


struct Node* criaListaComDuplicatas(int* vetor){

    struct Node* head = malloc(sizeof(struct Node));
    struct Node* current = head;

    current -> data = vetor[0];
    current -> next = malloc(sizeof(struct Node));
    current = current -> next;
    current -> data = vetor[1];

    return head;
};

void printLista(struct Node* head){
    struct Node* current = head;
    while (current != NULL){
        printf("valor armazenado: %d\n", current -> data);
        current = current -> next;
    };
};

void liberaLista(struct Node* head){
    struct Node* current = head;
    while (current != NULL){
        struct Node* temp = current;
        current = current -> next;
        free(temp);
    }
};


void main(){
    int* vetor = criaVetorComDuplicatas();
    printVetor(vetor, 10);
    
    struct Node* head = criaListaComDuplicatas(vetor);
    printLista(head);
    liberaLista(head);
    free(vetor);
}