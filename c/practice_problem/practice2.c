#include<stdio.h>
int main()
{
    int n,s,sum,sub,multi;
    float division;


    printf("");
    scanf("%d %d",&n,&s);
    sum = n + s;
    printf("%d + %d = %d\n",n,s,sum);
    sub = n - s;
    printf("%d - %d = %d\n",n,s,sub);
    multi = n * s;
    printf("%d * %d = %d\n",n,s,multi);
    division = n*1.0 / s;
    printf("%d / %d = %.2f\n",n,s,division);
    

    
    
}