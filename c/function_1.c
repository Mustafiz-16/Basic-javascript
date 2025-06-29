#include<stdio.h>
int char_to_ascii(char ch1)
{
    if(ch1 >='a'&& ch1<='z')
    {
        return ch1;
    }
    if(ch1>='A' && ch1 <='Z')
    {
        return ch1;
    }

}
int main()
{
    char ch1;
    scanf("%c",&ch1);
    int value = char_to_ascii(ch1);
    
    printf("%d\n",value);
    return 0;
}