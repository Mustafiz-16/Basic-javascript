#include<stdio.h>
char capital_to_small(char ch1)
{
    if(ch1>='a'&& ch1<='z')
    {
        return ch1;
    }
}
int main()
{
    char ch1;
    scanf("%c",&ch1);
    char value  = capital_to_small(ch1);
    printf("%c",ch1-32);
}