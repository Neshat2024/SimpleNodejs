// Import the 'axios' library
const axios = require('axios');

// Define the URL to make the GET request to
const url = 'http://example.com';

// Make the GET request
axios.get(url)
  .then((response) => {
    // Print the response body
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error making request:', error);
  });