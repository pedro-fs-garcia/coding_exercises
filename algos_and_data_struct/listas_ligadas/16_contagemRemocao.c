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

void removeIndex(Node *head, int index) {
    if (head == NULL || index < 0){
        return;
    }
    int k = 0;
    Node *prev = head;
    Node *current = head -> next;
    while (current != NULL) {
        if (k == index) {
            prev -> next = current -> next;
            free(current);
            break;
        }
        if (k > index) {
            break;
        }
        prev = current;
        current = current -> next;
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
    removeIndex(head, 0);
    printLista(head);
    liberaLista(head);
}