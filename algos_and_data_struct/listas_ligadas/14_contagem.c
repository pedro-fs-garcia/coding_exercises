#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int number;
    struct Node *next;
} Node;

Node* criaListaSemCabeca(int len) {
    if (len <= 0) {
        return NULL;
    }
    Node *current = NULL;
    while (len > 0) {
        Node *newNode = malloc(sizeof(Node));
        newNode -> number = len;
        newNode -> next = current;
        current = newNode;
        len --;
    }
    return current;
}

Node* criaListaComCabeca(int len){
    Node *head = malloc(sizeof(Node));
    for (int i = len; i > 0; i--) {
        Node *newNode = malloc(sizeof(Node));
        newNode -> number = i;
        newNode -> next = head -> next;
        head -> next = newNode;
    }
    return head;
}

int contaListaComCabeca (Node *head){
    int count = 0;
    Node *current = head -> next;
    while (current != NULL){
        count ++;
        current = current -> next;
    }
    return count;
}

int contaListasemCabeca(Node *head){
    int count = 0;
    Node *current = head;
    while (current != NULL) {
        count ++;
        current = current -> next;
    }
    return count;
}

void printListaComCabeca(Node *head){
    Node *current = head -> next;
    while (current != NULL) {
        printf("%d ", current -> number);
        current = current -> next;
    }
    printf("\n");
}

void printListaSemCabeca(Node *first){
    Node *current = first;
    while (current != NULL){
        printf("%d ", current -> number);
        current = current -> next;
    }
    printf("\n");
}

void liberaLista(Node *head){
    Node *current = head;
    while (current != NULL) {
        Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main() {
    Node *head1 = criaListaSemCabeca(12);
    Node *head2 = criaListaComCabeca(11);
    printListaSemCabeca(head1);
    printListaComCabeca(head2);
    int count1 = contaListasemCabeca(head1);
    int count2 = contaListaComCabeca(head2);
    printf("comprimento da lista 1: %d\n", count1);
    printf("comprimento da lista 2: %d\n", count2);

    liberaLista(head1);
    liberaLista(head2);
}