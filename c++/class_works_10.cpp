#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = '5'; // AscII value 0=48,1 =49,2=50,3=51,4=52,5=53 Now so on...9 =57

    cout << (a == b); // 👉 false → output will be 0
    return 0;
}
