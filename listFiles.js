// Import the 'fs' module
const fs = require('fs');
const path = require('path');

// Get the current directory
const currentDirectory = __dirname;

// Read the contents of the current directory
fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log(`Contents of ${currentDirectory}:`);
  files.forEach(file => {
    // Get the full path of the file/directory
    const fullPath = path.join(currentDirectory, file);

    // Check if the path is a directory or a file
    fs.stat(fullPath, (err, stats) => {
      if (err) {
        console.error('Error getting stats for', fullPath, err);
        return;
      }

      if (stats.isDirectory()) {
        console.log(`[DIR] ${file}`);
      } else if (stats.isFile()) {
        console.log(`[FILE] ${file}`);
      }
    });
  });
});
