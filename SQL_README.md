Here are some common SQL interview questions along with answers and examples to help you prepare:

---

### **1. What is SQL?**
**Answer:**  
SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It allows users to perform tasks such as querying data, inserting, updating, deleting records, and managing database structures.

---

### **2. What are the different types of SQL commands?**
**Answer:**  
SQL commands are categorized into five main types:
1. **DDL (Data Definition Language):** Used to define and modify database structures (e.g., `CREATE`, `ALTER`, `DROP`).
2. **DML (Data Manipulation Language):** Used to manipulate data (e.g., `SELECT`, `INSERT`, `UPDATE`, `DELETE`).
3. **DCL (Data Control Language):** Used to control access to data (e.g., `GRANT`, `REVOKE`).
4. **TCL (Transaction Control Language):** Used to manage transactions (e.g., `COMMIT`, `ROLLBACK`).
5. **DQL (Data Query Language):** Used to query data (e.g., `SELECT`).

---

### **3. What is the difference between `DELETE` and `TRUNCATE`?**
**Answer:**  
- **DELETE:** Removes specific rows from a table based on a condition. It can be rolled back and triggers can be fired.
  ```sql
  DELETE FROM employees WHERE id = 101;
  ```
- **TRUNCATE:** Removes all rows from a table. It cannot be rolled back and does not fire triggers.
  ```sql
  TRUNCATE TABLE employees;
  ```

---

### **4. What is a primary key?**
**Answer:**  
A primary key is a column or set of columns that uniquely identifies each row in a table. It cannot contain `NULL` values and must be unique.

**Example:**
```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50)
);
```

---

### **5. What is a foreign key?**
**Answer:**  
A foreign key is a column or set of columns in one table that refers to the primary key in another table. It enforces referential integrity.

**Example:**
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);
```

---

### **6. What is the difference between `INNER JOIN` and `LEFT JOIN`?**
**Answer:**  
- **INNER JOIN:** Returns only the rows that have matching values in both tables.
  ```sql
  SELECT employees.name, orders.product_name
  FROM employees
  INNER JOIN orders ON employees.id = orders.employee_id;
  ```
- **LEFT JOIN:** Returns all rows from the left table and matching rows from the right table. If no match is found, `NULL` is returned for columns from the right table.
  ```sql
  SELECT employees.name, orders.product_name
  FROM employees
  LEFT JOIN orders ON employees.id = orders.employee_id;
  ```

---

### **7. What is a self-join?**
**Answer:**  
A self-join is a join where a table is joined with itself. It is useful for querying hierarchical data or comparing rows within the same table.

**Example:**  
Find employees who are managers of other employees.
```sql
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.id;
```

---

### **8. What is normalization?**
**Answer:**  
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them.

**Common Normal Forms:**  
1. **1NF (First Normal Form):** Eliminate duplicate columns and ensure atomicity.
2. **2NF (Second Normal Form):** Remove partial dependencies.
3. **3NF (Third Normal Form):** Remove transitive dependencies.

---

### **9. What is a subquery?**
**Answer:**  
A subquery is a query nested inside another query. It can be used in `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statements.

**Example:**  
Find employees whose salary is above the average salary.
```sql
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

---

### **10. What is the difference between `HAVING` and `WHERE`?**
**Answer:**  
- **WHERE:** Filters rows before grouping (used with `SELECT`, `UPDATE`, `DELETE`).
- **HAVING:** Filters groups after aggregation (used with `GROUP BY`).

**Example:**  
Find departments with more than 5 employees.
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

---

### **11. What is an index?**
**Answer:**  
An index is a database object that improves the speed of data retrieval operations on a table. It works like a pointer to data in a table.

**Example:**  
Create an index on the `email` column.
```sql
CREATE INDEX idx_email ON employees(email);
```

---

### **12. What is a view?**
**Answer:**  
A view is a virtual table based on the result set of an SQL query. It does not store data but provides a way to simplify complex queries.

**Example:**  
Create a view for active employees.
```sql
CREATE VIEW active_employees AS
SELECT name, department
FROM employees
WHERE status = 'active';
```

---

### **13. What is a stored procedure?**
**Answer:**  
A stored procedure is a precompiled collection of SQL statements that can be executed as a single unit. It improves performance and reusability.

**Example:**  
Create a stored procedure to get employee details.
```sql
CREATE PROCEDURE GetEmployeeDetails(IN emp_id INT)
BEGIN
    SELECT * FROM employees WHERE id = emp_id;
END;
```

---

### **14. What is the difference between `UNION` and `UNION ALL`?**
**Answer:**  
- **UNION:** Combines the result sets of two queries and removes duplicates.
- **UNION ALL:** Combines the result sets of two queries without removing duplicates.

**Example:**
```sql
SELECT name FROM employees
UNION
SELECT name FROM contractors;

SELECT name FROM employees
UNION ALL
SELECT name FROM contractors;
```

---

### **15. What is a transaction?**
**Answer:**  
A transaction is a sequence of operations performed as a single logical unit of work. It ensures data integrity by following the ACID properties (Atomicity, Consistency, Isolation, Durability).

**Example:**
```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

---

---

### **16. What is the difference between `CHAR` and `VARCHAR`?**
**Answer:**  
- **CHAR:** Fixed-length character data type. It pads spaces to the specified length.
  ```sql
  CREATE TABLE example (name CHAR(10)); -- Always uses 10 characters
  ```
- **VARCHAR:** Variable-length character data type. It uses only the required space.
  ```sql
  CREATE TABLE example (name VARCHAR(10)); -- Uses up to 10 characters
  ```

---

### **17. What is a composite key?**
**Answer:**  
A composite key is a combination of two or more columns that uniquely identify a row in a table.

**Example:**
```sql
CREATE TABLE orders (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);
```

---

### **18. What is the difference between `GROUP BY` and `ORDER BY`?**
**Answer:**  
- **GROUP BY:** Groups rows that have the same values into summary rows. Used with aggregate functions like `COUNT`, `SUM`, etc.
  ```sql
  SELECT department, COUNT(*) AS employee_count
  FROM employees
  GROUP BY department;
  ```
- **ORDER BY:** Sorts the result set in ascending or descending order.
  ```sql
  SELECT name, salary
  FROM employees
  ORDER BY salary DESC;
  ```

---

### **19. What is a correlated subquery?**
**Answer:**  
A correlated subquery is a subquery that depends on the outer query for its values. It is executed repeatedly, once for each row processed by the outer query.

**Example:**  
Find employees whose salary is greater than the average salary in their department.
```sql
SELECT name, salary, department
FROM employees e1
WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department);
```

---

### **20. What is the difference between `IN` and `EXISTS`?**
**Answer:**  
- **IN:** Checks if a value matches any value in a list or subquery.
  ```sql
  SELECT name FROM employees WHERE department IN ('HR', 'Finance');
  ```
- **EXISTS:** Checks if a subquery returns any rows. It is often faster for large datasets.
  ```sql
  SELECT name FROM employees e
  WHERE EXISTS (SELECT 1 FROM orders o WHERE o.employee_id = e.id);
  ```

---

### **21. What is a window function?**
**Answer:**  
A window function performs calculations across a set of table rows related to the current row. It is used with the `OVER()` clause.

**Example:**  
Calculate the rank of employees based on salary.
```sql
SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;
```

---

### **22. What is the difference between `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`?**
**Answer:**  
- **ROW_NUMBER():** Assigns a unique number to each row.
  ```sql
  SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
  FROM employees;
  ```
- **RANK():** Assigns a rank to each row, with gaps for ties.
  ```sql
  SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rank
  FROM employees;
  ```
- **DENSE_RANK():** Assigns a rank to each row, without gaps for ties.
  ```sql
  SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
  FROM employees;
  ```

---

### **23. What is a CTE (Common Table Expression)?**
**Answer:**  
A CTE is a temporary result set that can be referenced within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement. It improves readability and reusability.

**Example:**  
Find employees with salaries above the average.
```sql
WITH AvgSalary AS (
    SELECT AVG(salary) AS avg_salary FROM employees
)
SELECT name, salary
FROM employees, AvgSalary
WHERE salary > AvgSalary.avg_salary;
```

---

### **24. What is the difference between `CASCADE` and `RESTRICT` in foreign key constraints?**
**Answer:**  
- **CASCADE:** Automatically updates or deletes child rows when the parent row is updated or deleted.
  ```sql
  CREATE TABLE orders (
      order_id INT PRIMARY KEY,
      employee_id INT,
      FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE
  );
  ```
- **RESTRICT:** Prevents the parent row from being updated or deleted if child rows exist.

---

### **25. What is a deadlock?**
**Answer:**  
A deadlock occurs when two or more transactions block each other by holding locks on resources that the other transactions need. The database system resolves deadlocks by aborting one of the transactions.

---

### **26. What is the difference between `BETWEEN` and `IN`?**
**Answer:**  
- **BETWEEN:** Filters values within a range (inclusive).
  ```sql
  SELECT name FROM employees WHERE salary BETWEEN 30000 AND 50000;
  ```
- **IN:** Filters values that match any value in a list.
  ```sql
  SELECT name FROM employees WHERE department IN ('HR', 'Finance');
  ```

---

### **27. What is a full outer join?**
**Answer:**  
A full outer join returns all rows from both tables, with `NULL` values where there is no match.

**Example:**
```sql
SELECT employees.name, orders.product_name
FROM employees
FULL OUTER JOIN orders ON employees.id = orders.employee_id;
```

---

### **28. What is the difference between `UNIQUE` and `PRIMARY KEY`?**
**Answer:**  
- **UNIQUE:** Ensures all values in a column are unique. A table can have multiple `UNIQUE` constraints.
  ```sql
  CREATE TABLE employees (email VARCHAR(100) UNIQUE);
  ```
- **PRIMARY KEY:** Ensures all values in a column are unique and not `NULL`. A table can have only one `PRIMARY KEY`.

---

### **29. What is the purpose of the `COALESCE` function?**
**Answer:**  
The `COALESCE` function returns the first non-null value in a list of arguments.

**Example:**  
Replace `NULL` values with a default value.
```sql
SELECT name, COALESCE(salary, 0) AS salary
FROM employees;
```

---

### **30. What is the difference between `DELETE` and `DROP`?**
**Answer:**  
- **DELETE:** Removes rows from a table.
  ```sql
  DELETE FROM employees WHERE id = 101;
  ```
- **DROP:** Deletes the entire table or database.
  ```sql
  DROP TABLE employees;
  ```

---

### **31. What is the purpose of the `LIMIT` clause?**
**Answer:**  
The `LIMIT` clause restricts the number of rows returned by a query.

**Example:**  
Fetch the top 5 highest-paid employees.
```sql
SELECT name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;
```

---

### **32. What is the difference between `IS NULL` and `IS NOT NULL`?**
**Answer:**  
- **IS NULL:** Checks for `NULL` values.
  ```sql
  SELECT name FROM employees WHERE salary IS NULL;
  ```
- **IS NOT NULL:** Checks for non-null values.
  ```sql
  SELECT name FROM employees WHERE salary IS NOT NULL;
  ```

---

### **33. What is the purpose of the `DISTINCT` keyword?**
**Answer:**  
The `DISTINCT` keyword removes duplicate rows from the result set.

**Example:**  
Fetch unique department names.
```sql
SELECT DISTINCT department FROM employees;
```

---

### **34. What is a trigger?**
**Answer:**  
A trigger is a database object that automatically executes a specified action when a specific event occurs (e.g., `INSERT`, `UPDATE`, `DELETE`).

**Example:**  
Create a trigger to log changes to the `employees` table.
```sql
CREATE TRIGGER log_changes
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (message) VALUES ('Employee record updated');
END;
```

---

### **35. What is the difference between `CROSS JOIN` and `INNER JOIN`?**
**Answer:**  
- **CROSS JOIN:** Returns the Cartesian product of two tables (all possible combinations).
  ```sql
  SELECT * FROM employees CROSS JOIN departments;
  ```
- **INNER JOIN:** Returns only the rows that have matching values in both tables.

---
Absolutely! Here are **even more SQL interview questions and answers** with examples to help you prepare thoroughly:

---

### **36. What is the difference between `HAVING` and `WHERE`?**
**Answer:**  
- **WHERE:** Filters rows before grouping (used with `SELECT`, `UPDATE`, `DELETE`).
- **HAVING:** Filters groups after aggregation (used with `GROUP BY`).

**Example:**  
Find departments with more than 5 employees.
```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

---

### **37. What is the purpose of the `CASE` statement?**
**Answer:**  
The `CASE` statement is used for conditional logic in SQL queries. It works like an `IF-THEN-ELSE` statement.

**Example:**  
Categorize employees based on salary.
```sql
SELECT name, salary,
    CASE
        WHEN salary > 50000 THEN 'High'
        WHEN salary BETWEEN 30000 AND 50000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_category
FROM employees;
```

---

### **38. What is the difference between `UNION` and `JOIN`?**
**Answer:**  
- **UNION:** Combines the result sets of two queries into a single result set (removes duplicates by default).
  ```sql
  SELECT name FROM employees
  UNION
  SELECT name FROM contractors;
  ```
- **JOIN:** Combines columns from two or more tables based on a related column.
  ```sql
  SELECT employees.name, departments.department_name
  FROM employees
  JOIN departments ON employees.department_id = departments.id;
  ```

---

### **39. What is the purpose of the `EXPLAIN` statement?**
**Answer:**  
The `EXPLAIN` statement is used to analyze the execution plan of a query. It helps optimize queries by showing how the database engine processes them.

**Example:**  
Analyze a `SELECT` query.
```sql
EXPLAIN SELECT * FROM employees WHERE department = 'HR';
```

---

### **40. What is a materialized view?**
**Answer:**  
A materialized view is a database object that stores the result of a query physically. It is used to improve performance for complex queries.

**Example:**  
Create a materialized view for active employees.
```sql
CREATE MATERIALIZED VIEW active_employees AS
SELECT name, department
FROM employees
WHERE status = 'active';
```

---

### **41. What is the difference between `ROWNUM` and `ROW_NUMBER()`?**
**Answer:**  
- **ROWNUM:** Assigns a unique number to each row returned by a query (Oracle-specific).
  ```sql
  SELECT name, salary
  FROM employees
  WHERE ROWNUM <= 5;
  ```
- **ROW_NUMBER():** Assigns a unique number to each row within a partition of a result set (standard SQL).
  ```sql
  SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num
  FROM employees;
  ```

---

### **42. What is the purpose of the `WITH CHECK OPTION` in views?**
**Answer:**  
The `WITH CHECK OPTION` ensures that all data modifications made through a view adhere to the view's `WHERE` clause.

**Example:**  
Create a view with `WITH CHECK OPTION`.
```sql
CREATE VIEW high_salary_employees AS
SELECT name, salary
FROM employees
WHERE salary > 50000
WITH CHECK OPTION;
```

---

### **43. What is the difference between `CHAR` and `NCHAR`?**
**Answer:**  
- **CHAR:** Stores fixed-length non-Unicode character data.
- **NCHAR:** Stores fixed-length Unicode character data.

**Example:**
```sql
CREATE TABLE example (
    name CHAR(10),   -- Non-Unicode
    name_n NCHAR(10) -- Unicode
);
```

---

### **44. What is the purpose of the `NULLIF` function?**
**Answer:**  
The `NULLIF` function returns `NULL` if two expressions are equal; otherwise, it returns the first expression.

**Example:**  
Return `NULL` if salary is 0.
```sql
SELECT name, NULLIF(salary, 0) AS salary
FROM employees;
```

---

### **45. What is the difference between `TRUNCATE` and `DROP`?**
**Answer:**  
- **TRUNCATE:** Removes all rows from a table but retains the table structure.
  ```sql
  TRUNCATE TABLE employees;
  ```
- **DROP:** Deletes the entire table structure and data.
  ```sql
  DROP TABLE employees;
  ```

---

### **46. What is the purpose of the `GROUP_CONCAT` function?**
**Answer:**  
The `GROUP_CONCAT` function concatenates values from multiple rows into a single string (MySQL-specific).

**Example:**  
List all employees in each department.
```sql
SELECT department, GROUP_CONCAT(name) AS employees
FROM employees
GROUP BY department;
```

---

### **47. What is the difference between `INNER JOIN` and `CROSS JOIN`?**
**Answer:**  
- **INNER JOIN:** Returns only the rows that have matching values in both tables.
- **CROSS JOIN:** Returns the Cartesian product of two tables (all possible combinations).

**Example:**
```sql
-- INNER JOIN
SELECT employees.name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.id;

-- CROSS JOIN
SELECT employees.name, departments.department_name
FROM employees
CROSS JOIN departments;
```

---

### **48. What is the purpose of the `COLLATE` clause?**
**Answer:**  
The `COLLATE` clause is used to specify the collation (sorting and comparison rules) for a column or expression.

**Example:**  
Sort names case-insensitively.
```sql
SELECT name FROM employees
ORDER BY name COLLATE Latin1_General_CI_AI;
```

---

### **49. What is the difference between `DELETE` and `TRUNCATE` in terms of performance?**
**Answer:**  
- **DELETE:** Slower because it logs each row deletion and can be rolled back.
- **TRUNCATE:** Faster because it deallocates entire data pages and cannot be rolled back.

---

### **50. What is the purpose of the `FETCH` clause?**
**Answer:**  
The `FETCH` clause is used to limit the number of rows returned by a query (standard SQL).

**Example:**  
Fetch the top 10 highest-paid employees.
```sql
SELECT name, salary
FROM employees
ORDER BY salary DESC
FETCH FIRST 10 ROWS ONLY;
```

---

### **51. What is the difference between `UNIQUE` and `DISTINCT`?**
**Answer:**  
- **UNIQUE:** A constraint that ensures all values in a column are unique.
- **DISTINCT:** A keyword used in `SELECT` queries to remove duplicate rows.

---

### **52. What is the purpose of the `PIVOT` and `UNPIVOT` operators?**
**Answer:**  
- **PIVOT:** Converts rows into columns.
- **UNPIVOT:** Converts columns into rows.

**Example:**  
Pivot sales data by year.
```sql
SELECT *
FROM sales
PIVOT (SUM(amount) FOR year IN (2021, 2022, 2023));
```

---

### **53. What is the difference between `DATETIME` and `TIMESTAMP`?**
**Answer:**  
- **DATETIME:** Stores date and time without timezone information.
- **TIMESTAMP:** Stores date and time with timezone information.

---

### **54. What is the purpose of the `LEAD` and `LAG` functions?**
**Answer:**  
- **LEAD:** Accesses data from the next row in the result set.
- **LAG:** Accesses data from the previous row in the result set.

**Example:**  
Compare an employee's salary with the next employee's salary.
```sql
SELECT name, salary,
       LEAD(salary) OVER (ORDER BY salary DESC) AS next_salary
FROM employees;
```

---

### **55. What is the difference between `ROLLUP` and `CUBE`?**
**Answer:**  
- **ROLLUP:** Generates subtotals and grand totals for hierarchical groupings.
- **CUBE:** Generates subtotals for all possible combinations of groupings.

**Example:**  
Calculate subtotals by department and job title.
```sql
SELECT department, job_title, SUM(salary)
FROM employees
GROUP BY ROLLUP(department, job_title);
```

---
Certainly! Here are **even more SQL interview questions and answers** with examples to further enhance your preparation:

---

### **56. What is the difference between `CHAR` and `VARCHAR2`?**
**Answer:**  
- **CHAR:** Fixed-length character data type. It pads spaces to the specified length.
  ```sql
  CREATE TABLE example (name CHAR(10)); -- Always uses 10 characters
  ```
- **VARCHAR2:** Variable-length character data type. It uses only the required space (Oracle-specific).
  ```sql
  CREATE TABLE example (name VARCHAR2(10)); -- Uses up to 10 characters
  ```

---

### **57. What is the purpose of the `NVL` function?**
**Answer:**  
The `NVL` function (Oracle-specific) replaces `NULL` values with a specified default value.

**Example:**  
Replace `NULL` salary with 0.
```sql
SELECT name, NVL(salary, 0) AS salary
FROM employees;
```

---

### **58. What is the difference between `UNION` and `MINUS`?**
**Answer:**  
- **UNION:** Combines the result sets of two queries and removes duplicates.
- **MINUS:** Returns the difference between two result sets (rows in the first query that are not in the second query).

**Example:**  
Find employees who are not managers.
```sql
SELECT name FROM employees
MINUS
SELECT name FROM managers;
```

---

### **59. What is the purpose of the `DECODE` function?**
**Answer:**  
The `DECODE` function (Oracle-specific) is used for conditional logic, similar to `CASE`.

**Example:**  
Categorize employees based on salary.
```sql
SELECT name, salary,
       DECODE(salary, 50000, 'High', 30000, 'Medium', 'Low') AS salary_category
FROM employees;
```

---

### **60. What is the difference between `BETWEEN` and `NOT BETWEEN`?**
**Answer:**  
- **BETWEEN:** Filters values within a range (inclusive).
  ```sql
  SELECT name FROM employees WHERE salary BETWEEN 30000 AND 50000;
  ```
- **NOT BETWEEN:** Filters values outside a range.
  ```sql
  SELECT name FROM employees WHERE salary NOT BETWEEN 30000 AND 50000;
  ```

---

### **61. What is the purpose of the `ROWNUM` pseudo-column?**
**Answer:**  
The `ROWNUM` pseudo-column (Oracle-specific) assigns a unique number to each row returned by a query.

**Example:**  
Fetch the top 5 highest-paid employees.
```sql
SELECT name, salary
FROM employees
WHERE ROWNUM <= 5
ORDER BY salary DESC;
```

---

### **62. What is the difference between `INTERSECT` and `EXCEPT`?**
**Answer:**  
- **INTERSECT:** Returns the common rows between two result sets.
  ```sql
  SELECT name FROM employees
  INTERSECT
  SELECT name FROM managers;
  ```
- **EXCEPT:** Returns the rows in the first result set that are not in the second result set (similar to `MINUS` in Oracle).

---

### **63. What is the purpose of the `MERGE` statement?**
**Answer:**  
The `MERGE` statement (also known as `UPSERT`) combines `INSERT`, `UPDATE`, and `DELETE` operations into a single statement.

**Example:**  
Update or insert employee records.
```sql
MERGE INTO employees e
USING new_employees n
ON e.id = n.id
WHEN MATCHED THEN
    UPDATE SET e.salary = n.salary
WHEN NOT MATCHED THEN
    INSERT (id, name, salary) VALUES (n.id, n.name, n.salary);
```

---
