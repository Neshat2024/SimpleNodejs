// Import the 'fs' module
const fs = require('fs');

// Define the source and destination file paths
const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';

// Read the contents of the source file
fs.readFile(sourceFile, (err, data) => {
  if (err) {
    console.error('Error reading source file:', err);
    return;
  }

  // Write the contents to the destination file
  fs.writeFile(destinationFile, data, (err) => {
    if (err) {
      console.error('Error writing to destination file:', err);
    } else {
      console.log('File copied successfully!');
    }
  });
});
