#include <stdio.h>
int main() 
{
    int ar[] = {10, 2, 30, 15, 28, 5};
    int n = sizeof(ar) / sizeof(ar[0]);
    int data;
    int found = 0;
    printf("Enter a number to search for: ");
    scanf("%d", &data);
    for (int i = 0; i < n; i++) 
    {
        if (data == ar[i]) 
        {
            printf("Number %d found at index %d\n", data, i);
            found = 1;
            break;
        }
    }
    if (found == 0) 
    {
        printf("Number %d not found in the array\n", data);
    }
    return 0;
}