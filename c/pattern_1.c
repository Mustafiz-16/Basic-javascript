
#include<bits/stdc++.h>
using namespace std;

class Vehicle {
protected:
    string vehicleId;
    string brand;
    string model;
    double basePricePerDay;
    bool isAvailable;

public:
    Vehicle(string vehicleId, string brand, string model, double basePricePerDay)
        : vehicleId(vehicleId), brand(brand), model(model), basePricePerDay(basePricePerDay), isAvailable(true) {}

    string getVehicleId() const {
        return vehicleId;
    }

    string getBrand() const {
        return brand;
    }

    string getModel() const {
        return model;
    }

    virtual double calculatePrice(int rentalDays) const {
        return basePricePerDay * rentalDays;
    }

    bool getIsAvailable() const {
        return isAvailable;
    }

    void rent() {
        isAvailable = false;
    }

    void returnVehicle() {
        isAvailable = true;
    }
};

class Car : public Vehicle {
public:
    Car(string carId, string brand, string model, double basePricePerDay)
        : Vehicle(carId, brand, model, basePricePerDay) {}

    // Method overloading
    double calculatePrice(int rentalDays, double discount) const {
        return (basePricePerDay * rentalDays) * (1 - discount);
    }

    // Override base class method
    double calculatePrice(int rentalDays) const override {
        return Vehicle::calculatePrice(rentalDays);
    }
};

class Customer {
private:
    string customerId;
    string name;

public:
    Customer(string customerId, string name) : customerId(customerId), name(name) {}

    string getCustomerId() const {
        return customerId;
    }

    string getName() const {
        return name;
    }
};

class Rental {
private:
    Vehicle* vehicle;
    Customer* customer;
    int days;

public:
    Rental(Vehicle* vehicle, Customer* customer, int days) : vehicle(vehicle), customer(customer), days(days) {}

    Vehicle* getVehicle() const {
        return vehicle;
    }

    Customer* getCustomer() const {
        return customer;
    }

    int getDays() const {
        return days;
    }
};

class CarRentalSystem {
private:
    vector<Car*> cars;
    vector<Customer*> customers;
    vector<Rental> rentals;

public:
    ~CarRentalSystem() {
        for (Car* car : cars) {
            delete car;
        }
        for (Customer* customer : customers) {
            delete customer;
        }
    }

    void addCar(Car* car) {
        cars.push_back(car);
    }

    void addCustomer(Customer* customer) {
        customers.push_back(customer);
    }

    void rentCar(Car* car, Customer* customer, int days) {
        if (car->getIsAvailable()) {
            car->rent();
            rentals.emplace_back(car, customer, days);
        } else {
            cout << "Car is not available for rent." << endl;
        }
    }

    void returnCar(Car* car) {
        car->returnVehicle();
        auto it = remove_if(rentals.begin(), rentals.end(), [&car](const Rental& rental) {
            return rental.getVehicle() == car;
        });
        if (it != rentals.end()) {
            rentals.erase(it, rentals.end());
        } else {
            cout << "Car was not rented." << endl;
        }
    }

    void menu() {
        while (true) {
            cout << "===== Car Rental System =====" << endl;
            cout << "1. Rent a Car" << endl;
            cout << "2. Return a Car" << endl;
            cout << "3. Exit" << endl;
            cout << "Enter your choice: ";

            int choice;
            cin >> choice;
            cin.ignore();

            if (choice == 1) {
                cout << "\n== Rent a Car ==\n" << std::endl;
                cout << "Enter your name: ";
                string customerName;
                getline(cin, customerName);

                cout << "\nAvailable Cars:" << endl;
                for (const auto& car : cars) {
                    if (car->getIsAvailable()) {
                        cout << car->getVehicleId() << " - " << car->getBrand() << " " << car->getModel() << std::endl;
                    }
                }

                cout << "\nEnter the car ID you want to rent: ";
                string carId;
                getline(cin, carId);

                cout << "Enter the number of days for rental: ";
                int rentalDays;
                cin >> rentalDays;
                cin.ignore();

                Customer* newCustomer = new Customer("CUS" + to_string(customers.size() + 1), customerName);
                addCustomer(newCustomer);

                Car* selectedCar = nullptr;
                for (auto& car : cars) {
                    if (car->getVehicleId() == carId && car->getIsAvailable()) {
                        selectedCar = car;
                        break;
                    }
                }

                if (selectedCar != nullptr) {
                    cout << "Do you have a discount code? (Y/N): ";
                    string hasDiscount;
                    cin >> hasDiscount;
                    cin.ignore();
                    double totalPrice;

                    if (hasDiscount == "Y" || hasDiscount == "y") {
                        cout << "Enter discount percentage (e.g., 0.1 for 10%): ";
                        double discount;
                        cin >> discount;
                        cin.ignore();
                        totalPrice = selectedCar->calculatePrice(rentalDays, discount);
                    } else {
                        totalPrice = selectedCar->calculatePrice(rentalDays);
                    }

                    cout << "\n== Rental Information ==\n" << endl;
                    cout << "Customer ID: " << newCustomer->getCustomerId() << endl;
                    cout << "Customer Name: " << newCustomer->getName() << endl;
                    cout << "Car: " << selectedCar->getBrand() << " " << selectedCar->getModel() << std::endl;
                    cout << "Rental Days: " << rentalDays << endl;
                    printf("Total Price: $%.2f\n", totalPrice);

                    cout << "\nConfirm rental (Y/N): ";
                    string confirm;
                    cin >> confirm;
                    cin.ignore();

                    if (confirm == "Y" || confirm == "y") {
                        rentCar(selectedCar, newCustomer, rentalDays);
                        cout << "\nCar rented successfully." << endl;
                    } else {
                        cout << "\nRental canceled." << endl;
                    }
                } else {
                    cout << "\nInvalid car selection or car not available for rent." << endl;
                }
            } else if (choice == 2) {
                cout << "\n== Return a Car ==\n" << endl;
                cout << "Enter the car ID you want to return: ";
                string carId;
                getline(cin, carId);

                Car* carToReturn = nullptr;
                for (auto& car : cars) {
                    if (car->getVehicleId() == carId && !car->getIsAvailable()) {
                        carToReturn = car;
                        break;
                    }
                }

                if (carToReturn != nullptr) {
                    Customer* customer = nullptr;
                    for (const auto& rental : rentals) {
                        if (rental.getVehicle() == carToReturn) {
                            customer = rental.getCustomer();
                            break;
                        }
                    }

                    if (customer != nullptr) {
                        returnCar(carToReturn);
                        cout << "Car returned successfully by " << customer->getName() << endl;
                    } else {
                        cout << "Car was not rented or rental information is missing." << endl;
                    }
                } else {
                    cout << "Invalid car ID or car is not rented." << endl;
                }
            } else if (choice == 3) {
                break;
            } else {
                cout << "Invalid choice. Please enter a valid option." << endl;
            }
        }

        cout << "\nThank you for using the Car Rental System!" << endl;
    }
};

int main() {
    CarRentalSystem rentalSystem;

    Car* car1 = new Car("C001", "Toyota", "Camry", 60.0); // Different base price per day for each car
    Car* car2 = new Car("C002", "Honda", "Accord", 70.0);
    Car* car3 = new Car("C003", "Mahindra", "Thar", 150.0);
    rentalSystem.addCar(car1);
    rentalSystem.addCar(car2);
    rentalSystem.addCar(car3);

    rentalSystem.menu();

    return 0;
}
