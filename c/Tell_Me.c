#include <stdio.h>
int main() 
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int T;
    scanf("%d",&T);
    int n;
    scanf("%d",&n);
    int ar[n],x,i;
    for(int i=0;i<n;i++)
    {
        scanf("%d ",&ar[i]);
        //scanf("%d\n",&x);
    }
    scanf("%d\n",&x);
    if(ar[i]==x)
    {
        printf("YES");
    }
    else
    {
        printf("NO");
    }
    return 0;
}