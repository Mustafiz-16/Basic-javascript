#include<stdio.h>
int main()
{
    int a1,a2,sum;
    float average;
    printf("enter two number:");
    scanf("%d %d",&a1,&a2);

    sum = a1 + a2;
    printf("the sum is: %d\n",sum);
    average= (float) sum/2; //type casting
    printf("the average is = %.2f\n",average);
    return 0;
}