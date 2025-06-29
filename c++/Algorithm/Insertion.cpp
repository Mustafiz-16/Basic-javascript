#include <bits/stdc++.h>
using namespace std;
void insertionSort(int arr[], int n) 
{
    int i, key, j;
    for (i = 1; i < n; i++) 
    {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) 
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
void printArray(int arr[], int n) 
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main() 
{
    int i, N, arr[300];
    cout << "Enter the number of elements: "<< endl;
    cin >> N;
    cout << "Enter the values: " << endl;
    for (i = 0; i < N; i++) 
    {
        cin >> arr[i];
    }
    insertionSort(arr, N);
    cout << "The sorted array is: ";
    printArray(arr, N);
    return 0;
}
