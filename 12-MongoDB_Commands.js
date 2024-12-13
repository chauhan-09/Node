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

   



*/