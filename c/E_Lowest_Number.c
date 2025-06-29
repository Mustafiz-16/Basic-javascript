#include<stdio.h>
#include<limits.h>
int main()
{
    int n,i;
    scanf("%d",&n);
    int ar[n],min=INT_MAX,pos;
    for(int i=0;i<=n;i++)
    {
        scanf("%d",&ar[i]);
    }
    for(int i =0;i<=n;i++)
    {
       if(ar[i]<min)
       {
        min=ar[i];
        pos=i+1;
       }
       
    }
    printf("%d %d",min,pos); 
}