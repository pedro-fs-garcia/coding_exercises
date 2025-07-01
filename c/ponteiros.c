#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void printAge(int age){
    printf("you are %d years old\n", age);
}


int main() {
    int age = 21;
    int *pAge = &age;

    printf("address of age: %p\n", &age);
    printf("value of pAge: %p\n", pAge);

    printf("value of age: %d\n", age);
    printf("value at stored address: %d\n", *pAge);
    return 0;
}

// gcc ponteiros.c -o ponteiros
// ./ponteiros
