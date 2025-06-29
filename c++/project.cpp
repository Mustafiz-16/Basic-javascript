#include <iostream>
#include <string>

using namespace std;

class LibraryItem {
protected:
    string title;
    string author;

public:
    LibraryItem(string title, string author) : title(title), author(author) {}

    virtual void displayDetails() {
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
    }
};

class Book : public LibraryItem {
private:
    string genre;
    string isbn;
    bool available;

public:
    Book(string title, string author, string genre, string isbn, bool available = true)
    : LibraryItem(title, author), genre(genre), isbn(isbn), available(available) {}

    void displayDetails() override {
        LibraryItem::displayDetails();
        cout << "Genre: " << genre << endl;
        cout << "ISBN: " << isbn << endl;
        cout << "Available: " << (available ? "Yes" : "No") << endl;
    }
};

class Member {
private:
    string name;
    string contact;

public:
    Member(string name, string contact) : name(name), contact(contact) {}

    void displayDetails() {
        cout << "Name: " << name << endl;
        cout << "Contact: " << contact << endl;
    }
};

class Loan {
private:
    Book book;
    Member member;
    int loanDuration;

public:
    Loan(Book book, Member member, int loanDuration) : book(book), member(member), loanDuration(loanDuration) {}

    void displayDetails() {
        cout << "Loan Details:" << endl;
        book.displayDetails();
        member.displayDetails();
        cout << "Loan Duration: " << loanDuration << " days" << endl;
    }
};

int main() {
    Book book1("Python Crash Course", "Eric Matthes", "Programming", "9781593279288");
    Member member1("Alice", "alice@example.com");
    Loan loan1(book1, member1, 14);

    loan1.displayDetails();

    return 0;
}