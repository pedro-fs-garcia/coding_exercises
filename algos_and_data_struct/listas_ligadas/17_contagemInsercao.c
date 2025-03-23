#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int number;
    struct Node *next;
} Node;


Node* criaLista (int len) {
    Node *head = malloc(sizeof(Node));
    while (len > 0) {
        Node *new = malloc(sizeof(Node));
        new -> number = len;
        new -> next = head -> next;
        head -> next = new;
        len --;
    }
    return head;
}

Node* insertIndex(Node *head, int index, int value){
    if (head == NULL || index < 0) {
        return NULL;
    }
    Node *current = head -> next;
    int k = 0;
    while(current != NULL) {
        if (k == index) {
            Node *new = malloc(sizeof(Node));
            new -> number = value;
            new -> next = current -> next;
            current -> next = new;
            return new;
        }
        current = current -> next;
        k++;
    }
}

int busca(Node *head, Node *node) {
    int k = 0;
    Node *cur = head -> next;
    while (cur != NULL){
        if (cur == node){
            return k;
        }
        cur = cur -> next;
        k ++;
    }
}

void printLista(Node *head){
    Node *current = head -> next;
    while (current != NULL) {
        printf("%d, ", current -> number);
        current = current -> next;
    }
    printf("\n");
}

void liberaLista(Node *head) {
    Node *current = head;
    while (current != NULL) {
        Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main(){
    Node *head = criaLista(10);
    printLista(head);
    Node *new = insertIndex(head, 9, 42);
    printLista(head);
    printf("%p\n", new);
    int index = busca(head, new);
    printf("indice do node buscado: %d\n", index);
    liberaLista(head);
}