Here’s a detailed list of **MongoDB interview questions and answers with examples** to help you prepare for your interview. These examples will help you understand how MongoDB works in practice.

---

### **1. What is a Document in MongoDB?**
**Answer:**  
A document is a set of key-value pairs stored in BSON (Binary JSON) format. It is the basic unit of data in MongoDB.

**Example:**  
```json
{
  "_id": ObjectId("64b8f1a2e4b0a1a2b3c4d5e6"),
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```

---

### **2. How do you insert a document into a collection?**
**Answer:**  
You can use the `insertOne()` or `insertMany()` method to insert documents into a collection.

**Example:**  
```javascript
// Insert a single document
db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com"
});

// Insert multiple documents
db.users.insertMany([
  { name: "Bob", age: 28, email: "bob@example.com" },
  { name: "Charlie", age: 22, email: "charlie@example.com" }
]);
```

---

### **3. How do you query documents in MongoDB?**
**Answer:**  
You can use the `find()` method to query documents. You can also add filters to narrow down the results.

**Example:**  
```javascript
// Find all documents in the "users" collection
db.users.find();

// Find users older than 25
db.users.find({ age: { $gt: 25 } });

// Find a user by name
db.users.find({ name: "Alice" });
```

---

### **4. What is the difference between `find()` and `findOne()`?**
**Answer:**  
- `find()` returns a cursor to all matching documents.
- `findOne()` returns the first matching document.

**Example:**  
```javascript
// Using find()
db.users.find({ age: { $gt: 25 } }); // Returns all users older than 25

// Using findOne()
db.users.findOne({ age: { $gt: 25 } }); // Returns the first user older than 25
```

---

### **5. How do you update a document in MongoDB?**
**Answer:**  
You can use the `updateOne()` or `updateMany()` method to update documents.

**Example:**  
```javascript
// Update a single document
db.users.updateOne(
  { name: "Alice" }, // Filter
  { $set: { age: 26 } } // Update operation
);

// Update multiple documents
db.users.updateMany(
  { age: { $lt: 30 } }, // Filter
  { $set: { status: "young" } } // Update operation
);
```

---

### **6. How do you delete a document in MongoDB?**
**Answer:**  
You can use the `deleteOne()` or `deleteMany()` method to delete documents.

**Example:**  
```javascript
// Delete a single document
db.users.deleteOne({ name: "Alice" });

// Delete multiple documents
db.users.deleteMany({ age: { $lt: 30 } });
```

---

### **7. What is the purpose of the `_id` field?**
**Answer:**  
The `_id` field is a unique identifier for each document. If not provided, MongoDB automatically generates an `ObjectId`.

**Example:**  
```json
{
  "_id": ObjectId("64b8f1a2e4b0a1a2b3c4d5e6"),
  "name": "John Doe",
  "age": 30
}
```

---

### **8. How do you create an index in MongoDB?**
**Answer:**  
You can use the `createIndex()` method to create an index on a field.

**Example:**  
```javascript
// Create an index on the "email" field
db.users.createIndex({ email: 1 });

// Create a compound index on "name" and "age"
db.users.createIndex({ name: 1, age: -1 });
```

---

### **9. What is the aggregation framework in MongoDB?**
**Answer:**  
The aggregation framework is used for data processing and transformation. It uses a pipeline of stages like `$match`, `$group`, `$sort`, and `$project`.

**Example:**  
```javascript
// Group users by age and count the number of users in each group
db.users.aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);
```

---

### **10. How do you perform a join in MongoDB?**
**Answer:**  
You can use the `$lookup` stage in the aggregation framework to perform a left outer join.

**Example:**  
```javascript
// Join "orders" collection with "users" collection
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  }
]);
```

---

### **11. What is sharding in MongoDB?**
**Answer:**  
Sharding is a method for distributing data across multiple servers to handle large datasets and high throughput operations.

**Example:**  
```javascript
// Enable sharding for a database
sh.enableSharding("mydatabase");

// Shard a collection based on a shard key
sh.shardCollection("mydatabase.users", { userId: 1 });
```

---

### **12. What is a replica set in MongoDB?**
**Answer:**  
A replica set is a group of MongoDB instances that maintain the same data set. It provides high availability and fault tolerance.

**Example:**  
```bash
# Initialize a replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb1:27017" },
    { _id: 1, host: "mongodb2:27017" },
    { _id: 2, host: "mongodb3:27017" }
  ]
});
```

---

### **13. How do you back up and restore data in MongoDB?**
**Answer:**  
Use `mongodump` to create a backup and `mongorestore` to restore data.

**Example:**  
```bash
# Backup a database
mongodump --db mydatabase --out /backup

# Restore a database
mongorestore --db mydatabase /backup/mydatabase
```

---

### **14. What is TTL (Time-To-Live) index?**
**Answer:**  
A TTL index automatically removes documents after a specified amount of time.

**Example:**  
```javascript
// Create a TTL index on the "createdAt" field
db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

---

### **15. How do you handle transactions in MongoDB?**
**Answer:**  
MongoDB supports multi-document ACID transactions.

**Example:**  
```javascript
const session = db.getMongo().startSession();
session.startTransaction();
try {
  const users = session.getDatabase("mydatabase").users;
  users.insertOne({ name: "Alice", age: 25 });
  users.updateOne({ name: "Bob" }, { $set: { age: 30 } });
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
} finally {
  session.endSession();
}
```

---

### **16. How do you optimize MongoDB queries?**
**Answer:**  
- Use indexes effectively.
- Use the `explain()` method to analyze query performance.
- Avoid full collection scans.

**Example:**  
```javascript
// Analyze query performance
db.users.find({ age: { $gt: 25 } }).explain("executionStats");
```

---

### **17. What is the difference between MongoDB and Cassandra?**
**Answer:**  
- MongoDB is a document-oriented database, while Cassandra is a wide-column store.
- MongoDB is better for complex queries, while Cassandra is optimized for high write throughput.

---

### **18. How do you secure a MongoDB database?**
**Answer:**  
- Enable authentication and authorization.
- Use role-based access control (RBAC).
- Encrypt data in transit and at rest.

**Example:**  
```bash
# Enable authentication in MongoDB configuration
security:
  authorization: enabled
```

---

### **19. What is the role of the `mongos` process?**
**Answer:**  
`mongos` is a routing service for MongoDB sharded clusters. It directs queries to the appropriate shards.

---

### **20. How do you monitor MongoDB performance?**
**Answer:**  
Use tools like `mongostat`, `mongotop`, and the `db.serverStatus()` command.

**Example:**  
```bash
# Monitor MongoDB performance
mongostat
```

---

Let me know if you need further clarification or additional examples!