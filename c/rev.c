#include<stdio.h>
int main()
{
    int ar[]={10,20,30,40,50,60,70,80,90,100};
    for(int i=(sizeof(ar)/sizeof(ar[0]))-1 ; i>=0; i--)
    {
        printf("%d ",ar[i]);
    }
    return 0;
}
