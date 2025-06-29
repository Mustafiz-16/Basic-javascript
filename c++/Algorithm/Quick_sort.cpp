#include <bits/stdc++.h>
using namespace std;

int partition(int arr[], int l_index, int h_index)
{
    int pivot = arr[l_index];
    int i = l_index;
    int j = h_index;

    while (i < j)
    {
        while (arr[i] <= pivot)
        {
            i++;
        }
        while (arr[j] > pivot)
        {
            j--;
        }
        if (i < j)
        {
            swap(arr[i], arr[j]);
            // int temp = arr[i];
            // arr[i] = arr[j];
            // arr[j] = temp;
        }
    }
    swap(arr[l_index], arr[j]);
    return j;
}
void quicksort(int arr[], int l_index, int h_index)
{
    if (l_index < h_index)
    {
        int j = partition(arr, l_index, h_index);
        quicksort(arr, l_index, j - 1);
        quicksort(arr, j + 1, h_index);
    }
}
int main()
{
    int n;
    cout << "Enter the number of elements:";
    cin >> n;

    int arr[n];
    // cout << "Enter the number of array:";
    for (int i = 0; i < n; i++)
    {
        cout << "Enter the number of array" << i + 1 << " : ";
        cin >> arr[i];
    }
    quicksort(arr, 0, n - 1);

    cout << "Sorted Array: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}