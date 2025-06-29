#include <bits/stdc++.h>
using namespace std;

double func(double x)
{
    double func1 = 3 * x - cos(x) - 1;
    // double func1 = x*x*x -4*x -9;
    return func1;
}
int main()
{
    double a = 0, b = 1, c, fa = func(a), fb = func(b), fc;
    while (fa * fb > 0)
    {
        a++;
        b++;
        fa = func(a);
        fb = func(b);
    }
    double check;
    do
    {
        check = c;
        c = ((a * fb) - (b * fa)) / (fb - fa);
        fc = func(c);
        if (fa * fc <= 0)
        {
            b = c;
            fb = fc;
        }
        else
        {
            a = c;
            fa = fc;
        }
        cout << check << " " << c << endl;
    } 
    while (fabs(check - c) >= 0.0001);
    {
        cout << "the root is :" << c << endl;
        return 0;
    }
}