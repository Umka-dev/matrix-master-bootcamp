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

  //For The Hide, SlideDown, SlideUp
  $('.loadMoreSection').hide();
  $('#loadMoreBtn').click(() => {
    $('.loadMoreSection').slideDown();
    $('#loadMoreBtn').slideUp();
  });

  // For The Section Fade In
  $('#fadeInText').hide();
  $('#fadeInBtn').click(() => {
    $('#fadeInText').fadeIn('slow');
  });

  // For The Section Fade Out
  $('#fadeOutBtn').click(() => {
    $('#fadeOutText').fadeOut('slow');
  });

  // For The Section Append
  $('#appendBtn').click(() => {
    $('#appendText').append(' Added text!');
  });

  // For The Section Change Color
  $('#changeColorBtn').click(() => {
    $('#colorText').css('color', 'red');
  });

  // For The Section Add Class
  $('#addClassBtn').click(() => {
    $('#addClassText').addClass('myClass');
  });

  // For The Section Change HTML
  $('#changeHTMLBtn').click(() => {
    $('#changeHTMLText').html('<h1>New text content</h1>');
  });

  // For The Section Change Text
  $('#changeTextBtn').click(() => {
    $('#changeText').text('Changed text.');
  });
});
