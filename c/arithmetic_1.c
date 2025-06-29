#include<stdio.h>
int main()
{
    int a,b,mod;
    printf("Enter two number:");
    scanf("%d %d",&a,&b);
    mod = a%b;
    printf("%d",mod);
    return 0;
}