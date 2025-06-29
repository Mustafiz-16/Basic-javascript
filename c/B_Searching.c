#include<stdio.h>
int main()
{
    int n;
    scanf("%d",&n);
    int ar[n],x;

    for(int i=0;i<n;i++)
    {
        scanf("%d ",&ar[i]);
    }
    scanf("%d",&x);
    int ans=-1;
    for(int i=0;i<n;i++)
    {
        if(ar[i]==x)
        {
            ans=i;
            break;

        }
    }
    printf("%d\n",ans);
}