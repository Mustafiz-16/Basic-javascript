#include <bits/stdc++.h>
using namespace std;

void insertionsort(int n, int arr[])
{

    for (int i = 1; i < n; i++) // unsorted
    {
        int temp = arr[i];
        int j = i - 1; // sorted index

        while (j >= 0 && arr[j] > temp)
        {
            arr[j + 1] = arr[j]; // move to the right sight
            j--;
        }
        arr[j + 1] = temp;
    }
}
int main()
{
    int n;
    cout << "Enter the number of elements:";
    cin >> n;

    int arr[n];
    //cout << "Enter the number of array:";
    for (int i = 0; i < n; i++)
    {
        cout<<"Enter the number of array"<<i+1<<" : ";
        cin >> arr[i];
    }

    insertionsort(n, arr);

    cout << "Sorted Array: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}