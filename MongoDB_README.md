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

Certainly! Here are **more MongoDB interview questions and answers with examples** to deepen your understanding and help you prepare thoroughly.

---

### **21. What is the difference between `$push` and `$addToSet` in MongoDB?**
**Answer:**  
- `$push` adds an element to an array, even if it already exists.
- `$addToSet` adds an element to an array only if it does not already exist.

**Example:**  
```javascript
// Using $push
db.users.updateOne(
  { name: "Alice" },
  { $push: { hobbies: "reading" } }
);

// Using $addToSet
db.users.updateOne(
  { name: "Alice" },
  { $addToSet: { hobbies: "reading" } }
);
```

---

### **22. How do you rename a field in MongoDB?**
**Answer:**  
You can use the `$rename` operator to rename a field.

**Example:**  
```javascript
db.users.updateMany(
  {},
  { $rename: { "email": "contactEmail" } }
);
```

---

### **23. What is the `$inc` operator used for?**
**Answer:**  
The `$inc` operator increments the value of a field by a specified amount.

**Example:**  
```javascript
db.users.updateOne(
  { name: "Alice" },
  { $inc: { age: 1 } } // Increment age by 1
);
```

---

### **24. How do you perform text search in MongoDB?**
**Answer:**  
You can create a text index and use the `$text` operator to perform text search.

**Example:**  
```javascript
// Create a text index on the "name" field
db.users.createIndex({ name: "text" });

// Perform a text search
db.users.find({ $text: { $search: "Alice" } });
```

---

### **25. What is the `$unwind` operator in the aggregation framework?**
**Answer:**  
The `$unwind` operator deconstructs an array field, creating a separate document for each element.

**Example:**  
```javascript
db.users.aggregate([
  { $unwind: "$hobbies" }
]);
```

---

### **26. How do you count documents in a collection?**
**Answer:**  
You can use the `countDocuments()` method to count documents.

**Example:**  
```javascript
// Count all documents in the "users" collection
db.users.countDocuments();

// Count documents matching a condition
db.users.countDocuments({ age: { $gt: 25 } });
```

---

### **27. What is the `$group` operator used for?**
**Answer:**  
The `$group` operator groups documents by a specified key and applies aggregate functions like `$sum`, `$avg`, etc.

**Example:**  
```javascript
db.users.aggregate([
  { $group: { _id: "$age", total: { $sum: 1 } } }
]);
```

---

### **28. How do you sort documents in MongoDB?**
**Answer:**  
You can use the `sort()` method to sort documents.

**Example:**  
```javascript
// Sort by age in ascending order
db.users.find().sort({ age: 1 });

// Sort by age in descending order
db.users.find().sort({ age: -1 });
```

---

### **29. What is the `$project` operator used for?**
**Answer:**  
The `$project` operator is used to include or exclude fields in the output of an aggregation pipeline.

**Example:**  
```javascript
db.users.aggregate([
  { $project: { name: 1, age: 1, _id: 0 } }
]);
```

---

### **30. How do you handle duplicate data in MongoDB?**
**Answer:**  
You can use the `$addToSet` operator to avoid duplicates in arrays or use the aggregation framework to remove duplicates.

**Example:**  
```javascript
// Remove duplicates using aggregation
db.users.aggregate([
  { $group: { _id: "$email", doc: { $first: "$$ROOT" } } },
  { $replaceRoot: { newRoot: "$doc" } }
]);
```

---

### **31. What is the `$lookup` operator used for?**
**Answer:**  
The `$lookup` operator performs a left outer join between two collections.

**Example:**  
```javascript
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

### **32. How do you handle pagination in MongoDB?**
**Answer:**  
You can use the `skip()` and `limit()` methods for pagination.

**Example:**  
```javascript
// Paginate results (page 2, 10 documents per page)
db.users.find().skip(10).limit(10);
```

---

### **33. What is the `$expr` operator used for?**
**Answer:**  
The `$expr` operator allows the use of aggregation expressions within the query language.

**Example:**  
```javascript
db.users.find({
  $expr: { $gt: ["$age", "$minAge"] }
});
```

---

### **34. How do you perform geospatial queries in MongoDB?**
**Answer:**  
You can use geospatial indexes and operators like `$near`, `$geoWithin`, etc.

**Example:**  
```javascript
// Create a 2dsphere index
db.places.createIndex({ location: "2dsphere" });

// Find places near a specific location
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [ -73.97, 40.77 ] },
      $maxDistance: 1000
    }
  }
});
```

---

### **35. What is the `$out` operator used for?**
**Answer:**  
The `$out` operator writes the results of an aggregation pipeline to a new collection.

**Example:**  
```javascript
db.users.aggregate([
  { $group: { _id: "$age", total: { $sum: 1 } } },
  { $out: "ageSummary" }
]);
```

---

### **36. How do you handle schema validation in MongoDB?**
**Answer:**  
You can use the `validator` option to enforce schema validation.

**Example:**  
```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string" },
        age: { bsonType: "int", minimum: 18 }
      }
    }
  }
});
```

---

### **37. What is the `$merge` operator used for?**
**Answer:**  
The `$merge` operator writes the results of an aggregation pipeline to an existing collection, merging or replacing documents.

**Example:**  
```javascript
db.users.aggregate([
  { $group: { _id: "$age", total: { $sum: 1 } } },
  { $merge: { into: "ageSummary", whenMatched: "merge" } }
]);
```

---

### **38. How do you handle large datasets in MongoDB?**
**Answer:**  
- Use sharding to distribute data across multiple servers.
- Use indexes to optimize queries.
- Use the aggregation framework for data processing.

---

### **39. What is the `$facet` operator used for?**
**Answer:**  
The `$facet` operator allows you to run multiple aggregation pipelines within a single stage.

**Example:**  
```javascript
db.users.aggregate([
  {
    $facet: {
      ageGroups: [
        { $group: { _id: "$age", total: { $sum: 1 } } }
      ],
      topUsers: [
        { $sort: { age: -1 } },
        { $limit: 5 }
      ]
    }
  }
]);
```

---

### **40. How do you monitor slow queries in MongoDB?**
**Answer:**  
Use the `db.setProfilingLevel()` method to enable query profiling.

**Example:**  
```javascript
// Enable profiling for slow queries
db.setProfilingLevel(1, 100); // Log queries slower than 100ms

// View profiled queries
db.system.profile.find().pretty();
```

---

Certainly! Here are **even more MongoDB interview questions and answers with examples** to help you prepare thoroughly for your interview. These questions cover advanced topics and practical scenarios.

---

### **41. What is the `$graphLookup` operator used for?**
**Answer:**  
The `$graphLookup` operator performs recursive searches on collections, useful for hierarchical or graph-like data.

**Example:**  
```javascript
db.employees.aggregate([
  {
    $graphLookup: {
      from: "employees",
      startWith: "$reportsTo",
      connectFromField: "reportsTo",
      connectToField: "_id",
      as: "managers"
    }
  }
]);
```

---

### **42. How do you handle array updates in MongoDB?**
**Answer:**  
You can use operators like `$push`, `$pull`, `$addToSet`, and `$pop` to update arrays.

**Example:**  
```javascript
// Add an element to an array
db.users.updateOne(
  { name: "Alice" },
  { $push: { hobbies: "swimming" } }
);

// Remove an element from an array
db.users.updateOne(
  { name: "Alice" },
  { $pull: { hobbies: "reading" } }
);
```

---

### **43. What is the `$slice` operator used for?**
**Answer:**  
The `$slice` operator limits the number of elements returned from an array.

**Example:**  
```javascript
// Return the first 3 hobbies
db.users.find({ name: "Alice" }, { hobbies: { $slice: 3 } });

// Return the last 2 hobbies
db.users.find({ name: "Alice" }, { hobbies: { $slice: -2 } });
```

---

### **44. How do you handle transactions across multiple collections?**
**Answer:**  
MongoDB supports multi-document ACID transactions across multiple collections.

**Example:**  
```javascript
const session = db.getMongo().startSession();
session.startTransaction();
try {
  const users = session.getDatabase("mydatabase").users;
  const orders = session.getDatabase("mydatabase").orders;

  users.insertOne({ name: "Alice", age: 25 });
  orders.insertOne({ userId: ObjectId("64b8f1a2e4b0a1a2b3c4d5e6"), product: "Laptop" });

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
} finally {
  session.endSession();
}
```

---

### **45. What is the `$bucket` operator used for?**
**Answer:**  
The `$bucket` operator groups documents into buckets based on a specified expression.

**Example:**  
```javascript
db.users.aggregate([
  {
    $bucket: {
      groupBy: "$age",
      boundaries: [0, 18, 30, 50, 100],
      output: {
        count: { $sum: 1 },
        names: { $push: "$name" }
      }
    }
  }
]);
```

---

### **46. How do you handle data validation in MongoDB?**
**Answer:**  
You can use schema validation rules when creating or modifying collections.

**Example:**  
```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string" },
        age: { bsonType: "int", minimum: 18 }
      }
    }
  }
});
```

---

### **47. What is the `$mergeObjects` operator used for?**
**Answer:**  
The `$mergeObjects` operator merges multiple documents into a single document.

**Example:**  
```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$name",
      mergedDetails: { $mergeObjects: "$details" }
    }
  }
]);
```

---

### **48. How do you handle time-series data in MongoDB?**
**Answer:**  
MongoDB 5.0 introduced time-series collections for efficient storage and querying of time-series data.

**Example:**  
```javascript
// Create a time-series collection
db.createCollection("weather", {
  timeseries: {
    timeField: "timestamp",
    metaField: "location",
    granularity: "hours"
  }
});

// Insert time-series data
db.weather.insertOne({
  timestamp: ISODate("2023-10-01T12:00:00Z"),
  location: "New York",
  temperature: 22.5
});
```

---

### **49. What is the `$dateToString` operator used for?**
**Answer:**  
The `$dateToString` operator converts a date object to a string in a specified format.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      formattedDate: {
        $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
      }
    }
  }
]);
```

---

### **50. How do you handle full-text search in MongoDB?**
**Answer:**  
You can create a text index and use the `$text` operator for full-text search.

**Example:**  
```javascript
// Create a text index
db.articles.createIndex({ content: "text" });

// Perform a full-text search
db.articles.find({ $text: { $search: "MongoDB tutorial" } });
```

---

### **51. What is the `$cond` operator used for?**
**Answer:**  
The `$cond` operator is a ternary operator that evaluates a condition and returns one of two values.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      status: {
        $cond: { if: { $gte: ["$age", 18] }, then: "Adult", else: "Minor" }
      }
    }
  }
]);
```

---

### **52. How do you handle data encryption in MongoDB?**
**Answer:**  
MongoDB supports encryption at rest and in transit. You can enable encryption using the `WiredTiger` storage engine.

**Example:**  
```yaml
# Enable encryption in MongoDB configuration
security:
  enableEncryption: true
  encryptionKeyFile: /path/to/keyfile
```

---

### **53. What is the `$arrayElemAt` operator used for?**
**Answer:**  
The `$arrayElemAt` operator returns the element at a specified array index.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      firstHobby: { $arrayElemAt: ["$hobbies", 0] }
    }
  }
]);
```

---

### **54. How do you handle data replication in MongoDB?**
**Answer:**  
MongoDB uses replica sets to replicate data across multiple nodes for high availability.

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

### **55. What is the `$type` operator used for?**
**Answer:**  
The `$type` operator filters documents based on the BSON type of a field.

**Example:**  
```javascript
// Find documents where "age" is a number
db.users.find({ age: { $type: "number" } });
```

---

### **56. How do you handle data sharding in MongoDB?**
**Answer:**  
Sharding distributes data across multiple servers. You need to enable sharding and define a shard key.

**Example:**  
```javascript
// Enable sharding for a database
sh.enableSharding("mydatabase");

// Shard a collection based on a shard key
sh.shardCollection("mydatabase.users", { userId: 1 });
```

---

### **57. What is the `$regex` operator used for?**
**Answer:**  
The `$regex` operator allows you to perform pattern matching on string fields.

**Example:**  
```javascript
// Find users with names starting with "A"
db.users.find({ name: { $regex: /^A/ } });
```

---

### **58. How do you handle data archiving in MongoDB?**
**Answer:**  
You can use TTL indexes or move old data to a separate collection for archiving.

**Example:**  
```javascript
// Create a TTL index for archiving
db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); // 30 days
```

---

### **59. What is the `$setUnion` operator used for?**
**Answer:**  
The `$setUnion` operator returns an array of unique elements from multiple arrays.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      allHobbies: { $setUnion: ["$hobbies1", "$hobbies2"] }
    }
  }
]);
```

---

### **60. How do you handle data backups in MongoDB?**
**Answer:**  
Use `mongodump` to create backups and `mongorestore` to restore data.

**Example:**  
```bash
# Backup a database
mongodump --db mydatabase --out /backup

# Restore a database
mongorestore --db mydatabase /backup/mydatabase
```

---

Certainly! Here are **even more MongoDB interview questions and answers with examples** to help you prepare thoroughly for your interview. These questions cover advanced topics, practical scenarios, and performance optimization techniques.

---

### **61. What is the `$map` operator used for?**
**Answer:**  
The `$map` operator applies an expression to each element of an array and returns a new array.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      uppercaseNames: {
        $map: {
          input: "$names",
          as: "name",
          in: { $toUpper: "$$name" }
        }
      }
    }
  }
]);
```

---

### **62. How do you handle data deduplication in MongoDB?**
**Answer:**  
You can use the aggregation framework to identify and remove duplicates.

**Example:**  
```javascript
db.users.aggregate([
  { $group: { _id: "$email", doc: { $first: "$$ROOT" } } },
  { $replaceRoot: { newRoot: "$doc" } },
  { $out: "deduplicatedUsers" }
]);
```

---

### **63. What is the `$reduce` operator used for?**
**Answer:**  
The `$reduce` operator reduces an array to a single value using an expression.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      totalAge: {
        $reduce: {
          input: "$ages",
          initialValue: 0,
          in: { $add: ["$$value", "$$this"] }
        }
      }
    }
  }
]);
```

---

### **64. How do you handle data versioning in MongoDB?**
**Answer:**  
You can add a version field to documents and increment it on updates.

**Example:**  
```javascript
db.products.updateOne(
  { _id: ObjectId("64b8f1a2e4b0a1a2b3c4d5e6") },
  { $inc: { version: 1 }, $set: { name: "New Product Name" } }
);
```

---

### **65. What is the `$switch` operator used for?**
**Answer:**  
The `$switch` operator evaluates multiple conditions and returns a value based on the first matching case.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      status: {
        $switch: {
          branches: [
            { case: { $lt: ["$age", 18] }, then: "Minor" },
            { case: { $lt: ["$age", 65] }, then: "Adult" }
          ],
          default: "Senior"
        }
      }
    }
  }
]);
```

---

### **66. How do you handle data partitioning in MongoDB?**
**Answer:**  
You can use sharding to partition data across multiple servers.

**Example:**  
```javascript
// Enable sharding for a database
sh.enableSharding("mydatabase");

// Shard a collection based on a shard key
sh.shardCollection("mydatabase.users", { userId: 1 });
```

---

### **67. What is the `$indexOfArray` operator used for?**
**Answer:**  
The `$indexOfArray` operator returns the index of the first occurrence of a value in an array.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      index: { $indexOfArray: ["$hobbies", "reading"] }
    }
  }
]);
```

---

### **68. How do you handle data compression in MongoDB?**
**Answer:**  
MongoDB supports compression using the `WiredTiger` storage engine. You can configure compression at the collection level.

**Example:**  
```javascript
db.createCollection("logs", {
  storageEngine: {
    wiredTiger: {
      configString: "block_compressor=snappy"
    }
  }
});
```

---

### **69. What is the `$concatArrays` operator used for?**
**Answer:**  
The `$concatArrays` operator concatenates multiple arrays into a single array.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      allHobbies: { $concatArrays: ["$hobbies1", "$hobbies2"] }
    }
  }
]);
```

---

### **70. How do you handle data archiving in MongoDB?**
**Answer:**  
You can use TTL indexes or move old data to a separate collection for archiving.

**Example:**  
```javascript
// Create a TTL index for archiving
db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); // 30 days
```

---

### **71. What is the `$arrayToObject` operator used for?**
**Answer:**  
The `$arrayToObject` operator converts an array of key-value pairs into a document.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      userDetails: {
        $arrayToObject: [
          ["name", "Alice"],
          ["age", 25]
        ]
      }
    }
  }
]);
```

---

### **72. How do you handle data replication lag in MongoDB?**
**Answer:**  
You can monitor replication lag using the `rs.status()` command and optimize network performance.

**Example:**  
```javascript
// Check replication status
rs.status();
```

---

### **73. What is the `$objectToArray` operator used for?**
**Answer:**  
The `$objectToArray` operator converts a document into an array of key-value pairs.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      keyValuePairs: { $objectToArray: "$details" }
    }
  }
]);
```

---

### **74. How do you handle data consistency in MongoDB?**
**Answer:**  
MongoDB ensures consistency through replica sets and write concerns.

**Example:**  
```javascript
// Use write concern to ensure data consistency
db.users.insertOne(
  { name: "Alice", age: 25 },
  { writeConcern: { w: "majority" } }
);
```

---

### **75. What is the `$mergeObjects` operator used for?**
**Answer:**  
The `$mergeObjects` operator merges multiple documents into a single document.

**Example:**  
```javascript
db.users.aggregate([
  {
    $group: {
      _id: "$name",
      mergedDetails: { $mergeObjects: "$details" }
    }
  }
]);
```

---

### **76. How do you handle data indexing in MongoDB?**
**Answer:**  
You can create indexes to improve query performance.

**Example:**  
```javascript
// Create an index on the "email" field
db.users.createIndex({ email: 1 });

// Create a compound index
db.users.createIndex({ name: 1, age: -1 });
```

---

### **77. What is the `$dateFromString` operator used for?**
**Answer:**  
The `$dateFromString` operator converts a string to a date object.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      date: {
        $dateFromString: { dateString: "$dateString", format: "%Y-%m-%d" }
      }
    }
  }
]);
```

---

### **78. How do you handle data validation in MongoDB?**
**Answer:**  
You can use schema validation rules when creating or modifying collections.

**Example:**  
```javascript
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string" },
        age: { bsonType: "int", minimum: 18 }
      }
    }
  }
});
```

---

### **79. What is the `$split` operator used for?**
**Answer:**  
The `$split` operator splits a string into an array of substrings based on a delimiter.

**Example:**  
```javascript
db.users.aggregate([
  {
    $project: {
      words: { $split: ["$sentence", " "] }
    }
  }
]);
```

---

### **80. How do you handle data backups in MongoDB?**
**Answer:**  
Use `mongodump` to create backups and `mongorestore` to restore data.

**Example:**  
```bash
# Backup a database
mongodump --db mydatabase --out /backup

# Restore a database
mongorestore --db mydatabase /backup/mydatabase
```

---

