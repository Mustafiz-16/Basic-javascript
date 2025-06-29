#include<stdio.h>
int main()
{
    int n;
    printf("n:");
    scanf("%d",&n);
    if(n >= 10000)
    {
        printf("Gucci Bag\n");
        if(n > 20000)
        {
            printf("gucci belt\n");
        }
        
    }
    else if(n >= 5000)
    { 
        printf("Levis Bag\n");

    }
    else
    {
        printf("something\n");
    }
}