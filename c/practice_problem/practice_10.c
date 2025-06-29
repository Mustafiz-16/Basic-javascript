#include<stdio.h>
int main()
{
    int n,ans;
    printf("");
    scanf("%d",&n);
    ans = n/1000;
    
    if(ans%2==0)
    {
        printf("EVEN\n");
    }
    else
    {
        printf("ODD\n");
    }
}