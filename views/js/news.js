window.onload = function(){

  var arts = [];
  var apiKey = "cba595c77c174accb49639883a82a73e";
  "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey="+apiKey
//  https://news.google.com/news?ned=ca&output=rss


  $.get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey="+apiKey, function(){
    console.log("HI");
  }).done(function(data){
    console.log("success");
    var results = '<li id="result"></li>'
    $.each(function(){
      // var el = $(this);
      // console.log("title: " + el.find("title").text());
      // $("#headline").text(el.find("title").text());
    });
  });
    //var news = res;

};
