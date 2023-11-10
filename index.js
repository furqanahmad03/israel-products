$(document).ready(function () {
  $('#loader').css('display', 'none');
});
$('#themeChange').on('click', (e) => {
  $('html').toggleClass('dark');
})