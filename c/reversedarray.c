#include<stdio.h>
int main()
{
    int a[10] = {10, 20,30,40,50,60,70,80,90,100};
    int i;
    printf("orginal array\n");
    for(i=0;i<10;i++)
    {
        printf("%d ",a[i]);
    }
    printf("\nReversed array\n");
    for(i=9;i>=0;i--)
    {
        printf("%d ",a[i]);
    }

}