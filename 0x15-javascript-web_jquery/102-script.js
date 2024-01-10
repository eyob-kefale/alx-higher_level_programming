$(document).ready(function () {
  const url = 'https://stefanbohacek.com/hellosalut/?';
  $('INPUT#btn_translate').click(function () {
    const lang = $('INPUT#language_code').val();
    const fullUrl = `${url}lang=${lang}`;
    $.ajax({
      method: 'GET',
      url: fullUrl,
      dataType: 'json'
    }).done(function (data) {
      $('DIV#hello').html(data.hello);
    });
  });
});
