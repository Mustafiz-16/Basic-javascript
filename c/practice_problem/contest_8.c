#include <stdio.h>
#include <math.h>
int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int n,r,y,z;
    printf("");
    scanf("%d",&n);
    if(n%3==0)
    {
        printf("%d",n);
    }
    if(n%3!=0)
    {
        r = n%3;
        if(r==0)
        {
            printf("%d",r);
        }
        else if(r==1)
        {
            y=(n-4)/3+2;
            printf("%d",y);
        }
        else if(r==2)
        {
            z = (n-2)/3+1;
            printf("%d",z);
        }
    }
    return 0;
}
