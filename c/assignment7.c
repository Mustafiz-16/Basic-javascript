#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void bubbleSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}

void bubbleSortImproved(int a[], int n) {
    int swapped;
    for (int i = 0; i < n - 1; i++) {
        swapped = 0;
        for (int j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                swapped = 1;
            }
        }
        if (swapped == 0) {
            break;
        }
    }
}

void selectionSort(int a[], int n) {
    int i, j, index_min;
    for (i = 0; i < n - 1; i++) {
        index_min = i;
        for (j = i + 1; j < n; j++) {
            if (a[j] < a[index_min]) {
                index_min = j;
            }
        }
        int temp = a[index_min];
        a[index_min] = a[i];
        a[i] = temp;
    }
}

int main() {
    int n = 50000;
    int a[n];
    srand(time(NULL));
    for (int i = 0; i < n; i++) {
        a[i] = rand() % 1000000;
    }

    clock_t start, end;
    double cpu_time_used;

    start = clock();
    bubbleSort(a, n);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Time required for Bubble Sort: %f seconds\n", cpu_time_used);

    start = clock();
    bubbleSortImproved(a, n);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Time required for Improved Bubble Sort: %f seconds\n", cpu_time_used);

    start = clock();
    selectionSort(a, n);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Time required for Selection Sort: %f seconds\n", cpu_time_used);

    return 0;
}