/*

A body parser is a express.js middleware library.

It is used to parse and extract the body of incoming HTTP requests

When a client (e.g a web browser or a mobile app) sends data to a server, it typically includes that data in the body of an HTTP request
This data can be in various formats such as JSON,form data or URL-encoded data. 

body parser helps parse and extract this data from the request so that you can work with it in your express.js application

bodyparser processes the request body before it reaches your route handlers,making the parsed data available in req.body for further processing

bodyParser.json() automatically parses the JSON data from the request body and converts it into a JS Object,which is then stored in the req.body.

*/