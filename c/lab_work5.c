#include<stdio.h>
int main(){
    int a[10], i, sum=0;
    for(i = 0; i < 10; i++)
    {
        printf("Enter a[%d]:",i+1);
        scanf("%d",&a[i]);
    }
    for(i = 0; i < 10; i++)
    {
        sum = sum + a[i];
    }
    printf("The sum is : %d\n",sum);
}