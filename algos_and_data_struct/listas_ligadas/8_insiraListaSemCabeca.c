#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_STRING_SIZE 11

typedef struct Node {
    char string[MAX_STRING_SIZE];
    struct Node *next;
} Node;


Node* criaLista () {
    char list[5][10] = {"Pedro", "Felipe", "Masanori", "Python", "Java"};
    Node *first = NULL;
    for (int i = 4; i >= 0; i--){
        Node *new = malloc(sizeof(Node));
        strncpy(new ->string, list[i], MAX_STRING_SIZE - 1);
        new->string[MAX_STRING_SIZE - 1] = '\0';
        new -> next = first;
        first = new;
    }
    return first;
}

void insert (Node *first, int index, char string[]){
    Node *current = first;
    int k = 0;
    while (current != NULL) {
        if (k == index - 1) {
            Node *new = malloc(sizeof(Node));
            strncpy(new -> string, string, MAX_STRING_SIZE-1);
            new -> string[MAX_STRING_SIZE-1] = '\0';
            new -> next = current -> next;
            current -> next = new;
        }
        current = current -> next;
        k ++;
    }
}

void printLista(Node *head) {
    Node *current = head;
    while (current != NULL) {
        printf("%s -> ", current->string);
        current = current->next;
    }
    printf("NULL\n");
}

void liberaLista (Node *head){
    Node *current = head;
    while (current != NULL){
        Node *temp = current;
        current = current -> next;
        free(temp);
    }
}

void main() {
    Node *first = criaLista();
    printLista(first);
    insert(first, 2, "Kotlin");
    printLista(first);
    liberaLista(first);
}