#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* next;
};
void deletenode(Node*& start, Node*& avail, Node* locp, Node* loc) 
{
    if (locp == nullptr) 
    {
        start = loc->next;
    }
    else 
    {
        locp->next = loc->next;
    }
    loc->next = avail;
    avail = loc;
}
// Function to add a node at the beginning (for testing purposes)
void addNode(Node*& start, int data) 
{
    Node* newNode = new Node;
    newNode->data = data;
    newNode->next = start;
    start = newNode;
}

// Function to print the linked list
void printList(Node* start) 
{
    Node* temp = start;
    while (temp != nullptr) 
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}

int main() 
{
    // Initialize the linked list and avail list
    Node* start = nullptr;
    Node* avail = nullptr;

    // Add some nodes to the list
    addNode(start, 10);
    addNode(start, 20);
    addNode(start, 30);
    addNode(start, 40);

    cout << "Original List: ";
    printList(start);

    // Node to be deleted (for testing purposes)
    Node* loc = start->next;       // Deleting the second node (20)
    Node* locp = start;            // Preceding node of loc (40)

    // Delete the node
    deletenode(start, avail, locp, loc);

    cout << "List after deletion: ";
    printList(start);

    // Print the avail list
    cout << "Avail List: ";
    printList(avail);

    return 0;
}
