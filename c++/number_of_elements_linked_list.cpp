#include <bits/stdc++.h>
using namespace std;
struct Node{
    int key;
    struct Node *next;
};
int countElements(Node *head)
{
    int count = 0;
    Node *current = head;
    while (current != NULL)
    {
        count++;
        current = current->next;
    }
    return count;
}
int main()
{
    Node *head = new Node();
    head->key = 4;
    
    Node *second = new Node();
    second->key = 9;
    head->next = second;

    Node *third = new Node();
    third->key = 2;
    second->next = third;
    third->next = NULL;

    int elementsCount = countElements(head);
    cout << "Number of elements in the linked list: " << elementsCount << endl;
    return 0;
}