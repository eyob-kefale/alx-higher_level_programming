$.ajax({
  method: 'GET',
  url: 'https://stefanbohacek.com/hellosalut/?lang=fr',
  dataType: 'json'
}).done(function (data) {
  $('div#hello').html(data.hello);
});
