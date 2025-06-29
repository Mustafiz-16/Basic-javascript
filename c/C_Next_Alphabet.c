#include<stdio.h>
int main()
{
    char ch;
    printf("");
    scanf("%c",&ch);
    if(ch >= 'a'&& ch<= 'z')
    {
        if(ch=='z')
        {
            printf("a\n");
        }
        else
        {
            ch++;
            printf("%c\n",ch);
        }
    }

}