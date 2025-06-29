#include <stdio.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n,a,i;
    printf("");
    scanf("%d",&n);
    a = n/4-3;
    for(i=a;i<a+8;i=i+2)
    {
        printf("%d ",i);
    }
    return 0;
}
