#include<stdio.h>
int main()
{
	int n,r,col;
	printf("enter n =");
	scanf("%d",&n);
	
	for(r=1;r<=n;r++)
	{
		for(col=1;col<n-r;col++)//space condition
		printf(" ");
		for(col=1;col<=r;col++)//printing character
		printf("%c",r+96);
		printf("\n");
	}
}