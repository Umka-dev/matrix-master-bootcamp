// Technologies you must use:
// 1. HTML and CSS.
// 2. a CSS Framework: your choice between Bootstrap and Materialize). Your website should look good both on mobile and computer screens
//  (in other words, it must have a responsive design)
// 3. jQuery (at least 3 different methods of your choice, use the Documentation for inspiration and examples).
// 4. an API of your choice (make either GET or POST requests, up to you - be careful not to use any embedded code,
// you need to communicate with an API through either GET or POST request) Note here: attempt to choose an API with JSON responses,
// it’s easier to handle the data once you’ve received it. You also get glory points for any practical requests via AJAX.

const BASE_URL = 'https://world.openfoodfacts.net/api/v2/product/';
// let barcode = 3017624010701;

// Get current year
const currentYear = new Date().getFullYear();
$('#currentYear').text(currentYear);

// Hide result card
$('#display').hide();

$(document).ready(() => {
  // Function to fetch data from the API
  const fetchData = (request) => {
    barcode = request || barcode;
    $.ajax({
      method: 'GET',
      url: `${BASE_URL}${barcode}`,
      dataType: 'json',
    })
      .done((response) => {
        displayInfo(response);
      })
      .fail((err) => console.log('API request failed:', err));
  };

  // Function to display result of searching request
  const displayInfo = (response) => {
    console.log(response.product);
    if (!response.product || response.product.length === 0) {
      console.log('No products found matching your requests');
      return;
    } else {
      $('#display').show();
    }

    // Destructuring response.product
    const {
      product_name,
      image_front_small_url,
      code,
      brands,
      product_quantity,
      product_quantity_unit,
      nutriscore_grade,
      labels,
      ingredients_text_en,
      categories,
      stores,
    } = response.product;

    $('#productName').text(
      product_name
        ? product_name.charAt(0).toUpperCase() +
            product_name.slice(1).toLowerCase()
        : 'Unknown'
    );
    $('#productImage')
      .attr(
        'src',
        image_front_small_url || './images/image-coming-soon-placeholder.png'
      )
      .attr('alt', `${product_name}` || 'product');
    $('#barcode').text(code || 'N/A');
    $('#brands').text(brands || 'N/A');
    $('#productQuantity').text(
      product_quantity && product_quantity_unit
        ? `${product_quantity} ${product_quantity_unit}`
        : 'N/A'
    );
    $('#nutriscoreGrade').text(
      nutriscore_grade.charAt(0).toUpperCase() || 'N/A'
    );
    $('#labels').text(labels || 'N/A');
    $('#ingredients').text(ingredients_text_en || 'N/A');
    $('#categories').text(categories || 'N/A');
    $('#stores').text(stores || 'N/A');
  };

  // Event - Search button is clicked then get user request from the input
  $('#searchBtn').click((e) => {
    e.preventDefault();
    let userRequest = $('#search').val().trim();

    if (userRequest) {
      fetchData(userRequest);
    }
  });

  // Event - Refresh button is clicked then refresh the page
  $('#refreshBtn').click(() => {
    $('#search').val('');
    $('#display').empty();
  });

  fetchData();
});
