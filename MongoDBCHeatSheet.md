# MongoDB Cheat Sheet

## Database
db.getMongo().getDBs()

use("TestDB")

db.getName()

db.dropDatabase()

## Collections
db.createCollection("courses")

db.getCollectionNames()

db.courses.drop()


## Insert
db.courses.insertOne({...})

db.courses.insertMany([...])


## Find
db.courses.find().toArray()

db.courses.findOne()


## Operators
$gt, $lt, $in, $and, $or

## Update
$set, $inc, $unset, $rename

## Delete
deleteOne

deleteMany

drop
