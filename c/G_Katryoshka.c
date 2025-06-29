#include<stdio.h>
int main()
{
    int n,m,k,l;
    printf("");
    scanf("%d %d %d",&n,&m,&k);
    if(n>0 && m>0 && k>0)
    {
        if(n==n-m && m==m-m && k==k-m)
        {
            printf("%d",m);
            m++;

        }
        else if(k==k-m && m==m-n)
        {
            if(k==m)
            {
                printf("%d",k);
                k++;
            }

        }
    }
    else if(n<=2 && k>0)
    {
        if(n ==k/2|| n==k*2 )
        {
            printf("%d",n);
            n++;
        }
    }
    else
    {
        printf("0");
    }
}