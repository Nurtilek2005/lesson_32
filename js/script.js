$('.link ').on('click', function (event) {
  event.preventDefault();
  let href = $(this).attr('href');
  console.log(href);
});