// Import the 'http' module
const http = require('http');

// Define the query parameters and the URL
const query = 'Node.js';
const path = `/search?query=${encodeURIComponent(query)}`;
const options = {
  hostname: 'example.com',
  port: 80,
  path: path,
  method: 'GET'
};

// Make the GET request
const req = http.request(options, (res) => {
  let data = '';

  // Collect the data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // When the response has been fully received
  res.on('end', () => {
    console.log(data);
  });
});

// Handle any errors
req.on('error', (e) => {
  console.error('Error making request:', e);
});

// End the request
req.end();
