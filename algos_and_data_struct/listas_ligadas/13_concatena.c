#include <stdio.h>
#include <stdlib.h>

struct Node{
    int number;
    struct Node *next;
};

struct Node* concatena(struct Node *head1, struct Node *head2){
    struct Node *current = head1;
    while (current -> next != NULL){
        current = current -> next;
    }
    current -> next = head2;
    return head1;
}

void printLista(struct Node *head){
    struct Node *current = head;
    while (current != NULL){
        printf("%d ", current -> number);
        current = current -> next;
    }
    printf("\n");
}

void liberaLista(struct Node *head){
    struct Node *current = head;
    while (current != NULL){
        struct Node *temp = current;
        current = current -> next;
        printf("liberando %d\n", temp -> number);
        free(temp);
    }
}


void main(){
    struct Node *head1 = malloc(sizeof(struct Node));
    struct Node *current1 = head1;
    for (int i = 1; i < 10; i++){
        if (current1 -> number){
            struct Node *newNode = malloc(sizeof(struct Node));
            newNode -> number = i;
            newNode -> next = NULL;
            current1 -> next = newNode;
            current1 = current1 -> next;
        } else {
            current1 -> number = i;
        }
    }

    struct Node *head2 = malloc(sizeof(struct Node));
    struct Node *current2 = head2;
    for (int i = 1; i < 10; i++){
        if (current2 -> number) {
            struct Node *newNode = malloc(sizeof(struct Node));
            newNode -> number = i * 100;
            newNode -> next = NULL;
            current2 -> next = newNode;
            current2 = current2 -> next;
        }else {
            current2 -> number = i * 100;
        }
    }

    concatena(head1, head2);
    printLista(head1);
    liberaLista(head1);
}