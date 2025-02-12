class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.head: None|Node = None
        self.tail = self.head
        self.length = 0

    def __len__(self):
        return self.length
    
    def peek(self):
        return self.head.value if self.head else None

    def enqueue(self, value):
        newNode = Node(value)
        self.length += 1
        if not self.head:
            self.head = newNode
            self.tail = self.head
        else:
            self.tail.next = newNode
            self.tail = newNode
    
    def deque(self):
        if self.head:
            head = self.head
            self.head = self.head.next
            self.length -= 1
            if self.head is None:
                self.tail = None
            head.next = None
            return head.value
        return None
    
class Stack:
    def __init__(self):
        self.head:None|Node = None
        self.length = 0
    
    def __len__(self):
        return self.length
    
    def add(self, value):
        newNode = Node(value)
        if not self.head:
            self.head = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        self.length += 1
        return
    
    def pop(self):
        if self.head:
            head = self.head
            self.head = self.head.next
            self.length -= 1
            head.next = None
            return head.value
        return None
        
    def peek(self):
        return (self.head.value if self.head else None)

class SinglyLinkedList:
    def __init__(self):
        self.head: None|Node = None
        self.tail = self.head
        self.length = 0

    def display(self):
        if not self.head:
            return None
        current = self.head
        while current:
            print(current.value, end = " ")
            current = current.next
        print()

    def append(self, value):
        newNode = Node(value)
        if not self.head:
            self.head, self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
    
    def get (self, index):
        current = self.head
        if index >= self.length or index < 0:
            raise IndexError("Index out of bounds")
        for i in range(index):
            current = current.next
        return current.value