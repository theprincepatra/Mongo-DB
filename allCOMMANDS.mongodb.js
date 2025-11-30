// --------------------------------------
// DATABASE COMMANDS
// --------------------------------------
console.log("======== DATABASE COMMANDS ========");

// List all databases
console.log("All databases:", db.getMongo().getDBs());

// Switch / create database
use("TestDB");

// Show current DB
console.log("Current DB:", db.getName());

// Drop current database
console.log("Drop DB result:", db.dropDatabase());





// --------------------------------------
// COLLECTION COMMANDS
// --------------------------------------
console.log("\n======== COLLECTION COMMANDS ========");

// Create a collection
console.log("Collection created:", db.createCollection("courses"));

// Show all collections
console.log("Collections:", db.getCollectionNames());

// Drop a collection
console.log("Drop collection:", db.courses.drop());





// --------------------------------------
// INSERT DOCUMENTS
// --------------------------------------
console.log("\n======== INSERT COMMANDS ========");

// Insert ONE
console.log("Insert one:", db.courses.insertOne({
  name: "TPP Web Dev",
  price: 0,
  assignment: 12,
  projects: 50
}));

// Insert MANY
console.log("Insert many:", db.courses.insertMany([
  { name: "JS Basics", price: 499, assignment: 10, projects: 2 },
  { name: "Python", price: 699, assignment: 12, projects: 3 },
  { name: "MongoDB", price: 399, assignment: 8, projects: 2 },
  { name: "React", price: 899, assignment: 15, projects: 4 }
]));





// --------------------------------------
// READ / FIND DOCUMENTS
// --------------------------------------
console.log("\n======== READ / FIND COMMANDS ========");

// Find all docs
console.log("All docs:", db.courses.find().toArray());

// Find one doc
console.log("One doc:", db.courses.findOne());

// Find exact match
console.log("Find 'Python':", db.courses.find({ name: "Python" }).toArray());

// Projection
console.log("Projection (name & price):",
  db.courses.find({}, { name: 1, price: 1, _id: 0 }).toArray());

// Operators
console.log("Price > 500:",
  db.courses.find({ price: { $gt: 500 } }).toArray());
console.log("Price < 800:",
  db.courses.find({ price: { $lt: 800 } }).toArray());
console.log("Price in [499, 899]:",
  db.courses.find({ price: { $in: [499, 899] } }).toArray());

// AND Condition
console.log("AND condition:",
  db.courses.find({
    price: { $gt: 400 },projects: { $gte: 2 }}).toArray());

// OR Condition
console.log("OR condition:",
  db.courses.find({
    $or: [
      { price: { $lt: 500 } },
      { projects: { $gt: 3 } }
    ]
  }).toArray()
);

// Limit
console.log("Limit 2:", db.courses.find().limit(2).toArray());

// Sort ascending
console.log("Sort ascending (price):",
  db.courses.find().sort({ price: 1 }).toArray());

// Sort descending
console.log("Sort descending (price):",
  db.courses.find().sort({ price: -1 }).toArray());





// --------------------------------------
// UPDATE COMMANDS
// --------------------------------------
console.log("\n======== UPDATE COMMANDS ========");

// Update ONE
console.log("Update one (JS Basics price to 1000):",
  db.courses.updateOne(
    { name: "JS Basics" },
    { $set: { price: 1000 } }
  )
);

// Update MANY
console.log("Update many (increase price by 100):",
  db.courses.updateMany(
    {},
    { $inc: { price: 100 } }
  )
);

// Add new field
console.log("Add rating field:",
  db.courses.updateMany(
    {},
    { $set: { rating: 5 } }
  )
);

// Remove a field
console.log("Unset duration field:",
  db.courses.updateMany(
    {},
    { $unset: { duration: "" } }
  )
);

// Rename field
console.log("Rename assignment to assignments:",
  db.courses.updateMany(
    {},
    { $rename: { assignment: "assignments" } }
  )
);





// --------------------------------------
// DELETE COMMANDS
// --------------------------------------
console.log("\n======== DELETE COMMANDS ========");

// Delete one
console.log("Delete one (MongoDB):",
  db.courses.deleteOne({ name: "MongoDB" })
);

// Delete many
console.log("Delete many (price > 900):",
  db.courses.deleteMany({ price: { $gt: 900 } })
);

// Delete all
console.log("Delete all:", db.courses.deleteMany({}));
