#include<stdio.h>
int main()
{
    float sales, salary;
    while(1)
    {
        printf("Enter sales in dollars (-1 to end:)");
        scanf("%f",&sales);
        if(sales == -1)
        break;
        salary = 200 + sales * (9.0/100);
        printf("salary is $%.2f\n",salary);
    }
    return 0;
}