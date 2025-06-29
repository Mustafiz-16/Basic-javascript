#include<stdio.h>
int main()
{
    int i,j,transpose[3][3];
    int a[3][3]={{8,0,5},{6,3,6},{0,5,5}};
    printf("orginal matrix\n");
    for(i=0; i<3; i++)
    {
        for(j = 0; j < 3; j++)
        {
            printf("%d ",a[i][j]);
        }
        printf("\n");
    }
    for(i=0; i<3; i++)
    {
        for(j=0;j<3;j++)
        {
            transpose[j][i]=a[i][j];
        }
    }
    printf("transpose matrix");
    for(i=0; i<3; i++)
    {
        for(j = 0; j < 3; j++)
        {
            printf("%d ",transpose[i][j]);
        }
        printf("\n");
    }

}