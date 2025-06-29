#include <stdio.h>
#include <math.h>

void decimal_to_binary();
void binary_to_decimal();


int main()
{
	int choice;

	printf("\tWelcome to Number Base Converter\n");
	printf("\t================================\n");

	do{
		printf("\n\n1. Decimal to Binary\n");
		printf("2. Binary to Decimal\n");
		printf("3. Exit\n");
		printf("\n\nEnter your choice: ");
		scanf("%d", &choice);
        printf("\n");

		switch(choice)
		{
			case 1:
            {   int d;
                printf("Enter a decimal number: ");
                scanf("%d", &d);
                decimal_to_binary(d);
                printf("\n");
                break;

            }
			case 2:
            {
                int b;
                printf("Enter a binary number: ");
                scanf("%d", &b);
                binary_to_decimal(b);
                printf("\n");
                break;
            }
			default:
				return 0;
		}
	} while(1);

	return 0;
}


void decimal_to_binary(int d)
{
	/// implement decimal_to_binary() here
    
    int binary[32];
    int i = 0;
    while (d > 0) {
        binary[i] = d % 2;
        d /= 2;
        i++;
    }
    printf("equivalent Binary number is: ");
    for (int j = i - 1; j >= 0; j--) 
    {
        printf("%d", binary[j]);
    }
}

void binary_to_decimal(int binary)
{
	/// implement binary_to_decimal() here
    
    int decimal = 0;
    int i = 0;
    while (binary > 0) {
        decimal += pow(2, i) * (binary % 10);
        binary /= 10;
        i++;
    }
    printf("Decimal equivalent: %d", decimal);
}