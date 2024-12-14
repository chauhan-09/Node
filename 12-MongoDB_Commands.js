/* 

It is not mandatory to use semi-colon at the end of the command

1. Create a DB

   use db_name; 
   e.g use student; 

2. How to see the collections in a db
   
   show collections;

3. create a new collection in a db

   db.createCollection("users");

4. Insert a new record in db
   
   db.users.insertOne({ name : "alice" , age : 25 , class : 12});

5. display all records in a collection

   db.users.find();

6. Get a record based on a specific condition

   db.users.findOne({age : { $gt : 20}});

   Getting the records where the age is greater than 20.
   $gt is an operator which gives greater than values , age is the field name
   $lt is an operator which gives less than values.

7. Update records in a collection

   db.users.updateOne({name:'alice'} , {$set: {age : 25}});

   Updating records where name is alice and setting age to 25
   $set is an operator which sets the value

   db.users.updateOne({$set: {age : 25}}); 
   this will not update all the values like in SQL , will give us an error

8. Delete a record

   db.users.deleteOne({name : 'maxi'});  this will delete all the records having the name maxi 
   db.users.deleteOne({age : {$gt: 20}); this will delete all the records having age greater than 20

*/