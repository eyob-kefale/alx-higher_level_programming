$.ajax({
  method: 'GET',
  url: 'https://swapi-api.hbtn.io/api/films/?format=json',
  dataType: 'json'
}).done(function (data) {
  $.map(data.results, function (obj) {
    $('ul#list_movies').append(`<li>${obj.title}</li>`);
  });
});
