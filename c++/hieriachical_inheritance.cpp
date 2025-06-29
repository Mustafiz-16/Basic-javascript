#include <iostream>
using namespace std;
class student
{
public:
    string name, department;
    int age, id;
    float cgpa;
    void enter_data()
    {
        cout << "Enter your name: ";
        cin >> name;
        // cout<<"Enter your last name: ";
        // cin>>l_name;
        cout << "Enter your age: ";
        cin >> age;
        cout << "Enter your Department: ";
        cin >> department;
        cout << "Enter your id: ";
        cin >> id;
        cout << "Enter your cgpa: ";
        cin >> cgpa;
    }
    void display_data()
    {
        cout << "First name: " << name << endl;
        // cout<<"last name: "<<l_name<<endl;
        cout << "Department: " << department << endl;
        cout << "age: " << age << endl;
        cout << "id: " << id << endl;
        cout << "cgpa: " << cgpa << endl;
    }
};
class cse : public student
{
private:
    string sub1, sub2, sub3;

public:
    void enter_data()
    {
        student::enter_data();
        cout << "Enter your first subject: ";
        cin >> sub1;
        cout << "Enter your second subject: ";
        cin >> sub2;
        cout << "Enter your Third subject: ";
        cin >> sub3;
    }
    void display_data()
    {
        student::display_data();
        cout << "First subject: " << sub1 << endl;
        cout << "second subject: " << sub2 << endl;
        cout << "third subject: " << sub3 << endl;
    }
};
class eee : public student
{
private:
    string sub1, sub2, sub3;

public:
    void enter_data()
    {
        student::enter_data();
        cout << "Enter your first subject: ";
        cin >> sub1;
        cout << "Enter your second subject: ";
        cin >> sub2;
        cout << "Enter your Third subject: ";
        cin >> sub3;
    }
    void display_data()
    {
        student::display_data();
        cout << "First subject: " << sub1 << endl;
        cout << "second subject: " << sub2 << endl;
        cout << "third subject: " << sub3 << endl;
    }
};
int main()
{
    cout << "Enter cse Information" << endl
         << endl;
    cse s1;
    s1.enter_data();
    s1.display_data();

    cout << "Enter EEE Information" << endl
         << endl;
    eee s2;
    s2.enter_data();
    s2.display_data();
}
