#include<bits/stdc++.h>
using namespace std;
void merge(int arr,int l_index,int mid,int h_index)
{
    int i,j,k;
    i = l_index;
    j = mid + 1;
    k = l_index;

    while(i <= mid && j<= h_index)
    {
        if(arr[i] <= arr[j])
        {
            int temp[k] = arr[i];
            

        }
    } 
}
