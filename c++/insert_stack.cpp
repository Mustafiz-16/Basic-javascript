#include <iostream>
using namespace std;  
#define MAXSTK 100   
void push(int stack[], int& top, int item) 
{   
    if (top == MAXSTK) 
    {  
        cout << "OVERFLOW" << endl;  
        return;  
    }   
    top++;    
    stack[top] = item;  
}  
int main() 
{  
    int stack[MAXSTK] = {0}; // Stack array  
    int top = -1; // Initialize top of stack  

    // Push some items onto the stack  
    push(stack, top, 10);  
    push(stack, top, 20);  
    push(stack, top, 30);  
    push(stack, top, 40);  

    // Display the stack after pushing items  
    cout << "Stack after pushing items: ";  
    for (int i = 0; i <= top; i++) {  
        cout << stack[i] << " ";  
    }  
    cout << endl;  

    return 0;  
}  