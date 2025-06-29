#include<stdio.h>
#include<stdlib.h>
#include<math.h>
int main()
{
    int a[5],i,larg1,larg2,temp;
    srand(time(NULL));
    for(i=0;i<5;i++)
    {
        a[i]=(rand() % 100);
        printf("%d ",a[i]);
    }
    larg1 =a[0];
    larg2 =a[1];
    if(larg1<larg2);
    {
        temp=larg1;
        larg1=larg2;
        larg2=temp;
    }
    for(i=2;i<5;i++)
    {
        if(a[i]>larg1)
        {
            larg2=larg1;
            larg1=a[1];
        }
        else if(a[i]>=larg2)
        {
            larg2=a[i];
        }
    }
    printf("\n%d is the first largest\n",larg1);
    printf("\n%d is the second largest\n",larg2);

}