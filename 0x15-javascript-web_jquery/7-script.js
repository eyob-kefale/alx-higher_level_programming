$.ajax({
  method: 'GET',
  url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
  dataType: 'json'
}).done(function (data) {
  $('div#character').append(data.name);
});
