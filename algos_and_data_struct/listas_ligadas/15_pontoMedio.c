// dois ponteiros, um anda de um em um e outro de dois em dois
// quando o segundo ponteiro chegar ao final da lista, o primeiro estará no meio

#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;


Node* criaListaComCabeca(int len) {
    Node *head = malloc(sizeof(Node));
    while (len > 0) {
        Node *newNode = malloc(sizeof(Node));
        newNode -> data = len;
        newNode -> next = head -> next;
        head -> next = newNode;
        len --;
    }
    return head;
}

Node* pontoMedio (Node *head) {
    Node *p1 = head;
    Node *p2 = head;
    while (p2 != NULL) {
        // ponteiro p2 anda a lista de 2 em 2
        p2 = p2 -> next;
        if (p2 != NULL){
            p2 = p2 -> next;
        }
        // ponteiro p1 anda a lista de 1 em 1
        p1 = p1 -> next;
    }
    return p1;
}

void printLista(Node *head) {
    Node *current = head -> next;
    while (current != NULL) {
        printf("%d, ", current -> data);
        current = current -> next;
    }
}



void liberaLista(Node *head){
    Node *current = head;
    while (current != NULL){
        Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main(){
    Node *head = criaListaComCabeca(6);
    printLista(head);
    printf("\n");
    Node *ptmedio = pontoMedio(head);
    printf("Ponto médio: %d\n", ptmedio -> data);
    liberaLista(head);
}