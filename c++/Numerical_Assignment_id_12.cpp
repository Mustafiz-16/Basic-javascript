#include<bits/stdc++.h>
using namespace std;
void gaussElimination(vector<vector<double>>& A, vector<double>& B, int n) 
{
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        for (int k = i + 1; k < n; k++) {
            double factor = A[k][i] / A[i][i];
            for (int j = i; j < n; j++) {
                A[k][j] -= factor * A[i][j];
                cnt++;
            }
            B[k] -= factor * B[i];
        }
    }
    double res = cnt/1e5;
    vector<double> X(n);
    for (int i = n - 1; i >= 0; i--) {
        X[i] = B[i];
        for (int j = i + 1; j < n; j++) {
            X[i] -= A[i][j] * X[j];
        }
        X[i] /= A[i][i];
    }
    cout << "Solution by Gauss Elimination:\n";
    int r = 1;
    for (double x : X){cout <<"x"<<r<<": "<< x << " ";r++;
    cout << endl;
    }
    cout<<"Time :"<<fixed<<setprecision(5)<<res<<"ms"<<endl;
}
double gaussElimination1(vector<vector<double>>& A, vector<double>& B, int n) 
{
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        for (int k = i + 1; k < n; k++) {
            double factor = A[k][i] / A[i][i];
            for (int j = i; j < n; j++) {
                A[k][j] -= factor * A[i][j];
                cnt++;
            }
            B[k] -= factor * B[i];
        }
    }
    double res = cnt/1e5;
    vector<double> X(n);
    for (int i = n - 1; i >= 0; i--) {
        X[i] = B[i];
        for (int j = i + 1; j < n; j++) {
            X[i] -= A[i][j] * X[j];
        }
        X[i] /= A[i][i];
    }
    return res;
}
void gaussJordan(vector<vector<double>>& A, vector<double>& B, int n) {
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        double diag = A[i][i];
        for (int j = 0; j < n; j++) {
            A[i][j] /= diag;
            cnt++;
        }
        B[i] /= diag;

        for (int k = 0; k < n; k++) {
            if (k != i) {
                double factor = A[k][i];
                for (int j = 0; j < n; j++) {
                    A[k][j] -= factor * A[i][j];
                }
                B[k] -= factor * B[i];
            }
        }
    }
    double res = cnt/1e5;
    cout << "Solution by Gauss-Jordan:\n";
    int r = 1;
    for (double x : B){ cout <<"x"<<r<<": "<< x << " ";r++;
    cout << endl;
    }
    cout<<"Time :"<<fixed<<setprecision(5)<<res<<"ms"<<endl;
}
double gaussJordan1(vector<vector<double>>& A, vector<double>& B, int n) {
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        double diag = A[i][i];
        for (int j = 0; j < n; j++) {
            A[i][j] /= diag;
            cnt++;
        }
        B[i] /= diag;

        for (int k = 0; k < n; k++) {
            if (k != i) {
                double factor = A[k][i];
                for (int j = 0; j < n; j++) {
                    A[k][j] -= factor * A[i][j];
                }
                B[k] -= factor * B[i];
            }
        }
    }
    double res = cnt/1e5;
    return res;
}
void jacobiMethod(vector<vector<double>>& A, vector<double>& B, int n, int maxIter = 100, double tol = 1e-6) 
{
    vector<double> X(n, 0), X_new(n);
    int cnt = 0;
    for (int iter = 0; iter < maxIter; iter++) {
        for (int i = 0; i < n; i++) {
            double sum = B[i];
            for (int j = 0; j < n; j++) {
                if (i != j) sum -= A[i][j] * X[j];
                cnt++;
            }
            X_new[i] = sum / A[i][i];
        }

        double error = 0.0;
        for (int i = 0; i < n; i++) {
            error = max(error, abs(X_new[i] - X[i]));
            X[i] = X_new[i];
        }
        if (error < tol) break;
    }
    double res = cnt/1e5;
    cout << "Solution by Jacobi Method:\n";
    int r = 1;
    for (double x : X) {cout <<"x"<<r<<": "<<  x << " ";
    cout << endl;
    }
    cout<<"Time :"<<fixed<<setprecision(5)<<res<<"ms"<<endl;
}
double jacobiMethod1(vector<vector<double>>& A, vector<double>& B, int n, int maxIter = 100, double tol = 1e-6) 
{
    vector<double> X(n, 0), X_new(n);
    int cnt = 0;
    for (int iter = 0; iter < maxIter; iter++) {
        for (int i = 0; i < n; i++) {
            double sum = B[i];
            for (int j = 0; j < n; j++) {
                if (i != j) sum -= A[i][j] * X[j];
                cnt++;
            }
            X_new[i] = sum / A[i][i];
        }

        double error = 0.0;
        for (int i = 0; i < n; i++) {
            error = max(error, abs(X_new[i] - X[i]));
            X[i] = X_new[i];
        }
        if (error < tol) break;
    }
    double res = cnt/1e5;
    return res;
}
void gaussSeidel(vector<vector<double>>& A, vector<double>& B, int n, int maxIter = 100, double tol = 1e-6) 
{
    vector<double> X(n, 0);
    int cnt = 0;
    for (int iter = 0; iter < maxIter; iter++) {
        double error = 0.0;
        for (int i = 0; i < n; i++) {
            double sum = B[i];
            for (int j = 0; j < n; j++) {
                if (i != j) sum -= A[i][j] * X[j];
                cnt++;
            }
            double X_new = sum / A[i][i];
            error = max(error, abs(X_new - X[i]));
            X[i] = X_new;
        }
        if (error < tol) break;
    }
    double res = cnt/1e5;
    int r = 1;
      for (int i = 0; i < n; i++) {
        cout << "x" << i + 1 << ": " << fixed << setprecision(6) << X[i] << " "<<endl;
    }
    cout << endl;
    cout<<"Time :"<<fixed<<setprecision(5)<<res<<"ms"<<endl;
}
double gaussSeidel1(vector<vector<double>>& A, vector<double>& B, int n, int maxIter = 100, double tol = 1e-6) {
    vector<double> X(n, 0);
    int cnt = 0;
    for (int iter = 0; iter < maxIter; iter++) {
        double error = 0.0;
        for (int i = 0; i < n; i++) {
            double sum = B[i];
            for (int j = 0; j < n; j++) {
                if (i != j) sum -= A[i][j] * X[j];
                cnt++;
            }
            double X_new = sum / A[i][i];
            error = max(error, abs(X_new - X[i]));
            X[i] = X_new;
        }
        if (error < tol) break;
    }
    double res = cnt/1e5;
    return res;
}
void compare(vector<vector<double>>& A, vector<double>& B, int n)
{
    double a =gaussElimination1(A, B, n);
    double b =gaussJordan1(A, B, n);
    double c =jacobiMethod1(A, B, n);
    double d =gaussSeidel1(A, B, n);
    double arr[4];
    arr[0]=a;
    arr[1]=b;
    arr[2]=c;
    arr[3]=d;
    sort(arr,arr+4);
    for(int i=0;i<4;i++)
    {
        if(i==0)
        {
            cout<<"Most efficient Method :"<<endl;
        }
        else{
            cout<<"less efficient than previous Method :"<<endl;
        }
        if(arr[i]==a)
        {
            cout<<"GaussElimination method takes only "<<fixed<<setprecision(5)<<a<<"ms time"<<endl;
        }
        else if(arr[i]==b)
        {
            cout<<"GaussJordan method takes only "<<fixed<<setprecision(5)<<b<<"ms time"<<endl;
        }
        else if(arr[i]==c)
        {
             cout<<"Jacobi method takes only "<<fixed<<setprecision(5)<<c<<"ms time"<<endl;
        }
        else if(arr[i]==d)
        {
             cout<<"GaussSeidel method takes only "<<fixed<<setprecision(5)<<d<<"ms time"<<endl;
        }
    }
}
int main() 
{
    int n;
    cout << "Enter the number of variables: ";
    cin >> n;

    vector<vector<double>> A(n, vector<double>(n));
    vector<double> B(n);

    cout << "Enter the coefficient matrix:\n";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> A[i][j];
        }
    }

    cout << "Enter the right-hand side vector:\n";
    for (int i = 0; i < n; i++) {
        cin >> B[i];
    }
    while (true){
        int choice;
        cout << "\nMenu:\n";
        cout << "1. Gauss Elimination\n";
        cout << "2. Gauss-Jordan\n";
        cout << "3. Jacobi\n";
        cout << "4. Gauss-Seidel\n";
        cout << "5. compare All the method\n";
        cout << "6. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;
        if(choice==6)
        {
            cout<<"Thank you"<<endl;
            break;
        }
        switch (choice) 
        {
            case 1:
                gaussElimination(A, B, n);
                break;
            case 2:
                gaussJordan(A, B, n);
                break;
            case 3:
                jacobiMethod(A, B, n);
                break;
            case 4:
                gaussSeidel(A, B, n);
                break;
            case 5:
                compare(A,B,n);
                break;
            default:
                cout << "Invalid choice! Please try again.\n";
        }

    }
    return 0;
}
/*
DEMO :

3

2 3 1

4 7 3

6 18 5

8
20
36
*/
