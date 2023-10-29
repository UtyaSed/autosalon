CREATE TABLE Cars
(
    id    SERIAL PRIMARY KEY,
    brand VARCHAR(255),
    model VARCHAR(255),
    year  INT,
    price NUMERIC(10, 2)
);

CREATE TABLE Customers
(
    id        SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname  VARCHAR(255),
    email     VARCHAR(255),
    phone     VARCHAR(15)
);

CREATE TABLE Employees
(
    id        SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname  VARCHAR(255),
    position  VARCHAR(255),
    salary    NUMERIC(10, 2),
    password  VARCHAR(255),
);

CREATE TABLE Sales
(
    id         SERIAL PRIMARY KEY,
    carid      INT,
    customerid INT,
    saledate   DATE,
    saleprice  NUMERIC(10, 2)
);

CREATE TABLE Services
(
    id          SERIAL PRIMARY KEY,
    servicename VARCHAR(255),
    description TEXT,
    price       NUMERIC(10, 2)
);

