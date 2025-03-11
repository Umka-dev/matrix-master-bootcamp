// Assignment: Tenor Gif
// What are we gonna create?
// The main purpose of most APIs is to retrieve data from a source and display it in a visual way.

// We will make use of our beloved Tenor API which documentation you can read here to create our own website of gifs which will look like this:

// Where can I start?
// First of all, sign up to get an API KEY
// Get the URL of calling the API GET request.
// The URL consists of a protocol (https:// ), the API URL of Tenor (api.tenor.com/v1/), a search query to ask for specific searches such as Cat or Dog, or TV, the API Key, and finally limit the query to limit the list of elements.
// The API should be something like https://api.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8
// Test the API in the browser. Do you see a JSON response? Then start building your application.

// Your application should have?
// HTML, CSS, and Bootstrap (optional)
// Javascript page connected to the HTML
// input field where you can put the text for the search query with a button to submit the search input.
// XMLHttpRequest to make an API call to a Tenor server
// Display a result on the page HTML under the input such as the picture above
// Submit the result on GitHub before Tuesday at 22:00.
// API_KEY = "LIVDSRZULELA"; // for testing

$(document).ready(() => {
  const API_KEY = 'your_secret_api_key'; // Put your uniq API key here
  const CLIENT_KEY = 'tenor-gif-gallery';
  const BASE_URL = 'https://tenor.googleapis.com/v2/search';
  const LIMIT = 10;

  // Function to fetch GIFs with AJAX
  const fetchGif = (searchQuery) => {
    $.ajax({
      method: 'GET',
      url: `${BASE_URL}?q=${searchQuery}&key=${API_KEY}&client_key=${CLIENT_KEY}&limit=${LIMIT}`,
      dataType: 'json',
      success: function (response) {
        displayGIFs(response);
        console.log(response);
      },
      error: function (error) {
        console.error(`Request error:`, error);
      },
    });
  };

  // Function to display GIFs
  const displayGIFs = (response) => {
    if (!response.results || response.results.length === 0) {
      console.log('No results');
      return;
    }

    // Clear gallery before add new GIFs
    $('#gallery').empty();

    $.each(response.results, (index, gif) => {
      // Get links for GIF
      let gifUrl = gif.media_formats.tinygif.url;
      let imgElement = `<img src="${gifUrl}" class="m-2" alt="GIF">`;
      $('#gallery').append(imgElement);
    });
  };

  // Function to start fetching
  const grabData = (searchTerm) => {
    if (searchTerm === undefined) {
      // searchTerm = 'ecxited';
      $('#gallery').hide();
    } else {
      $('#gallery').show();
    }
    fetchGif(searchTerm);
  };

  // Get user request from the input
  $('#searchBtn').click((e) => {
    e.preventDefault();
    let userRequest = $('#search').val().trim();

    if (userRequest) {
      grabData(userRequest);
    }
  });

  // Start when the page load
  grabData();
});
