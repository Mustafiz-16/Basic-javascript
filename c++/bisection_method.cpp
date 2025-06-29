#include <bits/stdc++.h>
using namespace std;
double func(double x)
{
    return 3 * x - cos(x) - 1;
    // return x*x*x - 4*x-9;
}
void bisection(double a, double b)
{
    if (func(a) * func(b) > 0)
    {
        cout << "Wrong assumption. "<<endl;
    }
    double c;
    while ((b - a) >= 0.0001)
    {
        c = (a + b) / 2;
        if (func(c) == 0)
        {
            break;
        }
        else if (func(a) * func(c) <= 0)
        {
            b = c;
        }
        else
        {
            a = c;
        }
    }
    cout << "The root is : " << c << endl;
}
int main()
{
    int a, b;
    cout << "Assumption of a and b:";
    cin >> a >> b;
    bisection(a, b);
}
