#include <iostream>
using namespace std;

const int MAXSTK = 100; // Define the maximum size of the stack

// Function to push an item onto the stack
void PUSH(int STACK[], int &TOP, int ITEM) {
    // Step 1: Check if the stack is already filled
    if (TOP == MAXSTK) {
        cout << "OVERFLOW" << endl;
        return;
    }

    // Step 2: Increase TOP by 1
    TOP += 1;

    // Step 3: Insert ITEM in the new TOP position
    STACK[TOP] = ITEM;

    // Step 4: Return (function ends here)
}

int main() {
    int STACK[MAXSTK + 1]; // Define the stack array
    int TOP = 0;           // Initialize TOP to 0 (stack is initially empty)

    // Push items onto the stack
    PUSH(STACK, TOP, 10);
    PUSH(STACK, TOP, 20);
    PUSH(STACK, TOP, 30);

    // Print the stack contents
    cout << "Stack contents: ";
    for (int i = 1; i <= TOP; i++) {
        cout << STACK[i] << " ";
    }
    cout << endl;

    // Try to push an item when the stack is full (for demonstration)
    TOP = MAXSTK; // Simulate a full stack
    PUSH(STACK, TOP, 40); // Should print "OVERFLOW"

    return 0;
}
