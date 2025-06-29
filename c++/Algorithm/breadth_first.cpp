#include <bits/stdc++.h>
using namespace std;
int a[10][10], q[] = {}, visited[10] = {0}, n, f = 0, r = -1;
void bfs(int v)
{
    for (int i = 0; i < n; i++)
    {
        if (a[v][i] && visited[i] == 0)
        {
            q[++r] = i;
        }
    }
    if (f <= r)
    {
        visited[q[f]] = 1;
        bfs(q[f++]);
    }
}
int main()
{
    int v;
    cout << "Enter the number of vertex:";
    cin >> n;
    cout << "Enter the number of adjancecy matrix:";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }
    cout << "Enter the starting vertex:";
    cin >> v;
    bfs(v);
    cout << "The nodes which are recheable:";
    for (int i = 0; i < n; i++)
    {
        if (visited[i])
        {
            cout << i<<"  ";
        }
        else
        {
            cout << "Bfs is not recheable.Not all nodes are recheable";
            break;
        }
    }
}