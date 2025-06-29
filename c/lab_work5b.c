#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(){
    int a[10], i , max, min;
    float avg;
    srand(time(NULL));
    for(i = 0;i < 10; i++)
    {
        a[i] = rand() % 101;
        printf("%d ",a[i]);
    }
    max = a[0];
    min = a[0];
    for(i = 1; i < 10; i++)
    {
        if(max < a[i])
        max = a[i];
    }
    printf("\nMaximum :%d\n",max);
    for(i = 1; i < 10; i++)
    {
        if(min > a[i])
        min = a[i];
    }
    printf("Minimum :%d\n",min);

   
}