
import java.util.NoSuchElementException;

public class DoublyLinkedList{
    public class Node {
        public int data;
        public Node next;
        public Node previous;

        public Node(int n){
            this.data = n;
            this.next = null;
            this.previous = null;
        }
    }

    public Node head;
    public Node tail;

    public DoublyLinkedList(){
        this.head = null;
        this.tail = null;
    }

    public void addFirst(int n){
        Node newNode = new Node(n);
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            head.previous = newNode;
            this.head = newNode;
        }
    }

    public void addLast(int n){
        Node newNode = new Node(n);
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.previous = this.tail;
            tail.next = newNode;
            this.tail = newNode;
        }
    }

    public int removeFirst(){
        if (this.head == null){
            throw new NoSuchElementException("empty list");
        }
        int remove = this.head.data;
        this.head = head.next;
        if (this.head != null){
            head.previous = null;
        }else{
            this.tail = null;
        }
        return remove;
    }

    public int removeLast(){
        if (this.head == null){
            throw new NoSuchElementException("empty list");
        }
        int remove = this.tail.data;
        this.tail = tail.previous;
        if (this.tail != null){
            this.tail.next = null;
        }else{
            this.head = null;
        }
        return remove;
    }

    public Boolean isEmpty(){
        return this.head == null;
    }

    public int size(){
        if (this.isEmpty()){
            return 0;
        }
        Node current = this.head;
        int count = 1;
        while (current.next != null){
            current = current.next;
            count ++;
        }
        return count;
    }

    public void print(){
        if (this.isEmpty()){
            System.out.println("empty list");
        }else{
            Node current = this.head;
            while (current != null){
                System.out.printf("%s, ", current.data);
                current = current.next;
            }
            System.out.println();
        }
    }

    public void drainOut(){
        this.head = null;
        this.tail = null;
    }

    public int get(int index){
        int count = 0;
        Node current = this.head;
        while (current != null){
            if (count == index){
                return current.data;
            }
            count += 1;
            current = current.next;
        }
        throw new IndexOutOfBoundsException("index out of bounds");
    }

    public boolean addToIndex(int n, int index){
        // add element to the index position
        // list must have at least one element;
        if (index < 0){
            System.out.println("index out of range");
            return false;
        }else if (index == 0 || this.isEmpty()){
            this.addFirst(n);
            return true;
        }
        int count = 0;
        Node current = this.head;
        Node newNode = new Node(n);
        while(current != null && count < index - 1){
            current = current.next;
            count ++;
        }
        if (current == null){
            System.out.println("index out of range");
            return false;
        }
        if(current.next == null){
            this.addLast(n);
            return true;
        }
        Node indexPlusOne = current.next;
        newNode.previous = current;
        newNode.next = indexPlusOne;
        indexPlusOne.previous = newNode;
        current.next = newNode;
        return true;
    }

    public boolean removeIndex(int index){
        if (this.head == null){
            System.out.println("{}");
            return false;
        }
        if (index < 0){
            System.out.println("index out of range");
            return false;
        }
        if (index == 0){
            this.removeFirst();
            return true;
        }
        int count = 0;
        Node current = this.head;
        while (current != null && count < index){
            current = current.next;
            count ++;
        }
        if (current == null){
            System.out.println("index out of range");
            return false;
        }
        if (current.next == null){
            this.removeLast();
            return true;
        }
        if (current.previous == null){
            this.removeFirst();
            return true;
        }
        Node indexMinusOne = current.previous;
        Node indexPlusOne = current.next;
        indexMinusOne.next = indexPlusOne;
        indexPlusOne.previous = indexMinusOne;
        return true;
    }

    public int peekFirst(){
        return this.head.data;
    }

    public int peekLast(){
        return this.tail.data;
    }
}