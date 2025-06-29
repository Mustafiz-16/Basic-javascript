#include<bits/stdc++.h>
using namespace std;
double fun(double n)
{
    //double radian = (n*3.1416)/180.0;
    //double fun1 = (3.0*n)- cos(n)-1;
    //double fun1 = n*n*n-4*n-9;
    double fun1 = 3*n-cos(n)-1;
    return fun1;
}
int main()
{
    double a=0,b=1,c,fa=fun(a),fb=fun(b),fc;
    while(fa*fb>0)
    {
        a++;
        b++;
        fa=fun(a);
        fb=fun(b);
    }
    c=(a+b)/2;
    fc=fun(c);
    double check;
    do 
    {
            check=c;
            if(fa*fc>0)
            {
                b=c;
                fb=fc;
            }
            else
            {
                a=c;
                fa=fc;
            }
            c=((a*fb)-(b*fa))/(fb-fa);
            fc = fun(c);
            cout<<check<<" "<<c<<endl;
    }
    while (check!=c);
    cout<<c<<endl;
    return 0;
}
