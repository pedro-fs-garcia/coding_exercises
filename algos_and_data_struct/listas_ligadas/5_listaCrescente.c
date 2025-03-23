#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int number;
    struct Node *next;
} Node;

Node* criaListaComCabeca(int len) {
    Node *head = malloc(sizeof(Node));
    while (len > 0) {
        Node *newNode = malloc(sizeof(Node));
        newNode -> number = len;
        newNode -> next = head -> next;
        head -> next = newNode;
        len --;
    }
    return head;
}

Node* criaListaSemCabeca(int len) {
    Node *current = NULL;
    while (len > 0) {
        Node *newNode = malloc(sizeof(Node));
        newNode -> number = len;
        newNode -> next = current;
        current = newNode;
        len--;
    }
    return current;
}

Node* buscaIterativa(Node *head, int valor) {
    Node *current = NULL;
    int index = 0;
    if (head == NULL){
        return NULL;
    }
    if (head -> number){
        current = head;
    }else{
        current = head -> next;
    }
    while (current != NULL) {
        if (current -> number == valor) {
            return current;
        }
        current = current -> next;
    }
    return NULL;
}

Node* buscaRecursiva(Node *head, int valor) {
    if (head == NULL) {
        return NULL;
    }
    if (head -> number == valor) {
        return head;
    }
    return buscaRecursiva(head -> next, valor);
}

void printLista(Node *head){
    Node *current = NULL;
    if (head -> number) {
        current = head;
    } else {
        current = head -> next;
    }
    while (current != NULL) {
        printf("%d ", current -> number);
        current = current -> next;
    }
}

void libertaLista(Node *head){
    Node *current = head;
    while (current != NULL){
        Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main() {
    Node *head = criaListaComCabeca(10);
    Node *first = criaListaSemCabeca(10);

    Node *resIt1 = buscaIterativa(head, 23);
    Node *resRec1 = buscaRecursiva(head, 3);

    Node *resIt2 = buscaIterativa(first, 8);
    Node *resRec2 = buscaRecursiva(first, 1);

    if (resIt1 == NULL){
        printf("Resultado da busca iterativa em lista com cabeça: NULL\n");
    }else{
        printf("Resultado da busca iterativa em lista com cabeça: %d\n", resIt1 -> number);
    }
    printf("Resultado da busca recursiva em lista com cabeça: %d\n", resRec1 -> number);

    printf("Resultado da busca iterativa em lista sem cabeça: %d\n", resIt2 -> number);
    printf("Resultado da busca recursiva em lista sem cabeça: %d\n", resRec2 -> number);

    libertaLista(head);
    libertaLista(first);
}