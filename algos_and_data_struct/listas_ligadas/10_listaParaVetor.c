#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int number;
    struct Node *next;
} Node;

Node* criaLista(int len) {
    Node *head = malloc(sizeof(Node));
    while (len > 0) {
        Node* new = malloc(sizeof(Node));
        new -> number = len;
        new -> next = head -> next;
        head -> next = new;
        len --;
    }
    return head;
}

void liberaLista (Node *head) {
    Node *cur = head;
    while (cur != NULL){
        Node *temp = cur;
        cur = cur -> next;
        free(temp);
    }
}

void main() {
    int vetor[10];
    Node *head = criaLista(10);
    int index = 0;
    Node *cur = head -> next;
    while (index < 10) {
        vetor[index] = cur -> number;
        cur = cur -> next;
        index ++;
    }
    for (int i = 0; i < 10; i ++){
        printf("%d ", vetor[i]);
    }
    liberaLista(head);
}