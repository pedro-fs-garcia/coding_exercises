#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <inttypes.h>

struct Person {
    char nome[10];
    uint8_t age;
    uint8_t height;
};

void main() {
    struct Person person;
    strcpy(person.nome, "Pedro");
    person.age = 27;
    person.height = 183;

    printf("Endereço: %x\n", &person);

    return;
}
