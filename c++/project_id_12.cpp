#include <iostream>
using namespace std;

class Student {
public:
    string name, department;
    int age, id;
    float cgpa;

    void enter_data() {
        cout << "Enter your name: ";
        cin >> name;
        cout << "Enter your age: ";
        cin >> age;
        cout << "Enter your id: ";
        cin >> id;
        cout << "Enter your cgpa: ";
        cin >> cgpa;
    }

    void display_data() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "ID: " << id << endl;
        cout << "CGPA: " << cgpa << endl;
    }
};

class CSE : public Student {
public:
    void enter_data() 
    {
        Student::enter_data();
    }
};

class EEE : public Student {
public:
    void enter_data() 
    {
        Student::enter_data();
    }
};

class CE : public Student {
public:
    void enter_data()  
    {
        Student::enter_data();
    }
};

int main() 
{
    CSE cse;
    EEE ee;
    CE ce;

    int num_cse, num_eee, num_ce;

    cout << "Enter number of CSE students: ";
    cin >> num_cse;
    for (int i = 0; i < num_cse; i++) 
    {
        cout << "CSE Student " << i + 1 << ":" << endl;
        cse.enter_data();
    }

    cout << "\nEnter number of EEE students: ";
    cin >> num_eee;
    for (int i = 0; i < num_eee; i++) 
    {
        cout << "EEE Student " << i + 1 << ":" << endl;
        ee.enter_data();
    }

    cout << "\nEnter number of CE students: ";
    cin >> num_ce;
    for (int i = 0; i < num_ce; i++) 
    {
        cout << "CE Student " << i + 1 << ":" << endl;
        ce.enter_data();
    }

    cout << "\nTop CGPA students:\n";
    if (cse.cgpa > ee.cgpa && cse.cgpa > ce.cgpa) 
    {
        cout << "CSE Department:\n";
        cse.display_data();
    } 
    else if (ee.cgpa > cse.cgpa && ee.cgpa > ce.cgpa) 
    {
        cout << "EEE Department:\n";
        ee.display_data();
    }
    else 
    {
        cout << "CE Department:\n";
        ce.display_data();
    }
    return 0;
}