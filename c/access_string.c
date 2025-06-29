#include <stdio.h>
#include<string.h>
int main() 
{
    char ch[100];
    int i;
    printf("Enter a string: ");
    fgets(ch,sizeof(ch),stdin);
    printf("Enter an index: ");
    scanf("%d", &i);
    if(i >=0 && i < strlen(ch)) 
    {
        printf("The character index %d is %c\n",i,ch[i]);
    } 
    else 
    {
        printf("Index out of range.\n");
    }
    return 0;
}
