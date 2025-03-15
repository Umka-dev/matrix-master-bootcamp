// Technologies you must use:
// 1. HTML and CSS.
// 2. a CSS Framework: your choice between Bootstrap and Materialize). Your website should look good both on mobile and computer screens
//  (in other words, it must have a responsive design)
// 3. jQuery (at least 3 different methods of your choice, use the Documentation for inspiration and examples).
// 4. an API of your choice (make either GET or POST requests, up to you - be careful not to use any embedded code,
// you need to communicate with an API through either GET or POST request) Note here: attempt to choose an API with JSON responses,
// it’s easier to handle the data once you’ve received it. You also get glory points for any practical requests via AJAX.

const BASE_URL = 'https://world.openfoodfacts.net/api/v2/product/';
let barcode = 3017624010701;

// Function to fetch data from the API
const fetchData = (request) => {
  barcode = request ? request : barcode;
  $.ajax({
    method: 'GET',
    url: `${BASE_URL}${barcode}`,
    // url: `${BASE_URL}${barcode}?fields=${response.product.product_name},${response.product.nutriscore_data}`,
    dataType: 'json',
  })
    .done((response) => {
      displayInfo(response);
    })
    .fail((err) => console.log(err));
};

// Function to display result of searching request
const displayInfo = (response) => {
  console.log(response.product);
  if (!response.product || response.product.length === 0) {
    console.log('No products found matching your requests');
    return;
  }

  // Clear display before add new info
  $('.display').empty();

  let imgUrl = response.product.image_front_small_url;
  $('.display').append(
    `<h3 class="mb-3">${response.product.product_name}</h3>
      <img src='${imgUrl}' alt="image-${response.product.product_name_en}" class="m-3">
      <h6 class="mb-3">Barcode: ${response.product.code}</h6>
      <h6 class="mb-3">Brand: ${response.product.brands}</h6>
      <h6 class="mb-3">Product quantity: ${response.product.product_quantity} ${response.product.product_quantity_unit}</h6>
      <h6 class="mb-3">Nutriscore grade: ${response.product.nutriscore_grade}</h6>
      <h6 class="mb-3">Labels: ${response.product.labels}</h6>
      <h6 class="mb-3">Ingredients: ${response.product.ingredients_text_en}</h6>
      <h6 class="mb-3">Categories: ${response.product.categories}</h6>
      <h6 class="mb-3">Stores: ${response.product.stores}</h6>
      `
  );
};

// Get user request from the input
$('#searchBtn').click((e) => {
  e.preventDefault();
  let userRequest = $('#search').val().trim();

  if (userRequest) {
    fetchData(userRequest);
  }
});

fetchData();
