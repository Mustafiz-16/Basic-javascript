#include <bits/stdc++.h>
using namespace std;
int a[20][20], q[20] = {0}, visited[20] = {0}, n, i, j, f = 0, r = -1;
void bfs(int v) 
{
    for (i = 0; i < n; i++) {
        if (a[v][i] && visited[i] == 0)
            q[++r] = i;
    }
    if (f <= r) {
        visited[q[f]] = 1;
        bfs(q[f++]);
    }
}
int main() 
{
    int v;
    cout << "\n Enter the number of vertices: ";
    cin >> n;
    cout << "\n Enter graph data in matrix form: ";
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }
    cout << "Enter the starting vertex: ";
    cin >> v;
    bfs(v);
    cout << "\n The nodes which are reachable are:\n";
    for (i = 0; i < n; i++) {
        if (visited[i]) {
            cout << i << "\t";
        } else {
            cout << "BFS is not reachable. Not all nodes are reachable";
            break;
        }
    }
    return 0;
}
