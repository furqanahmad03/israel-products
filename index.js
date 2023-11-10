$(document).ready(function () {
  $('#themeChange').click();
  $('#loader').css('display', 'none');
});
$('#themeChange').on('click', (e) => {
  $('html').toggleClass('dark');
})