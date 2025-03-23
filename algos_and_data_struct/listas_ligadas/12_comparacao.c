#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int number;
    struct Node *next;
} Node;

Node* criaListaSemCabeca(int min, int max) {
    if (max <= 0 || min <= 0 || max < min){
        return NULL;
    }
    Node *current = NULL;
    while (max >= min) {
        Node *newNode = malloc(sizeof(Node));
        newNode -> number = max * 11;
        newNode -> next = current;
        current = newNode;
        max --;
    }
    return current;
}

int comparaListas(Node *head1, Node *head2) {
    Node *current1 = head1;
    Node *current2 = head2;
    while (current1 != NULL && current2 != NULL) {
        if (current1->number != current2->number) {
            return 0;
        }
        current1 = current1->next;
        current2 = current2->next;
    }
    if (current1 != NULL || current2 != NULL) {
        return 0;
    }
    return 1;
}

void printLista(Node *head){
    Node *current = head;
    while (current != NULL){
        printf("%d ", current -> number);
        current = current -> next;
    }
    printf("\n");
}

void liberaLista (Node *head) {
    Node *current = head;
    while (current != NULL) {
        Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main() {
    Node *head1 = criaListaSemCabeca(1, 10);
    Node *head2 = criaListaSemCabeca(1, 10);

    printLista(head1);
    printLista(head2);

    int compara = comparaListas(head1, head2);
    if (compara) {
        printf("As listas são iguais\n");
    }else {
        printf("As listas não são iguais\n");
    }

    liberaLista(head1);
    liberaLista(head2);

}