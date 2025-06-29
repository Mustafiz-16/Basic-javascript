#include<stdio.h>
#include<string.h>
int main()
{
    char ch[100001];
    fgets(ch,sizeof(ch),stdin);
    for(int i=0;i<strlen(ch);i++)
    {
        if(ch[i] >='a'&& ch[i]<='z')
        {
            printf("%c",ch[i]-32);
        }
        else if(ch[i]>='A'&& ch[i]<='Z')
        {
            printf("%c",ch[i]+32);
        }
        else if(ch[i]==',')
        {
            printf(" ");
        }
    }
}