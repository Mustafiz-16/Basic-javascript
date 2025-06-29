#include <stdio.h>
int binarySearch(int ar[], int n, int data) 
{
    int left,right,mid;
    left = 0;
    right = n - 1;
    while (left <= right) 
    {
        int mid = (left + right)/ 2;

        if (data == ar[mid])
        {
            return mid;
        }
        else if (data > ar[mid])
        {
            left = mid + 1;
        }
        else if (data < ar[mid])
        {
            right = mid - 1;
        }
    }
    return -1;
}
int main() 
{
    int ar[] = {5, 7, 9, 12, 15, 20, 24, 27, 33, 40, 50, 65, 72};
    int n = sizeof(ar)/sizeof(ar[0]);
    int data;
    printf("Enter a number to search for: ");
    scanf("%d",&data);
    int result = binarySearch(ar, n, data);
    if (result == -1)
    {
        printf("Number %d not found in the array\n", data);
    }
    else
    {
        printf("Number %d found at index %d\n", data,result);
    }
    return 0;
}
