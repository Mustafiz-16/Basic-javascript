#include<stdio.h>
int main()
{
    char ch1[100],ch2[100];
    scanf("%s %s",&ch1,&ch2);
    int i=0;
    while(1)
    {
        if(ch1[i]=='\0' && ch2[i]=='\0')
        {
            printf("same\n");
            break;
        }
        else if(ch1[i]=='\0')
        {
            printf("ch1 small\n");
            break;
        }
        else if(ch2[i]=='\0')
        {
            printf("ch2 small\n");
            break;
        }
        if(ch1[i]==ch2[i])
        {
            i++;
        }
        else if(ch1[i]<ch2[i])
        {
            printf("ch1 small\n");
            break;
        }
        else 
        {
            printf("ch2 small\n");
            break;
        }
    }
}