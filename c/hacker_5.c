//5
//10 20 30 40 50
//1 100
//50 40 30 100 10

#include <stdio.h>
int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n;
    scanf("%d",&n);
    int ar[n];
    for(int i=0;i<n;i++)
    {
        scanf("%d ",&ar[i]);
    }
    int x,v;
    scanf("%d %d",&x,&v);
    //for(int i=0;i<n;i++)
    {
        //ar[x]=v;
        //printf("%d ",ar[i]);
    }
    
    for(int i=n-1;i>=0;i--)
    {
        ar[x]=v;
        printf("%d ",ar[i]);
    }
    return 0;
}

