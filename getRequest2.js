// Import the 'axios' library
const axios = require('axios');

// Define the URL and query parameters
const query = 'Node.js';
const url = `http://example.com/search`;
const params = { query: query };

// Make the GET request
axios.get(url, { params })
  .then((response) => {
    // Print the response body
    console.log(response.data);
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error making request:', error);
  });
