#include<stdio.h>
int main()
{
    int n, row, col;
    printf("n = ");
    scanf("%d", &n);
    for (row = 0; row <= n; row++)
    {
        for (col = 0; col <= n-row; col++)
            printf("  ");
        for (col = 0; col <= row; col++)
            printf("%d ", col);
        for (col = row-1; col >= 0; col--)
            printf("%d ", col);
        printf("\n");    
    }
    for (row = n-1; row >= 0; row--)
    {
        for (col = 0; col <= n-row; col++)
            printf("  ");
        for (col = 0; col <= row; col++)
            printf("%d ", col);
        for (col = row-1; col >= 0; col--)
            printf("%d ", col);
        printf("\n");    
    }
}

