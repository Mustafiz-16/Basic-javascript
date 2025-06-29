#include<stdio.h>
int main()
{
    int n;
    printf("Enter the number :");
    scanf("%d",&n);
    int ar[100];
    printf("Array elements :");
    for(int i = 0; i < n; i++)
    {
        scanf("%d",&ar[i]);
    }
    for(int i = 0; i < n - 1; i++)
    {
        int swap = 0;
        for(int j = 0; j < n - 1 - i; j++)
        {
            if(ar[j] > ar[j+1])
            {
                int temp = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] =  temp;
                swap = 1;
            }
        }
        if(swap==0)
        {
            break;
        }
    }
    printf("Sorted array :");
    for(int i = 0; i < n; i++)
    {
        printf("%d ",ar[i]);
    }
}
