#include<stdio.h>
int main()
{
    int n;
    scanf("%d",&n);
    int a;
    int even=0,odd=0,positive=0,Negative =0;
    for(int i=1;i<=n;i++)
    {
        scanf("%d",&a);
        if(a%2==0)
        {
            even++;
        }
        else
        {
            odd++;
        }
        if (a>0)
        {
            positive++;
        }
        else if(a<0)
        {
            Negative++;
        }
    }
    printf("Even: %d\n",even);
    printf("Odd: %d\n",odd);
    printf("Positive: %d\n",positive);
    printf("Negative: %d\n",Negative);
}