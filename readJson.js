// Import the 'fs' module
const fs = require('fs');

// Define the path to the JSON file
const filePath = 'data.json';

// Read the JSON file
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);
    // Print the JSON data to the console
    console.log('JSON data:', jsonData);
  } catch (parseErr) {
    console.error('Error parsing JSON data:', parseErr);
  }
});