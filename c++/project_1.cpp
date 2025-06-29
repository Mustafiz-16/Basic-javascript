#include <iostream>
#include <map>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

class Book {
public:
    int id;
    string title;
    string author;
    string category;
    bool available;

    Book(int book_id, const string& book_title, const string& book_author, const string& book_category)
        : id(book_id), title(book_title), author(book_author), category(book_category), available(true) {}
};

class CategoryOfBooks {
public:
    virtual void displayCategoryBooks(const string& category, const map<int, Book>& books) const {
        cout << "Books in category '" << category << "':" << endl;
        for (const auto& [id, book] : books) {
            if (book.category == category) {
                cout << "ID: " << id << ", Title: " << book.title << ", Author: " << book.author << endl;
            }
        }
    }
};

class LibraryCard {
public:
    int card_id;
    int student_id;

    LibraryCard(int cardID, int studentID) : card_id(cardID), student_id(studentID) {}
};

class Student {
public:
    int id;
    string name;
    string department;
    vector<int> borrowed_books;
    double fine;

    Student(int student_id, const string& student_name, const string& student_department)
        : id(student_id), name(student_name), department(student_department), fine(0.0) {}

    void borrowBook(int book_id) {
        borrowed_books.push_back(book_id);
    }

    void returnBook(int book_id) {
        borrowed_books.erase(remove(borrowed_books.begin(), borrowed_books.end(), book_id), borrowed_books.end());
    }

    void addFine(double amount) {
        fine += amount;
    }

    void payFine(double amount) {
        fine -= amount;
    }

    void displayBorrowedBooks(const map<int, Book>& books) const {
        for (int book_id : borrowed_books) {
            auto it = books.find(book_id);
            if (it != books.end()) {
                cout << "ID: " << it->second.id << ", Title: " << it->second.title << ", Author: " << it->second.author << endl;
            }
        }
    }
};

class Fine {
public:
    virtual void addFine(int student_id, double amount, map<int, Student>& students) {
        if (students.find(student_id) != students.end()) {
            students[student_id].addFine(amount);
            cout << "Added fine of $" << amount << " to student ID " << student_id << "." << endl;
        } else {
            cout << "Student ID " << student_id << " does not exist." << endl;
        }
    }

    virtual void payFine(int student_id, double amount, map<int, Student>& students) {
        if (students.find(student_id) != students.end()) {
            students[student_id].payFine(amount);
            cout << "Student ID " << student_id << " paid fine of $" << amount << "." << endl;
        } else {
            cout << "Student ID " << student_id << " does not exist." << endl;
        }
    }
};

class BorrowingBooks : public Fine, public CategoryOfBooks {
private:
    map<int, Book> books;
    map<int, Student> students;
    map<int, LibraryCard> library_cards;

public:
    void addBook(int book_id, const string& title, const string& author, const string& category) {
        if (books.find(book_id) != books.end()) {
            cout << "Book ID " << book_id << " already exists." << endl;
        } else {
            books[book_id] = Book(book_id, title, author, category);
            cout << "Book '" << title << "' added successfully." << endl;
        }
    }

    void removeBook(int book_id) {
        if (books.find(book_id) != books.end()) {
            books.erase(book_id);
            cout << "Book ID " << book_id << " removed successfully." << endl;
        } else {
            cout << "Book ID " << book_id << " does not exist." << endl;
        }
    }

    void addStudent(int student_id, const string& name, const string& department) {
        if (students.find(student_id) != students.end()) {
            cout << "Student ID " << student_id << " already exists." << endl;
        } else {
            students[student_id] = Student(student_id, name, department);
            cout << "Student '" << name << "' added successfully." << endl;
        }
    }

    void addLibraryCard(int card_id, int student_id) {
        if (students.find(student_id) != students.end()) {
            library_cards[card_id] = LibraryCard(card_id, student_id);
            cout << "Library card added for student ID " << student_id << "." << endl;
        } else {
            cout << "Student ID " << student_id << " does not exist." << endl;
        }
    }

    void checkOutBook(int book_id, int student_id) {
        if (books.find(book_id) != books.end() && books[book_id].available) {
            if (students.find(student_id) != students.end()) {
                books[book_id].available = false;
                students[student_id].borrowBook(book_id);
                cout << "Book ID " << book_id << " checked out by student ID " << student_id << "." << endl;
            } else {
                cout << "Student ID " << student_id << " does not exist." << endl;
            }
        } else {
            cout << "Book ID " << book_id << " is either not available or does not exist." << endl;
        }
    }

    void returnBook(int book_id, int student_id) {
        if (students.find(student_id) != students.end()) {
            auto& student = students[student_id];
            if (find(student.borrowed_books.begin(), student.borrowed_books.end(), book_id) != student.borrowed_books.end()) {
                books[book_id].available = true;
                student.returnBook(book_id);
                cout << "Book ID " << book_id << " returned by student ID " << student_id << "." << endl;
            } else {
                cout << "Book ID " << book_id << " was not borrowed by student ID " << student_id << "." << endl;
            }
        } else {
            cout << "Student ID " << student_id << " does not exist." << endl;
        }
    }

    void getAvailableBooks() const {
        cout << "Available books:" << endl;
        for (const auto& [id, book] : books) {
            if (book.available) {
                cout << "ID: " << id << ", Title: " << book.title << ", Author: " << book.author << ", Category: " << book.category << endl;
            }
        }
    }

    void getBorrowedBooks() const {
        cout << "Borrowed books:" << endl;
        for (const auto& [id, student] : students) {
            cout << "Student ID: " << id << ", Name: " << student.name << ", Department: " << student.department << endl;
            student.displayBorrowedBooks(books);
        }
    }

    // Overriding addFine and payFine methods from Fine class
    void addFine(int student_id, double amount) override {
        Fine::addFine(student_id, amount, students);
    }

    void payFine(int student_id, double amount) override {
        Fine::payFine(student_id, amount, students);
    }
};

int main() {
    BorrowingBooks library;
    
    // Adding books
    library.addBook(1, "1984", "George Orwell", "Fiction");
    library.addBook(2, "To Kill a Mockingbird", "Harper Lee", "Fiction");
    library.addBook(3, "The Art of Computer Programming", "Donald Knuth", "Computer Science");

    // Adding students
    library.addStudent(1001, "Alice", "Computer Science");
    library.addStudent(1002, "Bob", "Literature");

    // Adding library cards
    library.addLibraryCard(5001, 1001);
    library.addLibraryCard(5002, 1002);

    // Checkout and return books
    library.checkOutBook(1, 1001);
    library.returnBook(1, 1001);

    // Display available and borrowed books
    library.getAvailableBooks();
    library.getBorrowedBooks();

    // Choosing book category
    library.displayCategoryBooks("Computer Science", library.books);

    // Adding and paying fines
    library.addFine(1001, 10.0);
    library.payFine(1001, 5.0);

    return 0;
}
