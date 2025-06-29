#include <bits/stdc++.h>
using namespace std;
struct Node{
    int key;
    struct Node *next;
};
bool search(struct Node *head, int x)
{
    struct Node *current = head;
    while (current != NULL)
    {
        if (current->key == x)
            return true;
        current = current->next;
    }
    return false;
}
int main()
{
    struct Node *head = new Node();
    head->key = 7;

    struct Node *second = new Node();
    second->key = 5;
    head->next = second;

    struct Node *third = new Node();
    third->key = 6;
    second->next = third;
    third->next = NULL;

    int target = 6;
    if (search(head, target))
    {
        cout << "Element " << target << " found in the linked list." << endl;
    }
    else
    {
        cout << "Element " << target << " not found in the linked list." << endl;
    }
    return 0;
}