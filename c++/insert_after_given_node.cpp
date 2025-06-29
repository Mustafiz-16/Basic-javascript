#include <iostream>  

// Define a node structure  
struct Node {  
    int data;  
    Node* next;  
};  

// Function to display the linked list  
void displayLinkedList(Node* start) {  
    Node* current = start;  
    while (current != nullptr) {  
        std::cout << current->data << " ";  
        current = current->next;  
    }  
    std::cout << std::endl;  
}  

void deleteNode(Node*& start, Node* link[], int avail, int loc, int locp) {  
    // Step 1  
    if (locp == -1) {  
        start = link[start];  
    } else {  
        link[locp]->next = link[loc];  
    }  

    // Step 2  
    link[loc] = avail;  
    avail = loc;  

    // Step 3  
    // No need to do anything here as the function will return.  
}  

int main() {  
    const int MAX_NODES = 100; // Maximum number of nodes  
    Node* link[MAX_NODES]; // Array to store links between nodes  
    Node* start = nullptr; // Pointer to the start node  
    int avail = 0; // Index of available node  
    int loc = 5; // Index of the node to be deleted  
    int locp = 4; // Index of the node preceding the node to be deleted  

    // Initialize the link array  
    for (int i = 0; i < MAX_NODES; ++i) {  
        link[i] = nullptr;  
    }  

    // Create sample nodes  
    Node nodes[MAX_NODES];  
    for (int i = 0; i < MAX_NODES - 1; ++i) {  
        nodes[i].data = i;  
        nodes[i].next = &nodes[i + 1];  
    }  
    nodes[MAX_NODES - 1].data = MAX_NODES - 1;  
    nodes[MAX_NODES - 1].next = nullptr;  

    // Set initial values for start and avail  
    start = &nodes[0];  
    avail = MAX_NODES - 1;  

    // Display the linked list before deletion  
    std::cout << "Linked List before deletion: ";  
    displayLinkedList(start);  

    // Call the deleteNode function  
    deleteNode(start, link, avail, loc, locp);  

    // Display the linked list after deletion  
    std::cout << "Linked List after deleting node at location " << loc << ": ";  
    displayLinkedList(start);  

    return 0;  
}