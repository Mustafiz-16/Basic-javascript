#include <stdio.h>

int is_perfect( int n) {   
    int sum = 0;
    for (int i = 1; i < n; i++) {
        if (n % i == 0) {
            sum = sum + i;
        }
    }
    return sum == n;
}

int main() {
    printf("Perfect numbers between 1 and 10000:\n");
    for (int i = 1; i <= 1000; i++) {
        if (is_perfect(i)) {
            printf("%d = 1", i);
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    printf(" + %d", j);
                }
            }
            printf("\n");
        }
    }
    return 0;
}