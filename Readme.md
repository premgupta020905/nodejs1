# Node.js HTTP Server

A basic web server built using Node.js core modules. This project demonstrates how to create a server, handle routes, serve HTML files, and manage HTTP status codes without using Express.js.

# Features

- Created a web server using Node.js
- Used the built-in `http` module
- Used the built-in `fs` (File System) module
- Implemented basic routing
- Served HTML files dynamically
- Added HTTP status codes
- Added 404 Page Not Found handling
- Added 500 Internal Server Error handling
- Runs on port 3000

# HTTP Status Codes

200 - OK
Returned when the requested HTML file is successfully found and served.

404 - Not Found
Returned when the requested route does not exist.

500 - Internal Server Error
Returned when the server encounters an error while reading an HTML file.

▶️ How to Run
1. Clone or download the project
Open the project folder in VS Code.

2. Open the terminal
Run:- npm install

3. Start the server
node server.js
You should see:- Server running on port 3000

4. Open the routes in your browser
Home:-
http://localhost:3000/home

About:-
http://localhost:3000/about

Contact:-
http://localhost:3000/contact

To test the 404 page:-
http://localhost:3000/anything

# What I Learned

Through this project, I learned:

How Node.js HTTP servers work
How to use the http module
How to create routes using req.url
How to read files using fs.readFile()
How to send responses using res.end()
How to use HTTP status codes
How to handle errors
How to serve HTML files from a Node.js server

# Created by 
Prem Gupta