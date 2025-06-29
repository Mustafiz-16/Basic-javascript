#include<stdio.h>
char small_to_capital(char ch1)
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
    char value  = small_to_capital(ch1);
    printf("%c",ch1-32);
}