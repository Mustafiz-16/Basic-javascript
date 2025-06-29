#include<math.h>
int main()
{
    double ax,ay,bx,by,cx,cy,area;
    printf("please enter the coordinate of the triangle:\n");
    printf("ax=");
    scanf("%lf",&ax);
    printf("ay=");
    scanf("%lf",&ay);
    printf("bx=");
    scanf("%lf",&bx);
    printf("by=");
    scanf("%lf",&by);
    printf("cx=");
    scanf("%lf",&cx);
    printf("cy=");
    scanf("%lf",&cy);

    area=fabs((ax*(by-cy)+bx*(cy-ay)+cx*(ay-by)))/2;

    printf("The area is:%lf square units",area);

    return 0;

}