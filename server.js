// Import the 'http' module, which provides functionality for creating HTTP servers.
const http = require("http");

// Define the hostname and port on which the server will listen.
const hostname = "127.0.0.1"; // This is the IP address of the server (localhost).
const port = 3000; // This is the port number the server will listen on.

// Create an HTTP server using the 'http.createServer' method. It takes a callback function
// that is called for each incoming HTTP request.
// The createServer() method of http creates a new HTTP server and returns it.
const server = http.createServer((req, res) => {
console.log("REQ", req)

  // Set the HTTP response status code to 200, indicating a successful response.
  res.statusCode = 200;

  // Set the 'Content-Type' header of the response to 'text/plain', indicating that
  // the response will contain plain text.
  res.setHeader("Content-Type", "text/plain");

  // End the response by sending the text 'Hello World' as the response body.
  res.end("Hello World\n");
});

// Start the server and make it listen on the specified hostname and port.
server.listen(port, hostname, () => {
  // This callback function is executed once the server starts listening.
  console.log(`Server running at http://${hostname}:${port}/`);
});
