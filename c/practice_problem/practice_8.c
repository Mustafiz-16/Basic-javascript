#include<stdio.h>
int main()
{
    char a;
    printf("");
    scanf("%c",&a);
    if(a>=97 && a<=122)
    {
        int ans = a-32;
        printf("%c",ans);
    }
    else if (a>=65 && a<=90)
    {
        int ans = a+32;
        printf("%c",ans);
    }
    return 0; 
}