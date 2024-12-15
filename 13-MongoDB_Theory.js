/*

MongoDB Driver

To connect Mongodb with node.js we need a Mongodb driver (a set of programs)
A mongodb drivers acts as a bridge between our node.js application and mongodb database.
Mongodb has its own language to interact with database server
Node.js communicates in javascript
The driver translates the js code from node.js into a format mongodb can understand and vice versa.
The driver provides a set of functions and methods that make it easier to perform common database operations from your node.js code
The driver helps you handle errors that might occur during database interactions.It provides error codes , descriptions and other details to help you troubleshoot problems
The most popular driver is the official MongoDB Node.js driver aka monogodb package i.e npm install mongodb


Mongoose

Mongoose is prefer over MongoDB
Mongoose is an ODM (Object Data Modelling) library for Mongodb and node.js
With mongoose we can define how our data will look in short we can define schema
Mongoose make sure that order of data sending to the db is correct

Mongdb diver vs Mongoose

1.We have to write a lot more code when using Mongodb driver
2.Without Mongoose your code might look messy and harder to understand 
3.Since we have to handle everything ourselves Mongodb driver takes a lot of time
4.Mongoose provide tools that can handle complexities for us , making our web-dev experience simpler.



*/