#include <bits/stdc++.h>
using namespace std;
void seletionsort(int n,int arr[])
{
    for(int i=0;i<n;i++)
    {
        int min = i; //minimum value select
        for(int j=i+1;j<n;j++)  
        {
            if(arr[j]<arr[min]) //other value less than minimum value than minimum value equal to other value            
            {
                min =j;

            }
            if(min != 0)
            {
                int temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }

        }
    }
}
int main()
{
    int n;
    cout<<"Enter the number of elements: ";
    cin>>n;

    int arr[n];
    for(int i=0;i<n;i++)
    {
        cout<<"Enter the number of array"<<i+1<<": ";
        cin>>arr[i];
    }

    seletionsort(n,arr);

    cout<<"sorted Array:";
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";

    }
    cout<<endl;
}
