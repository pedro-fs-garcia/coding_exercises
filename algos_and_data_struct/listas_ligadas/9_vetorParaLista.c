#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node {
    int number;
    struct Node *next;
};

struct Node* vetorParaLista(int vetor[], int length){
    struct Node *head = malloc(sizeof(struct Node));
    struct Node *current = head;
    int index = 0;
    while (index < length) {
        current -> number = vetor[index];
        if (length == 0){
            current -> next = NULL;
        } else{
            current -> next = malloc(sizeof(struct Node));
            current = current -> next;
        }
        index ++;
    };

    return head;
}

void printLista(struct Node *head){
    struct Node *current = head;
    while (current -> next != NULL){
        printf("%d ", current -> number);
        current = current -> next;
    }
}

void liberaLista(struct Node *head){
    struct Node *current = head;
    while (current -> next != NULL){
        struct Node *temp = current;
        current = current -> next;
        free(temp);
    }
}


void main() {
    int vetor[] = {31, 42, 42, 98, 34, 45, 54, 98, 31, 90};
    int length = sizeof(vetor)/sizeof(vetor[0]);

    struct Node *head = vetorParaLista(vetor, length);
    printLista(head);
    liberaLista(head);
}