
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

class Car {
private:
    std::string carId;
    std::string brand;
    std::string model;
    double basePricePerDay;
    bool isAvailable;

public:
    Car(std::string carId, std::string brand, std::string model, double basePricePerDay)
        : carId(carId), brand(brand), model(model), basePricePerDay(basePricePerDay), isAvailable(true) {}

    std::string getCarId() const {
        return carId;
    }

    std::string getBrand() const {
        return brand;
    }

    std::string getModel() const {
        return model;
    }

    double calculatePrice(int rentalDays) const {
        return basePricePerDay * rentalDays;
    }

    bool getIsAvailable() const {
        return isAvailable;
    }

    void rent() {
        isAvailable = false;
    }

    void returnCar() {
        isAvailable = true;
    }
};

class Customer {
private:
    std::string customerId;
    std::string name;

public:
    Customer(std::string customerId, std::string name) : customerId(customerId), name(name) {}

    std::string getCustomerId() const {
        return customerId;
    }

    std::string getName() const {
        return name;
    }
};

class Rental {
private:
    Car* car;
    Customer* customer;
    int days;

public:
    Rental(Car* car, Customer* customer, int days) : car(car), customer(customer), days(days) {}

    Car* getCar() const {
        return car;
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
    std::vector<Car> cars;
    std::vector<Customer> customers;
    std::vector<Rental> rentals;

public:
    void addCar(const Car& car) {
        cars.push_back(car);
    }

    void addCustomer(const Customer& customer) {
        customers.push_back(customer);
    }

    void rentCar(Car& car, Customer& customer, int days) {
        if (car.getIsAvailable()) {
            car.rent();
            rentals.emplace_back(&car, &customer, days);
        } else {
            std::cout << "Car is not available for rent." << std::endl;
        }
    }

    void returnCar(Car& car) {
        car.returnCar();
        auto it = std::remove_if(rentals.begin(), rentals.end(), [&car](const Rental& rental) {
            return rental.getCar() == &car;
        });
        if (it != rentals.end()) {
            rentals.erase(it, rentals.end());
        } else {
            std::cout << "Car was not rented." << std::endl;
        }
    }

    void menu() {
        while (true) {
            std::cout << "===== Car Rental System =====" << std::endl;
            std::cout << "1. Rent a Car" << std::endl;
            std::cout << "2. Return a Car" << std::endl;
            std::cout << "3. Exit" << std::endl;
            std::cout << "Enter your choice: ";

            int choice;
            std::cin >> choice;
            std::cin.ignore();

            if (choice == 1) {
                std::cout << "\n== Rent a Car ==\n" << std::endl;
                std::cout << "Enter your name: ";
                std::string customerName;
                std::getline(std::cin, customerName);

                std::cout << "\nAvailable Cars:" << std::endl;
                for (const auto& car : cars) {
                    if (car.getIsAvailable()) {
                        std::cout << car.getCarId() << " - " << car.getBrand() << " " << car.getModel() << std::endl;
                    }
                }

                std::cout << "\nEnter the car ID you want to rent: ";
                std::string carId;
                std::getline(std::cin, carId);

                std::cout << "Enter the number of days for rental: ";
                int rentalDays;
                std::cin >> rentalDays;
                std::cin.ignore();

                Customer newCustomer("CUS" + std::to_string(customers.size() + 1), customerName);
                addCustomer(newCustomer);

                Car* selectedCar = nullptr;
                for (auto& car : cars) {
                    if (car.getCarId() == carId && car.getIsAvailable()) {
                        selectedCar = &car;
                        break;
                    }
                }

                if (selectedCar != nullptr) {
                    double totalPrice = selectedCar->calculatePrice(rentalDays);
                    std::cout << "\n== Rental Information ==\n" << std::endl;
                    std::cout << "Customer ID: " << newCustomer.getCustomerId() << std::endl;
                    std::cout << "Customer Name: " << newCustomer.getName() << std::endl;
                    std::cout << "Car: " << selectedCar->getBrand() << " " << selectedCar->getModel() << std::endl;
                    std::cout << "Rental Days: " << rentalDays << std::endl;
                    std::printf("Total Price: $%.2f\n", totalPrice);

                    std::cout << "\nConfirm rental (Y/N): ";
                    std::string confirm;
                    std::cin >> confirm;
                    std::cin.ignore();

                    if (confirm == "Y" || confirm == "y") {
                        rentCar(*selectedCar, newCustomer, rentalDays);
                        std::cout << "\nCar rented successfully." << std::endl;
                    } else {
                        std::cout << "\nRental canceled." << std::endl;
                    }
                } else {
                    std::cout << "\nInvalid car selection or car not available for rent." << std::endl;
                }
            } else if (choice == 2) {
                std::cout << "\n== Return a Car ==\n" << std::endl;
                std::cout << "Enter the car ID you want to return: ";
                std::string carId;
                std::getline(std::cin, carId);

                Car* carToReturn = nullptr;
                for (auto& car : cars) {
                    if (car.getCarId() == carId && !car.getIsAvailable()) {
                        carToReturn = &car;
                        break;
                    }
                }

                if (carToReturn != nullptr) {
                    Customer* customer = nullptr;
                    for (const auto& rental : rentals) {
                        if (rental.getCar() == carToReturn) {
                            customer = rental.getCustomer();
                            break;
                        }
                    }

                    if (customer != nullptr) {
                        returnCar(*carToReturn);
                        std::cout << "Car returned successfully by " << customer->getName() << std::endl;
                    } else {
                        std::cout << "Car was not rented or rental information is missing." << std::endl;
                    }
                } else {
                    std::cout << "Invalid car ID or car is not rented." << std::endl;
                }
            } else if (choice == 3) {
                break;
            } else {
                std::cout << "Invalid choice. Please enter a valid option." << std::endl;
            }
        }

        std::cout << "\nThank you for using the Car Rental System!" << std::endl;
    }
};

int main() {
    CarRentalSystem rentalSystem;

    Car car1("C001", "Toyota", "Camry", 60.0); // Different base price per day for each car
    Car car2("C002", "Honda", "Accord", 70.0);
    Car car3("C003", "Mahindra", "Thar", 150.0);
    rentalSystem.addCar(car1);
    rentalSystem.addCar(car2);
    rentalSystem.addCar(car3);

    rentalSystem.menu();

    return 0;
}
