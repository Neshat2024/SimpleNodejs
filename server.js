// Import the http module
const http = require('http');

// Define the port to listen on
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body
    res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});