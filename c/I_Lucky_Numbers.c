#include<stdio.h>
int main()
{
    int r,n,q;
    printf("");
    scanf("%d",&n);
    r = n%10;
    q = n/10;
    
    if(r%q == 0 || q%r == 0)
    {
        printf("YES\n");
    }
    else
    {
        printf("NO");
    }
}