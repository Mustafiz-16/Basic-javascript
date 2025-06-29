#include <stdio.h>

#define MAX_N 100

int matrix[MAX_N][MAX_N];

int main() {
    int n;
    while (scanf("%d", &n) == 1 && n != 0) {
        int row_sums[MAX_N] = {0}, col_sums[MAX_N] = {0};
        int row_odd = -1, col_odd = -1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                scanf("%d", &matrix[i][j]);
                row_sums[i] += matrix[i][j];
                col_sums[j] += matrix[i][j];
            }
            if (row_sums[i] % 2 == 1) {
                row_odd = i;
            }
        }
        for (int j = 0; j < n; j++) {
            if (col_sums[j] % 2 == 1) {
                col_odd = j;
            }
        }
        if (row_odd == -1 && col_odd == -1) {
            printf("OK\n");
        } else if (row_odd != -1 && col_odd != -1) {
            printf("Change bit (%d,%d)\n", row_odd + 1, col_odd + 1);
        } else {
            printf("Corrupt\n");
        }
    }
    return 0;
}