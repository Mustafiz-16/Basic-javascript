#include <stdio.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n,a,i;
    printf("n:");
    scanf("%d",&n);
    a = n/5-4;
    for(i=a;i<a+10;i=i+2)
    {
        printf("%d ",i);
    }
    return 0;
}
