#include <stdio.h>
#include <stdlib.h>

struct Node{
    int number;
    struct Node *next;
};

struct Node* inverte(struct Node *head) {
    if (head == NULL || head->next == NULL) {
        return head;
    }
    struct Node *prev = NULL;
    struct Node *current = head;
    struct Node *prox = NULL;
    while (current != NULL){
        prox = current -> next;
        current -> next = prev;
        prev = current;
        current = prox;
    }
    return prev;
}

void printLista(struct Node *head){
    struct Node *current = head;
    while (current != NULL){
        printf("%d ", current -> number);
        current = current -> next;
    }
}

void liberaLista (struct Node *head){
    struct Node *current = head;
    while (current != NULL){
        struct Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main() {
    struct Node *head = malloc(sizeof(struct Node));
    struct Node *current = head;
    for (int i = 1; i <= 10; i++){
        if (current -> number){
            struct Node *newNode = malloc(sizeof(struct Node));
            newNode -> number = i*i;
            newNode -> next = NULL;
            current -> next = newNode;
            current = current -> next;
        } else {
            current -> number = i*i;
        }
    }
    printLista(head);
    struct Node *inv = inverte(head);
    printLista(inv);
    liberaLista(inv);
}