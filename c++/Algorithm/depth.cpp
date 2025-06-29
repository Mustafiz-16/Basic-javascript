#include <bits/stdc++.h>
using namespace std;

// void dfs(int);
int a[10][10], visited[10] = {0}, n;

void dfs(int i)
{
    // int j;
    cout << i << " "; // visited node

    visited[i] = 1; // if node is visited than declare 1

    for (int j = 0; j < n; j++)
    {
        if (a[i][j] == 1 && visited[j] == 0)
        {
            dfs(j);
        }
    }
}
int main()
{
    cout << "Enter the number of vertex:";
    cin >> n;
    cout << "Enter the Adjancy Matrix of this Graph:";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }
    cout<<"dfs traversal starting node from:";
    dfs(0);
    cout << endl;
}

