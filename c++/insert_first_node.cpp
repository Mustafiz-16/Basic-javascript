#include<bits/stdc++.h>
using namespace std;
struct Node {
    int data;
    struct Node* next;
};
struct Node* insertFirst(struct Node* head, int new_data ) {
    struct Node* ptr = (struct Node*)malloc(sizeof(struct Node));
    ptr->next = head;
    ptr->data = new_data;
    return ptr;
}
void printList(struct Node* head) {
    struct Node* current = head;
    while (current != NULL) 
    {
        cout <<current->data<<" ";
        current = current->next;
    }
    cout<<endl;
}
int main() 
{
    struct Node* head = NULL;

    head = insertFirst(head, 5);
    head = insertFirst(head, 3);
    head = insertFirst(head, 5);
    head = insertFirst(head, 2);

    cout<<"linked list before inserting node at the First: ";
    printList(head);

    cout<<"Inserting 7 at the beginning of the linked list."<< endl;
    head = insertFirst(head,7);

    cout<<"LinKed List after inserting node at the First: ";
    printList(head);

    return 0;
}
