#include <stdio.h>
#include <math.h>
int main()
{

    float a, b, c, d, x1, x2, real, imagin; 
    printf("a:");
    scanf("%f", &a);
    printf("b:");
    scanf("%f", &b);
    printf("c:");
    scanf("%f", &c);

    printf("Equation:%.0fx^2%+.0fx+%.0f=0\n", a, b, c);

    d = b * b - 4 * a * c;

    if (d > 0)
    {
        x1 = -b + sqrt(d) / (2 * a);
        x2 = -b - sqrt(d) / (2 * a);
        printf("solution:\n");
        printf("x1 = %.2f\n", x1);
        printf("x2 = %.2f\n", x2);
    }
    else if (d == 0)
    {
        x1 = -b / (2 * a);
        x2 = -b / (2 * a);
        printf("solution:\n");
        printf("x1 = %.2f\n", x1);
        printf("x2 = %.2f\n", x2);
    }
    else
    {
        real = -b / (2 * a);
        imagin = sqrt(-d) / (2 * a);
        printf("solution:\n");
        printf("x1 = %.2f + %.2fi\n", real, imagin);
        printf("x2 = %.2f - %.2fi\n", real, imagin);
    }
}