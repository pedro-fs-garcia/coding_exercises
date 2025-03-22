#include <stdio.h>
#include <stdlib.h>

struct Node{
    int number;
    struct Node *next;
};

struct Node* vetorParalista(int vetor[], int length){
    struct Node *head = malloc(sizeof(struct Node));
    struct Node *current = head;
    for (int i = 0; i < length; i++){
        struct Node *newNode = malloc(sizeof(struct Node));
        newNode -> number = vetor[i];
        current -> next = newNode;
        current = current -> next;
    }
    return head;
}

void printLista(struct Node *head){
    struct Node *current = head -> next;
    while (current != NULL){
        printf("%d ", current -> number);
        current = current -> next;
    }
}

int minimo (struct Node *head){
    struct Node *current = head -> next;
    int min = current -> number;
    while (current != NULL){
        if (current -> number < min){
            min = current -> number;
        }
        current = current -> next;
    }
    return min;
}

int minimo_recursivo(struct Node *current){
    if (current -> next == NULL){
        return current -> number;
    }
    if (current -> number < minimo_recursivo(current -> next)){
        return current -> number;
    } else {
        return minimo_recursivo(current -> next);
    }
}

void liberaLista(struct Node *head){
    struct Node *current = head;
    while (current != NULL){
        struct Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main(){
    int vetor[] = {31, 42, 42, 98, 34, 45, 54, 98, 3, 31, 90};
    int length = sizeof(vetor)/sizeof(vetor[0]);
    printf("\ntamanho do vetor: %d\n", length);

    struct Node *head = vetorParalista(vetor, length);
    printLista(head);
    printf("\nvalor mínimo: %d\n", minimo(head));
    printf("valor minimo por recursao: %d\n", minimo_recursivo(head -> next));
    liberaLista(head);
}