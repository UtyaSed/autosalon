INSERT INTO Cars (CarID, Brand, Model, Year, Price)
VALUES (1, 'Toyota', 'Camry', 2022, 25000),
       (2, 'Honda', 'Civic', 2022, 22000),
       (3, 'Ford', 'F-150', 2022, 35000),
       (4, 'Chevrolet', 'Malibu', 2022, 24000),
       (5, 'Nissan', 'Altima', 2022, 23000);

INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Phone)
VALUES (1, 'John', 'Doe', 'john.doe@email.com', '+1234567890'),
       (2, 'Jane', 'Smith', 'jane.smith@email.com', '+9876543210'),
       (3, 'Bob', 'Johnson', 'bob.johnson@email.com', '+5678901234'),
       (4, 'Alice', 'Brown', 'alice.brown@email.com', '+4321098765'),
       (5, 'David', 'Lee', 'david.lee@email.com', '+8765432109');

INSERT INTO Sales (SaleID, CarID, CustomerID, SaleDate, SalePrice)
VALUES (1, 1, 1, '2023-01-15', 25000),
       (2, 2, 2, '2023-01-16', 22000),
       (3, 3, 3, '2023-01-17', 35000),
       (4, 4, 4, '2023-01-18', 24000),
       (5, 5, 5, '2023-01-19', 23000);

INSERT INTO Employees (EmployeeID, FirstName, LastName, Position, Salary)
VALUES (1, 'Michael', 'Smith', 'Sales Manager', 60000),
       (2, 'Emily', 'Johnson', 'Finance Manager', 65000),
       (3, 'Robert', 'Brown', 'Sales Representative', 45000),
       (4, 'Jennifer', 'Lee', 'Service Technician', 50000),
       (5, 'William', 'Davis', 'General Manager', 75000);


INSERT INTO Services (servicename, description, price)
VALUES ('Regular Maintenance Service', 'Scheduled maintenance to keep the vehicle in good condition.', 100.00),
       ('Brake Pad Replacement', 'Replacement of brake pads and brake system work.', 150.00),
       ('Engine Diagnostics', 'Engine diagnostics to detect issues and facilitate repairs.', 75.00),
       ('Oil and Filter Change', 'Routine oil and filter change to maintain engine performance.', 50.00),
       ('Climate System Repair', 'Repair and servicing of the vehicle\'s climate control system.', 120.00);
