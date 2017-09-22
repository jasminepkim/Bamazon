CREATE DATABASE bamazon_db;
DROP TABLE IF EXISTS bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INTEGER(15) PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price FLOAT(19,2) NOT NULL,
    stock_quantity INTEGER(15) NOT NULL
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothbrushes", "Household Items", 7.99, 1043);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cliff Bars - Peanut Butter", "Healthy Foods", 2.35, 898);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eloquent JavaScript", "Books", 25.77, 79);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("How to ROCK at Programming", "Books", 100.99, 932);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Celery", "Healthy Foods", 1.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rose Macarons", "Foods", 12.99, 41);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Household Items", 3.49, 880);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro \"15", "Electronics", 5000.99, 239);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Git for Dummies", "Books", 23.99, 144);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rosemary Popcorn", "Foods", 4.79, 93);

SELECT * FROM products;