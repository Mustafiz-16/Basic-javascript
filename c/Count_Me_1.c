#include <stdio.h>

int main() 
{
    int n;
    scanf("%d",&n);
    int ar[n],i;
    int count_1=0,count_2=0;
    for(i=0;i<n;i++)
    {
        scanf("%d",&ar[i]);
        if(ar[i]%2==0)
        {
            count_1++;
        }
        else if(ar[i]%3==0)
        {
            count_2++;
        }
    }
    printf("%d %d\n",count_1,count_2);
    return 0;
}
