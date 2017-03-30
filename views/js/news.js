window.onload = function(){

  var arts = [];
  var apiKey = "cba595c77c174accb49639883a82a73e";
  "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey="+apiKey

  if(true){
    $.get("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey="+apiKey, function(res){
      var data = res;
      var art = res.articles;

      $.each(art, function(i,k) {
        $("#headline-list").append('<div id="healines">\
          <li>\
            '+k.title+'\
          </li>\
        </div>');
      });
    });
  } else {
    $("#headline-list").append('<div id="connection-error">\
    <a id="conct-error">No Internet Connection, Failure</a>\
    </div>');
  }
};
