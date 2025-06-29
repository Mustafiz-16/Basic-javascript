#include<stdio.h>
int main()
{
    int num, m, n, i, count = 0, totalprimenbr = 0; 
    printf("Enter lower limit: ");
    scanf("%d",&m);
    printf("Enter upper limit: ");
    scanf("%d",&n);
    
    printf("The prime numbers between %d and %d are:\n", m, n);
    for(num = m; num < n; num++)
    {   
        count = 0;
        for(i = 2; i < num; i++)
        {
            if(num % i == 0)
            {
                count = 1;
                break; 
            }
        }
        if(count == 0)
            {
                printf("%d ",num);
                totalprimenbr++;
            }
        
    }
    printf("\nThere are %d prime numbers between %d and %d.", totalprimenbr, m, n);   

}