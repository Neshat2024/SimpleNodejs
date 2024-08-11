// Get command line arguments
const args = process.argv.slice(2);

// Print the command line arguments
console.log('Command line arguments:');
args.forEach((arg, index) => {
  console.log(`${index + 1}: ${arg}`);
});