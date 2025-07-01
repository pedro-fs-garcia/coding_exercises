#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node {
    int value;
    struct Node* next; //ponteiro para o próximo Node
};

void criaLista(){
    struct Node* first = malloc(sizeof(struct Node));
    struct Node* second = malloc(sizeof(struct Node));
    struct Node* third = malloc(sizeof(struct Node));

    struct Node* head = first;

    first -> value = 100;
    first -> next = second;

    second -> value = 200;
    second -> next = third;

    third -> value = 300;
    third -> next = NULL;

    struct Node* current = head;
    int count = 0;
    while (current != NULL) {
        count += 1;
        printf("valor armazenado no node %d: %d\n", count, current -> value);
        current = current -> next;
    };

    free(first);
    free(second);
    free(third);
};

void criaListacomWhile(int len){
    if (len <= 0){
        return;
    }

    // cria a lista
    struct Node* current = malloc(sizeof(struct Node));
    struct Node* head = current;
    int index = 0;
    while (index < 10) {
        current -> value = index * 2;
        if (index == len-1){
            current -> next = NULL;
            break;
        }
        current -> next = malloc(sizeof(struct Node));
        current = current -> next;
        index += 1;
    };

    //imprime a lista
    struct Node* print = head;
    index = 0;
    while (print != NULL) {
        printf("Valor armazenado no índice %d: %d\n", index, print -> value);
        print = print -> next;
        index += 1;
    };

    // libera nodes da lista
    struct Node* libera = head;
    while (libera != NULL) {
        struct Node* temp = libera;
        libera = libera -> next;
        printf("Valor armazenado no node liberado : %d\n", temp -> value);
        free(temp);
    };
};


int main() {
    struct Node* head = NULL;
    struct Node first = {10, NULL};
    struct Node second = {20, NULL};
    struct Node third = {30, NULL};

    head = &first;
    first.next = &second;
    second.next = &third;

    printf("Endereço armazenado em head: %p\n", head); // valor armazenado em head, que é o Endereço de first
    printf("Endereço de first: %p\n", &first);         // Endereço da variavel first

    struct Node* current = head;  // current deve ser um ponteiro
    int count = 0;
    while (current != NULL) {
        count += 1;
        // pointer -> value    operador ->  acessa o valor da variável para a qual o ponteiro aponta
        printf("Valor armazenado no Node %d: %d\n", count, current -> value);
        current = current -> next;
    };

    criaLista();
    printf("\n");
    criaListacomWhile(10);

    int *p = malloc(sizeof(int));

    return 0;
}