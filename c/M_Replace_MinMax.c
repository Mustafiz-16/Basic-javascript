#include<stdio.h>
#include<limits.h>
int main()
{
    int n;
    scanf("%d",&n);
    int a[n];
    int min =INT_MAX,max = INT_MIN;
    int min_index,max_index;
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
        if(a[i]<min)
        {
            min=a[i];
            min_index=i;
        }
        else if(a[i]>max)
        {
            max=a[i];
            max_index=i;
        }
    }
    int temp=a[min_index];
    a[min_index] =a[max_index];
    a[max_index]=temp;
    for(int i=0;i<n;i++)
    {
        printf("%d ",a[i]);

    }
}