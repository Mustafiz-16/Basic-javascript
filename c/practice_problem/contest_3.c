#include <stdio.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n,i,sum=0;
    printf("n");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        sum=sum + i;
    }
    printf("%d",sum);
    return 0;
}