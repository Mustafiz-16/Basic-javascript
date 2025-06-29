#include<stdio.h>
int main()
{
    int n;
    printf("");
    scanf("%d",&n);
    if(n>0)
    {
        printf("positive");
    }
    else if(n<0)
    {
        printf("Negative");
    }
    else
    {
        printf("zero");
    }

}