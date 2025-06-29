#include <stdio.h>

void rotateByOne(int arr[], int size) {
    int temp = arr[0];
    for (int i = 0; i < size - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[size - 1] = temp;
}

void rotateLeft(int arr[], int size, int n) {
    for (int i = 0; i < n; i++) {
        rotateByOne(arr, size);
    }
}

int main() {
    int arr[] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
    int size = sizeof(arr) / sizeof(arr[0]);
    int n = 3;

    printf("Array before rotation:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }

    rotateLeft(arr, size, n);

    printf("\nArray after %d left rotations:\n", n);
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}