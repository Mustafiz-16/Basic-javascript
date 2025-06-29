#include <stdio.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    int n,m,gift,nogift;
    printf("");
    scanf("%d %d",&n,&m);
    gift = n/m;
    nogift =n%m;
    printf("%d %d",gift,nogift);
    return 0;
}




