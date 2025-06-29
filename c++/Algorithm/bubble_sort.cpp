#include <bits/stdc++.h>
using namespace std;
void bubblesort(int n, int arr[])
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
int main()
{
    int n;
    cout << "Enter the number of elements:";
    cin >> n;

    int arr[n];
    cout << "Enter the number of array:";
    for (int i = 0; i < n; i++)
    {
        // cout<<"Enter the number of array"<<i+1<<" : ";
        cin >> arr[i];
    }

    bubblesort(n, arr);

    cout << "Sorted Array: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}