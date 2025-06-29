#include<stdio.h>
int main()
{
    int n;
    scanf("%d",&n);
    int ar[n+1];
    for(int i=0;i<n;i++)
    {
        scanf("%d ",&ar[i]);
    }
    int p,v;
    scanf("%d %d",&p,&v);
    for(int i=n;i>=p+1;i--)
    {
        ar[i]=ar[i-1];
    }
    ar[p]=v;
    for(int i=0;i<n+1;i++)
    {
        printf("%d ",ar[i]);
    }
}