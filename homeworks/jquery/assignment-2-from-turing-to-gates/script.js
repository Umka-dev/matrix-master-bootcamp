$(document).ready(function () {
  //For The Navbar Form Use Focus And Value
  $('input:text').focus(() => {
    $('input:text').val('http://');
  });
  $('.searchBtn').click((e) => {
    e.preventDefault();
    const urlAdr = $('input:text').val();
    alert(`Looking for URL ${urlAdr}`);
  });

  //For The Navbar Button Refresh The Page
  $('#refreshBtn').click(() => {
    location.reload();
  });

  //Whenever an <img> tag is clicked do this:
  $('img').click(function () {
    // Get new source for the alternative image
    let newSrc = $(this).attr('alt-pic');
    console.log('alternative image source: ', newSrc);
    // Hide the default image
    $(this).hide();
    // Change the image source and show the alternative image
    $(this).attr('src', newSrc).show();
  });
});
