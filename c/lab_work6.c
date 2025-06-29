#include<stdio.h>
int main()
{
    int i , j , sumofrows=0 , sumofcolum ; 
    int a[3][3]={{3,5,9}, {8,3,0},{6,8,5}};
    printf("The matrix elements are:\n");
    for(i = 0;i < 3; i++)
    {
        for(j = 0;j < 3; j++)
        {
            printf("%d ",a[i][j]);
        }
        printf("\n");
    }
    for(i = 0;i < 3; i++)
    {   sumofrows=0;
        for(j = 0;j < 3; j++)
        {
            sumofrows = sumofrows + a[i][j];
        }
        printf("sum of row %d: %d\n",i+1,sumofrows);
    }
    for(i = 0;i < 3; i++)
    {   sumofcolum=0;
        for(j = 0;j < 3; j++)
        {
            sumofcolum = sumofcolum + a[i][j];
        }
        printf("sum of colum %d: %d\n",i+1,sumofcolum);
    }
    
}