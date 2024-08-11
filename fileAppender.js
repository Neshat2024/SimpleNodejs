// Import the 'fs' module
const fs = require('fs');

// Define the file path and the content to write
const filePath = 'test.txt';
const content = 'Hello, Node.js!\n';

// Append the content to the file
fs.appendFile(filePath, content, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content successfully appended to', filePath);
  }
});